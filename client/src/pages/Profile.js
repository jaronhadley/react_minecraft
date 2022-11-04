import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  console.log(user)
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <div>
      <Header />
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5" id='welcome'>
          Hi {user.username}!
        </h2>
        {user.worlds[0] ? (
        <div className="col-12 col-md-10 mb-5" id='worlds' >
          <Link to="/worlds">Jump into your world ({user.worlds[0].title})</Link><br></br>
          Last Updated: {user.worlds[0].lastUpdated} <br></br>
          Created: {user.worlds[0].creationDate}
        </div>) : (
          <div id='worlds'> No Worlds Created At This Time 
            <br></br><br></br><Link className='text-link' to="/worlds">Create your world! </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;