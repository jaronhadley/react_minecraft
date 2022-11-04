import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import {Ground} from '../components/Ground';
import {Player} from '../components/Player';
import {FPV} from '../components/FPV'
import {Cubes} from '../components/Cubes'
import { TextureSelector } from '../components/TextureSelector';
import { Menu } from '../components/Menu';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';

import Auth from '../utils/auth';

function Craft() {
  return (
    <>
    {Auth.loggedIn() ? (
    <>
      <Canvas>
        
        <Sky sunPosition={[100,100,20]} />
        <ambientLight intensity={0.5}/>
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className='absolute centered cursor'>+</div>
      <TextureSelector />
      <Menu />
      <Header/>
    </>
      ) : (
        <p>
          You need to be logged in to add worlds. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </>
  );
}

export default Craft;