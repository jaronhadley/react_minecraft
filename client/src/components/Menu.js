import { useStore } from "../hooks/useStore"
import { ADD_WORLD } from '../utils/mutations'
import { useMutation } from '@apollo/client'
import auth from '../utils/auth';

export const Menu = () => {
    const resetWorld = useStore(state => state.resetWorld)
    const cubes = useStore(state => state.cubes)
    const [saveToMongo, {data, loading, error}] = useMutation(ADD_WORLD)

    return (<div className="menu absolute">
        <button className="saveButton"
        onClick={() => {
            const id = auth.getProfile().data._id;
            const updateTime = new Date();

            console.log({results: 'testTitle', id, cubes})

            saveToMongo({
                variables: {
                    title: 'testTitle',
                    authorId: id,
                    cubeArray: cubes,
                    lastUpdated: updateTime,
                }
            });
        }}
        >
            Save
        </button>
        <button className="resetButton"
        onClick={() => resetWorld()}
        >
            Reset
        </button>
    </div>)
}