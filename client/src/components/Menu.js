import { useStore } from "../hooks/useStore"
import { ADD_WORLD } from '../utils/mutations'
import { useMutation } from '@apollo/client'

export const Menu = () => {
    const resetWorld = useStore(state => state.resetWorld)
    const cubes = useStore(state => state.cubes)
    const [saveToMongo] = useMutation(ADD_WORLD)

    return (<div className="menu absolute">
        <button 
        onClick={() => {
            console.log(cubes)
            saveToMongo('testTitle', cubes);
        }}
        >
            Save
        </button>
        <button
        onClick={() => resetWorld()}
        >
            Reset
        </button>
    </div>)
}