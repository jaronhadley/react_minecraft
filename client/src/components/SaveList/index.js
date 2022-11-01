import React from 'react';
import { Link } from 'react-router-dom';

const SaveList = ({
  saves,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!saves.length) {
    return <h3>No Saves Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {saves &&
        saves.map((save) => (
          <div key={save._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${save.saveAuthor}`}
                >
                  {save.saveAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    created this save on {save.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You created this on {save.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{save.saveText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${save._id}`}
            >
              Jump into this World.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default SaveList;