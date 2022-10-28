import React from 'react';
import { Link } from 'react-router-dom';

const WorldList = ({
  worlds,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!worlds.length) {
    return <h3>No Worlds Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {worlds &&
        worlds.map((world) => (
          <div key={world._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${world.worldAuthor}`}
                >
                  {world.worldAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    created this world on {world.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You created this on {world.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{world.worldText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${world._id}`}
            >
              Jump into this World.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default WorldList;
