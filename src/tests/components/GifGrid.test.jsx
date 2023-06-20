import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Prueba en <GifGrid />', () => {

  const category = 'Pokémon';

  test('debe de mostrar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render( <GifGrid category={ category } />);
    expect( screen.getByText('Cargando...') );
    expect( screen.getByText( category ) );

  });

  test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {

    const gifs = [
      {
        id: 'ABC',
        title: 'Pikachu',
        url: 'https://holiholiholi'
      },
      {
        id: '123',
        title: 'Charizard',
        url: 'https://charizard'
      },
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render( <GifGrid category={ category } />);
    
    expect( screen.getAllByRole('img').length ).toBe(2);

  });

});