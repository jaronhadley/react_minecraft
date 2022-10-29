import { nanoid } from 'nanoid'
import create from 'zustand'

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))
const setLocalStorage = (key,value) => window.localStorage.setItem(key, JSON.stringify(value))
const saveToMongo = (world) => fetch();
const loadFromMongo = (id) => fetch();

export const useStore = create((set) => ({
    texture:'dirt',
    cubes: getLocalStorage('lastSave') || [],
    addCube: (x,y,z) => {
        set((prev) => ({
            cubes: [
                ...prev.cubes,
                {
                    key: nanoid(),
                    pos:[x,y,z],
                    texture: prev.texture
                }
            ]
        }))
    },
    removeCube: (x,y,z) =>{
        set((prev) => ({
            cubes: prev.cubes.filter(cube => {
                const [X,Y,Z] = cube.pos
                return X !== x || Y !== y || Z!== z
            }),
        }))
    },
    setTexture: ( texture) => {
        set(() => ({
            texture
        }))
    },
    saveWorld: () => {
        set((prev) => {
            setLocalStorage('lastSave', prev.cubes)
        })
    },
    resetWorld: () => {
        set(() => ({
            cubes: []
        }))
    },
}))