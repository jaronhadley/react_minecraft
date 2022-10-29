// import { Canvas } from '@react-three/fiber';
// import { Sky } from '@react-three/drei';
// import { Physics } from '@react-three/cannon';
// import {Ground} from './components/Ground';
// import {Player} from './components/Player';
// import {FPV} from './components/FPV'
// import {Cubes} from './components/Cubes'
// import { TextureSelector } from './components/TextureSelector';
// import { Menu } from './components/Menu';


// function App() {
//   return (
//     <>
//       <Canvas>
//         <Sky sunPosition={[100,100,20]} />
//         <ambientLight intensity={0.5}/>
//         <FPV />
//         <Physics>
//           <Player />
//           <Cubes />
//           <Ground />
//         </Physics>
//       </Canvas>
//       <div className='absolute centered cursor'>+</div>
//       <TextureSelector />
//       <Menu />
//     </>
//   );
// }

// export default App;
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Header from './components/Header';
import WorldList from './components/WorldList';
import Craft from './pages/Craft';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/me"
                element={<Profile />}
              />
              <Route 
                path="/profiles/:username" 
                element={<Profile />}
              />
              {/* <Route path="/worlds/" 
                element={<WorldList />}
              /> */}
               <Route path="/worlds" 
                element={<Craft />}
              />
            
            </Routes>
             
          </div>
          
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
