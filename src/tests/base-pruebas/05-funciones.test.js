import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Tests in 05-funciones', () => {
    test('getUser must return a object', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(testUser).toStrictEqual(user);

    });

    test('getUsuarioActivo must return a object', () => {
        const name = 'Daniel'

        const userTest = {
            uid: 'ABC567',
            username: name
        }

        const objectReturn = getUsuarioActivo(name)

        expect(objectReturn).toStrictEqual(userTest);

    });
});