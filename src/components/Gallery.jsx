import { ApiContext } from './ApiContext';
import IconHeart from './IconHeart'
import { useContext } from 'react'

const Gallery = () => {

  const {photography, setPhotography} = useContext(ApiContext)

  const addFavorite = (id) => {
    const JsPhotography = photography.map((df) => {
      if (df.id === id) {
        return {
          ...df,
          isFavorite: !df.isFavorite,
        }
      }
      
      return df;
    })
    setPhotography(JsPhotography);
  };

  return (
  <>
    <div className="gallery grid-columns-5 p-3">
      {
        photography.map((df, i) => 
        <div
          onClick={() => addFavorite(df.id)}
          className="photo"
          style={{ backgroundImage: `url(${df.src.tiny})` }}
          key={i}
        >
          <IconHeart filled={df.isFavorite} />

          <p> {df.desc} </p>
        </div>
        )
      }
       
    </div>
  </>);
};
export default Gallery;

