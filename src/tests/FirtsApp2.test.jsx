import { render, screen } from "@testing-library/react";
import { FirtsApp } from "../FirtsApp";

describe('Tests in <FirtsApp />', () => {

    const title = "Hola que tal como estan";
    const subtitle = "Soy un subtitulo";


    test('must have match with snapshot', () => {
        const { container } = render(<FirtsApp title={title} />)
        expect(container).toMatchSnapshot();
    });

    test('must to show the message "Hola que tal como estan"', () => {
        render(<FirtsApp title={title} />)
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('must to show the title in h1', () => {
        render(<FirtsApp title={title} />)
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });

    test('Must to show the subtitle to send by props', () => {
        render(
            <FirtsApp
                title={title}
                subtitle={subtitle}
            />
        )
        expect(screen.getAllByText(subtitle).length).toBe(2);// verifica que vengan 2
    });

})