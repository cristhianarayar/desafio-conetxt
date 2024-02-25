import { useContext } from "react";
import { ApiContext } from "../components/ApiContext"

const Favorites = () => {
  const { photography, setPhotography } = useContext(ApiContext);

  const deleteFavorite = (id) => {
    const newPhotography = photography.map((df) => {
      if (df.id === id) {
        return {
          ...df,
          isFavorite: false,
        };
      }
      return df;
    });
    setPhotography(newPhotography);
  };

  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
          {
            photography.filter((photo)=>photo.isFavorite).map((photo,i) => 
            <div 
            className="photo"
            style={{ backgroundImage: `url(${photo.src.tiny})` }}
            onClick={()=> deleteFavorite(photo.id)} 
            key={i}>
            </div> 
            )
          }
      </div>
    </div>
  );
};
export default Favorites;
