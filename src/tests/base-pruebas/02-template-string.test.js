import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Tests in 02-template-string js', () => {
    test('getSaludo must return "Hola Daniel"', () => {
        const name = 'Daniel';
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`)
    });
});