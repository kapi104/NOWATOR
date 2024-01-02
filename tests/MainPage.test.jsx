import { render, screen } from '@testing-library/react';
import { beforeEach, describe, it, expect } from 'vitest';
import MainPage from '../src/Routes/MainPage/MainPage';
import { MemoryRouter } from 'react-router-dom';

describe('MainPage', () => {
  beforeEach(() => {
    render(<MainPage />, { wrapper: MemoryRouter });
  });

  describe('Landing page', () => {
    it('should render Landing page div', () => {
      expect(screen.getByTestId('Landing background')).toBeInTheDocument();
    });

    it('should render Landing page text', () => {
      expect(screen.getByTestId('Landing span')).toBeInTheDocument();
    });

    it('should render LandingButton component', () => {
      expect(screen.getAllByRole('link')[0]).toBeInTheDocument();
    });
  });

  describe('Link panels', () => {
    it('should display 4 panels with links', () => {
      expect(screen.getAllByTestId('panel')).toHaveLength(4);
    });
  });
});
