import { useEffect, useState } from 'react';

import { GifItem } from './GifItem';

import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages(newImages);
  }

  useEffect( () => {
    getImages();
  },[])

  return (
    <>
      <h3>{ category }</h3>

      <div className='card-grid'>
        {
          images.map( ( image ) => (
            <GifItem 
              key={ image.id }
              {...image}
              // La linea de arriba es para obtener las propiedades del elemento, es lo mismo 
              // que la las dos lineas de abajo
              // tittle={ image.tittle }
              // url={ image.url }
            />
          ))
        }
      </div>
    </>
  )
}
