import { render, screen } from '@testing-library/react';
import { Header, IntroPost } from '../Components/Layout';
import { Search } from '../Components/Shared'
import App from '../App';

describe('Header Component Unit Test', () => {
  it ('Header component renders without crashing', () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });
});

describe('Intropost Component Unit Test', () => {
  it ('Intropost component renders without crashing', () => {
    const { container } = render(<IntroPost />);
    expect(container).toBeInTheDocument();
  });
});

describe('Search Component Unit Test', () => {
  it ('Search component renders without crashing', () => {
    const { container } = render(<Search />);
    expect(container).toBeInTheDocument();
  });
});

describe('App Unit Tests', () => {
    it('App renders without crashing', () => {
      const { container } = render(<App />);
      expect(container).toBeInTheDocument();
    });
});