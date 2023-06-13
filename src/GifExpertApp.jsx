import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Pokémon']);

  const onAddCategory = ( newCategory ) => {

    if ( categories.includes(newCategory) ) return;
    
    setCategories([ newCategory, ...categories]);
    // setCategories( cat => [ ...cat, 'Dragon Ball']);
  }

  return (
    <>
        <h1>GifExpertApp</h1>
      <AddCategory 
        onNewCategory={ (value) => onAddCategory(value) }
      />

      { categories.map( category =>(
          <GifGrid key={ category } category={ category }/>
        )) 
      } 
        


    </>    
  )
}