import React from 'react';
import { useQuery } from '@apollo/client';

import WorldList from '../components/WorldList/index';
import WorldForm from '../components/WorldForm/index';

import { QUERY_WORLDS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_WORLDS);
  const worlds = data?.worlds || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <WorldForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <WorldList
              worlds={worlds}
              title="Your Worlds"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;