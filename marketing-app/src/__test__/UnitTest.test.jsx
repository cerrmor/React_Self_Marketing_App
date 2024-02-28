import { render, screen } from '@testing-library/react';
import { Header, IntroPost, Post, Footer } from '../Components/Layout';
import { Search } from '../Components/Shared'
import App from '../App';

//==============Layout Component UnitTests===============
describe('Header Component Unit Test', () => {
  it ('Header component renders without crashing', () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });
});

describe('Footer Component Unit Test', () => {
  it ('Footer component renders without crashing', () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
  });
});

describe('Intropost Component Unit Test', () => {
  it ('Intropost component renders without crashing', () => {
    const { container } = render(<IntroPost />);
    expect(container).toBeInTheDocument();
  });
});

describe('Post Component Unit Test', () => {
  it ('Post component renders without crashing', () => {
    const { container } = render(<Post />);
    expect(container).toBeInTheDocument();
  });
});

//==============Shared Component UnitTests===============
describe('Search Component Unit Test', () => {
  it ('Search component renders without crashing', () => {
    const { container } = render(<Search />);
    expect(container).toBeInTheDocument();
  });
});

//==============App UnitTests===============
describe('App Unit Tests', () => {
    it('App renders without crashing', () => {
      const { container } = render(<App />);
      expect(container).toBeInTheDocument();
    });
});