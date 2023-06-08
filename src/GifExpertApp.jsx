import { useState } from 'react';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Pokémon', 'asdasd']);

  console.log(categories);

  return (
    <>
      {/* titulo */}
        <h1>GifExpertApp</h1>

      {/* Input */}

      {/* Listado de Gif */}

      <ol>
        { categories.map( category => {
            return <li key={ category }>{category}</li>
        }) 
        }
        {/* <li></li> */}
      </ol>
        {/* Gif Item */}


    </>    
  )
}