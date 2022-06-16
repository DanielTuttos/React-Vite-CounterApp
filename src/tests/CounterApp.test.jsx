import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../CounterApp";

describe('Tests in <CounterApp />', () => {

    const initialValue = 10

    test('must have match with snapshot', () => {
        const { container } = render(<CounterApp value={initialValue} />)
        expect(container).toMatchSnapshot();
    });

    test('must have initial value of 100', () => {
        render(<CounterApp value={100} />)
        expect(screen.getByText(100)).toBeTruthy();
        // expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(`${value}`)
    });

    test('must increment with button +1', () => {

        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy();

    });

    test('must Decrement with button -1', () => {

        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('9')).toBeTruthy();

    });

    test('must Decrement with button reset', () => {

        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        // fireEvent.click(screen.getByText('RESET'))
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }))

        expect(screen.getByText(initialValue)).toBeTruthy();

    });

})