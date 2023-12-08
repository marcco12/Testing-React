
describe('Pruebas en <DemoComponent />', () => { 
    test('Una bonita prueba', () => {
        // Arrange
    
        const mensaje = 'Hola mundo';
    
        // Act
    
        const message2 = mensaje.toUpperCase();
    
        // Assert
    
        expect(message2).toBe('HOLA MUNDO');
    })
    
 })
