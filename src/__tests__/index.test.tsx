import HomePage from '@/pages/index';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('HomePage', () => {
  it('renders a heading', () => {
    render(<HomePage />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
