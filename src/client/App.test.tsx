import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

describe('App', () => {
  it('can mount', () => {
    render(<App />);
    expect(screen.getByText('Sample')).toHaveTextContent('Sample');
  });
});
