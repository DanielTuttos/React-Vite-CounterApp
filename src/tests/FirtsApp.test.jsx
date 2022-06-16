import { render } from "@testing-library/react";
import { FirtsApp } from "../FirtsApp";

describe('Tests in <FirtsApp />', () => {



    // test('must have match whit snapshot', () => {

    //     const { container } = render(<FirtsApp title={title} />)

    //     expect(container).toMatchSnapshot();
    // });

    test('must to show the title in h1', () => {
        const title = "Hola que tal como estan";
        const subtitle = "Soy un subtitulo";
        const { container, getByText, getByTestId } = render(<FirtsApp title={title} />)

        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);
        expect(getByTestId('test-title').innerHTML).toContain(title)

    });

    test('Must to show the subtitle send to props', () => {
        const title = "Hola que tal como estan";
        const subtitle = "Soy un subtitulo";
        const { getAllByText } = render(
            <FirtsApp
                title={title}
                subtitle={subtitle}
            />
        )

        expect(getAllByText(subtitle).length).toBe(2);// verifica que vengan 2
    });

})