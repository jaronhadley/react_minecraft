import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';

// import {  ADD_WORLD } from '../../utils/mutations';
// import { QUERY_WORLDS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const WorldForm = () => {
  const [worldText, setWorldText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

//   const [addWorld, { error }] = useMutation(ADD_WORLD, {
//     update(cache, { data: { addWorld } }) {
//       try {
//         const { worlds } = cache.readQuery({ query: QUERY_WORLDS });

//         cache.writeQuery({
//           query: QUERY_WORLDS,
//           data: { worlds: [addWorld, ...worlds] },
//         });
//       } catch (e) {
//         console.error(e);
//       }

//       // update me object's cache
//       const { me } = cache.readQuery({ query: QUERY_ME });
//       cache.writeQuery({
//         query: QUERY_ME,
//         data: { me: { ...me, worlds: [...me.worlds, addWorld] } },
//       });
//     },
//   });

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const { data } = await addWorld({
  //       variables: {
  //         worldText,
  //         worldAuthor: Auth.getProfile().data.username,
  //       },
  //     });

  //     setWorldText('');
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'worldText' && value.length <= 30) {
      setWorldText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>Want to add a new World?</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 30 ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/30
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            // onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="worldText"
                placeholder="Add a new world..."
                value={worldText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add World
              </button>
            </div>
            {(
              <div className="col-12 my-3 bg-danger text-white p-3">error went here
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add worlds. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export  default WorldForm();