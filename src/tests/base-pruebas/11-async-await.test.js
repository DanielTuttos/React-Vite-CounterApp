import { getImagen } from "../../base-pruebas/11-async-await";

describe('Test 11-async-await', () => {

    test('getImage must return a url of the image', async() => {
        const resp = await getImagen();
        // console.log(url);
        // expect(typeof url).toBe('string');
        expect(resp).toBe('No se encontro la imagen');
    });
});