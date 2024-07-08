import { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import IconHeart from "./IconHeart";

const Gallery = () => {

  const {photos, like} = useContext(PhotoContext)

  useEffect(() => {
    console.log(photos)
  },[photos])

  return(
    <div className="gallery grid-columns-5 grid-columns-4 p-3">

    {photos.map(photo => (
      <div key={photo.id} className="photo" style={{
        backgroundImage: `url(${photo.src.tiny})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width:'90%'
      }}>
        <IconHeart
          onClick= {() => {like(photo.id, photo.liked)}}
          filled={photo.liked}
        />
        <p>{photo.alt}</p>
      </div>
    ))}
  </div>
  )

}
export default Gallery;
