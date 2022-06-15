import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

import heroesData from '../../data/heroes';


describe('Tests in 08-imp-exp', () => {
    test('getHeroeById must return a hero by ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        // console.log(hero)
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });

    test('getHeroeById must return undefined if the id does not exist ', () => {
        const id = 100;
        const hero = getHeroeById(id);
        // console.log(hero)
        expect(hero).toBeFalsy();
    });

    // tarea
    test('getHeroesByOwner must return array with dc hero', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        // console.log(heroes)
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

        expect(heroes).toEqual(heroesData.filter((heroe) => heroe.owner === owner))
    });

    test('getHeroesByOwner must return array with Marvel hero', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        // console.log(heroes)
        expect(heroes.length).toBe(2);
        expect(heroes).toEqual(heroesData.filter((heroe) => heroe.owner === owner))
    });
});