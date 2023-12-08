
import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => { 
    test('should hacer macth con el snapshot', () => { 
        const title = 'Soy Vegeta';
        const {container} = render( <FirstApp title={title}/> )
        expect(container).toMatchSnapshot();
     });

     test('should mostrar el título en un H1', () => { 
        const title = 'Soy Vegeta';
        const {container, getByText} = render( <FirstApp title={title}/> )
        
        expect(getByText(title)).toBeTruthy();
      })
 })