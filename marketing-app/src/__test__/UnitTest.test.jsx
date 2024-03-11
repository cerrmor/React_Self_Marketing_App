import { render, screen } from '@testing-library/react';
import { Header, IntroPost, PostListing, Footer } from '../Components/Layout';
import { Search } from '../Components/Shared'
import App from '../App';
import userEvent from '@testing-library/user-event';

//==============Layout Component UnitTests===============
describe('Header Component Unit Test', () => {
  it ('Renders "Header" component without crashing', () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });

  it('Renders "Home" link', () => {
    render(<Header/>);
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
  })

  it('Renders "About Us" link', () => {
    render(<Header/>);
    const linkElement = screen.getByText(/About Us/i);
    expect(linkElement).toBeInTheDocument();
  })

  it('Renders "Contact Us" link', () => {
    render(<Header/>);
    const linkElement = screen.getByText(/Contact Us/i);
    expect(linkElement).toBeInTheDocument();
  })

  it('Renders "Projects Button" link', () => {
    render(<Header/>);
    const linkElement = screen.getByRole("button", {name: /projects/i});
    expect(linkElement).toBeInTheDocument();
  })
  
  it('The "Projects Button" was clicked', () => {
    render(<Header/>);
    const buttonElement = screen.getByRole("button", {name: /projects/i});
    userEvent.click(buttonElement);
    
  })
});

describe('Footer Component Unit Test', () => {
  it ('Renders "Footer" component without crashing', () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
  });
});

describe('Intropost Component Unit Test', () => {
  it ('Renders "Intropost" component without crashing', () => {
    const { container } = render(<IntroPost />);
    expect(container).toBeInTheDocument();
  });
});

describe('Post Component Unit Test', () => {
  it ('Renders "Post" component without crashing', () => {
    const { container } = render(<PostListing />);
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