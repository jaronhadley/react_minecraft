import {dirtImg,logImg,grassImg,glassImg,woodImg} from './images' 
import {TextureLoader} from 'three';

const dirtTexture = new TextureLoader().load(dirtImg);
const logTexture = new TextureLoader().load(logImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);

// separate texture for ground
const groundTexture = new TextureLoader().load(grassImg);

export {
    dirtTexture,
    logTexture,
    grassTexture,
    glassTexture,
    woodTexture,
    groundTexture,
}
