import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Pokémon', 'Transformers']);

  const onAddCategory = () => {
    setCategories([ ...categories, 'Dragon Ball']);
    // setCategories( cat => [ ...cat, 'Dragon Ball']);
  }

  return (
    <>
      {/* titulo */}
        <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory setCategories={setCategories}/>

      {/* Listado de Gif */}
      {/* <button onClick={ onAddCategory }>Agregar</button> */}
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