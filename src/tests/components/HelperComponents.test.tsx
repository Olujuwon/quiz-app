import { render, screen } from '@testing-library/react';
import LoadingComponent from '../../Components/Loading';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from '../../Components/NotFound';

describe('Helper Components', () => {
    test('Loading', () => {
        render(<LoadingComponent />);
        expect(screen.getByText('...Loading')).toBeInTheDocument();
    });

    test('Not found', () => {
        render(
            <Router>
                <NotFound />
            </Router>
        );
        expect(screen.getByText('Page not found')).toBeInTheDocument();
        const linkElement = screen.getByText('Back to quiz');
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '/');
    });
});
