import { useEffect, useState, createContext } from "react";

export const PhotoContext = createContext();

const PhotoProvider = ({children}) => {

    const [photos, setPhotos] = useState([]);

    const urlPhotos = '/photos.json'

    const findPhotos = async (url) => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setPhotos(data.photos || [])
        } catch (e) {
            setPhotos([])
        }
    }

    useEffect(() => {
        findPhotos(urlPhotos)
    }, [])


    const like = (photoId, state) => {
        console.log('aqui')
        const changeLike = photos.map(photo => (
            photo.id === photoId ? { ...photo, liked: !state } : photo
        ))
        setPhotos(changeLike)
    }

    const globalState = {
        photos,
        like
    }

    return(
        <PhotoContext.Provider value={globalState}>
            {children}
        </PhotoContext.Provider>
    );

}

export default PhotoProvider;