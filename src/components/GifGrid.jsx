import PropTypes from 'prop-types';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category ) ;

  return (
    <>
      <h3>{ category }</h3>
      {
        isLoading && ( <h2>Cargando...</h2> )
      }
      

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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}