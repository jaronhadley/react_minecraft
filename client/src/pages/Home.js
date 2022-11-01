import React from 'react';
import { useQuery } from '@apollo/client';

import SaveList from '../components/SaveList/index';
import SaveForm from '../components/SaveForm/index';

import { QUERY_SAVES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_SAVES);
  const saves = data?.saves || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <SaveForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <SaveList
              saves={saves}
              title="Your Worlds"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;