import { createContext, useEffect, useState } from "react"

export const ApiContext = createContext()

const PHOTO_URL = "/photos.json";

const ApiProvider = ({ children }) => {

    const [photography, setPhotography] = useState([])
    
    const handlerGallery = async () => {
        const response = await fetch(PHOTO_URL)
        const { photos: photographyDB } = await response.json()
        setPhotography(photographyDB.map((ph) => (
                {...ph, isFavorite: false }
            )
        ));
    };

  useEffect(() => {
    handlerGallery();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        photography,
        setPhotography,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
export default ApiProvider;