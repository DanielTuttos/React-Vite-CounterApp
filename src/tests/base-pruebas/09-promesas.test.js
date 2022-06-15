import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('Tests in 09-promesas', () => {
    test('getHeroeByIdAsync must return a hero', () => {
        const id = 1;
        // jest.setTimeout(7000);
        return getHeroeByIdAsync(id).then(hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
        })
    });

    test('getHeroeByIdAsync must return a error if hero does not exist', () => {
        const id = 100;
        // jest.setTimeout(7000);
        return getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBeFalsy();
            })
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe 100');
            })
    });
});