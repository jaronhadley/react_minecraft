import React from 'react';
import { useQuery } from '@apollo/client';
import Header from '../components/Header';
//import WorldList from '../components/WorldList/index';
//import WorldForm from '../components/WorldForm/index';

import { QUERY_WORLDS } from '../utils/queries';

const Home = () => {

  return (
    <main>
      <Header />
      {/* <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          world went here
        </div>
        <div className="col-12 col-md-8 mb-3">
        <div>loading goes here</div>
        </div>
      </div> */}
    </main>
  );
};

export default Home;