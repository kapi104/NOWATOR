import { describe, it, expect, beforeEach } from 'vitest';
import Header from '../src/components/Header/Header';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  beforeEach(() => {
    render(<Header />, { wrapper: MemoryRouter });
  });

  it('should render Header component', () => {
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('should render logo', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render 5 links', () => {
    expect(screen.getAllByRole('link')).toHaveLength(5);
  });
});
