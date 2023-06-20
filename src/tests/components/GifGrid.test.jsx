import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../components/GifGrid';



describe('Prueba en <GifGrid />', () => {

  const category = 'Pokémon';

  test('debe de mostrar el loading inicialmente', () => {

    render( <GifGrid category={ category } />);
    expect( screen.getByText('Cargando...') );
    expect( screen.getByText( category ) );

  });

  test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {

  });

});