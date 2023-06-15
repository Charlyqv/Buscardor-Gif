import { render } from '@testing-library/react';
import { GifItem } from '../../components/GifItem';

describe('Pruebas en GifItem', () => {

  const title = 'Pikachu';
  const url = 'https://pikachu.com/pikapika.jpg';

  test('Debe hacer match con el snapshot', () => {

    const { container } = render( <GifItem title={ title } url={ url } /> );
    expect( container).toMatchSnapshot();

  });
});