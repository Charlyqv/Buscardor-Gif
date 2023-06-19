import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

  test ('debe de cambiar el valor de la caja de texto', () => {

    render( <AddCategory onNewCategory={ () => {} } />);
    
    const input = screen.getByRole('textbox');

    fireEvent.input( input, { target: { value: 'Pokémon'} });

    expect( input.value ).toBe('Pokémon');

  });
});