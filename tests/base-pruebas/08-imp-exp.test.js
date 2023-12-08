import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeByID debe devolver un héroe por ID', () => { 
        const ID = 1;

        const hero = getHeroeById(ID);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
     })

     test('getHeroeByID debe retornar undefined si el ID no existe', () => { 
        const ID = 100;

        const hero = getHeroeById(ID);

        expect(hero).toBeFalsy();
     })

     test('getHeroesByOwner debe devolver un array de héroes por Owner', () => { 
        let owner = 'DC';

        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);

        owner = 'Marvel';

        const heroes2 = getHeroesByOwner(owner);
        
        expect(heroes2.length).toBe(2);
        expect(heroes2).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ]);
     });
 })