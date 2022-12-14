import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

export const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="flex-row justify-space-between-lg justify-center align-center">
        <div>
              <Link className='text-link' id='home' to="/">
                <h1 className="m-0">Pixel Block Party</h1>
              </Link>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="text-link btn btn-lg btn-info m-2" id='profile-name' to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" id='logout' onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <> <div>
              <Link className="btn btn-lg btn-info m-2" id='login' to="/login">
                Login
              </Link>
             
              <Link className="btn btn-lg btn-light m-2" id='signup' to="/signup">
                Signup
              </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};


export default Header;