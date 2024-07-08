import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";

const Favorites = () => {

  const {photos} = useContext(PhotoContext)

  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
      <div className="gallery grid-columns-5 grid-columns-4 p-3">
      {
          photos.filter(likedPhoto =>likedPhoto.liked).map(photo => (
            <div key={photo.id} className="photo" style={{
              backgroundImage: `url(${photo.src.tiny})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width:'90%'
            }}>
            </div>
          ))
        }
      </div>
    </div>
  );
};
export default Favorites;
