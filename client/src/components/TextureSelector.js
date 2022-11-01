import { useEffect, useState } from "react"
import { useKeyboard } from "../hooks/useKeyboard"
import { useStore } from "../hooks/useStore"
import {dirtImg,logImg,grassImg,glassImg,woodImg,daisyImg,redBrickImg,netheriteImg,oakSaplingImg,goldImg,sandstoneImg,snowImg,steveImg} from '../images/images' 

const images = {
    dirt: dirtImg,
    grass: grassImg,
    glass: glassImg,
    wood: woodImg,
    log: logImg,
    daisy: daisyImg,
    redBrick: redBrickImg,
    netherite: netheriteImg,
    oakSapling: oakSaplingImg,
    gold: goldImg,
    sandstone: sandstoneImg,
    snow: snowImg,
    steve: steveImg
}

export const TextureSelector = () => {
    const [visible, setVisible] = useState(false)
    const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture])
    const {dirt,grass,glass,wood,log,daisy,redBrick,netherite,oakSapling,gold,sandstone,snow,steve} = useKeyboard()


    useEffect(() => {
        const textures = {
            dirt,
            grass,
            glass,
            wood,
            log,
            daisy,
            redBrick,
            netherite,
            oakSapling,
            gold,
            sandstone,
            snow,
            steve
        }    
        const pressedTexture = Object.entries(textures).find(([k,v]) => v)
        if(pressedTexture){
            setTexture(pressedTexture[0])
        }
    }, [setTexture,dirt,grass,glass,wood,log,daisy,redBrick,netherite,oakSapling,gold,sandstone,snow,steve])

    useEffect(() => {
        const visibilityTimeout = setTimeout(() => {
            setVisible(false)
        },2000)
        setVisible(true)
        return () => {
            clearTimeout(visibilityTimeout)
        }
    },[activeTexture])

    return visible && (
        <div className='absolute centered texture-selector'>
			{Object.entries(images).map(([k, src]) => {
				return (<img
					key={k}
					src={src}
					alt={k}
					className={`${k === activeTexture ? 'active' : ''}`}
				/>)
			})}
		</div>
    )
}