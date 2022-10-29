import {dirtImg,logImg,grassImg,glassImg,woodImg,redBrickImg,goldImg,daisyImg,netheriteImg,oakSaplingImg,sandstoneImg,snowImg,} from './images' 
import {TextureLoader, NearestFilter, RepeatWrapping} from 'three';

const dirtTexture = new TextureLoader().load(dirtImg);
const logTexture = new TextureLoader().load(logImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const redBrickTexture = new TextureLoader().load(redBrickImg);
const goldTexture = new TextureLoader().load(goldImg);
const daisyTexture = new TextureLoader().load(daisyImg);
const netheriteTexture = new TextureLoader().load(netheriteImg);
const oakSaplingTexture = new TextureLoader().load(oakSaplingImg);
const sandstoneTexture = new TextureLoader().load(sandstoneImg);
const snowTexture = new TextureLoader().load(snowImg);


// separate texture for ground
const groundTexture = new TextureLoader().load(grassImg);

dirtTexture.magFilter= NearestFilter
logTexture.magFilter = NearestFilter
grassTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter
groundTexture.magFilter = NearestFilter

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping
groundTexture.repeat.set(100,100)


export {
    dirtTexture,
    logTexture,
    grassTexture,
    glassTexture,
    woodTexture,
    groundTexture,
}
