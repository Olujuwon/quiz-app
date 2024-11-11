import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../../Components/Buttons';

describe('Button Component', () => {
    const mockOnClick = jest.fn();

    test('should render the button with primary style by default', () => {
        render(<Button onClick={mockOnClick}>Primary Button</Button>);

        const button = screen.getByRole('button', { name: /primary button/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('bg-[color:var(--color-main)]');
    });

    test('should render the button with secondary style when "type" is secondary', () => {
        render(
            <Button type="secondary" onClick={mockOnClick}>
                Secondary Button
            </Button>
        );

        const button = screen.getByRole('button', { name: /secondary button/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('bg-[color:var(--color-white)]');
    });

    test('should render the button with link style when "type" is link', () => {
        render(
            <Button type="link" onClick={mockOnClick}>
                Link Button
            </Button>
        );

        const button = screen.getByRole('button', { name: /link button/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('bg-transparent');
    });

    test('should render an icon if provided', () => {
        const Icon = () => <span>Icon</span>;
        render(
            <Button icon={<Icon />} onClick={mockOnClick}>
                Button with Icon
            </Button>
        );

        const icon = screen.getByText('Icon');
        expect(icon).toBeInTheDocument();
    });

    test('should call onClick when the button is clicked', () => {
        render(<Button onClick={mockOnClick}>Click Me</Button>);

        const button = screen.getByRole('button', { name: /click me/i });
        fireEvent.click(button);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
