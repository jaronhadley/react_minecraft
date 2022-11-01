import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import {  ADD_SAVE } from '../../utils/mutations';
import { QUERY_ME, QUERY_SAVES } from '../../utils/queries';

import Auth from '../../utils/auth';

const SaveForm = () => {
  const [saveText, setSaveText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addSave, { error }] = useMutation(ADD_SAVE, {
    update(cache, { data: { addSave } }) {
      try {
        const { saves } = cache.readQuery({ query: QUERY_SAVES });

        cache.writeQuery({
          query: QUERY_SAVES,
          data: { saves: [addSave, ...saves] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, saves: [...me.saves, addSave] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addSave({
        variables: {
          saveText,
          saveAuthor: Auth.getProfile().data.username,
        },
      });

      setSaveText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'saveText' && value.length <= 30) {
      setSaveText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>Want to create a new Save?</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 30 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/30
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="saveText"
                placeholder="Add a new save..."
                value={saveText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Create Save
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add saves. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export  default SaveForm();