import { render, screen } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});

describe("Renders main page correctly", async () => {
    it("Should render the page correctly", async () => {
    // Setup
    render(<App />);
    const h1 = await screen.queryByText("Hello World!");

    // Expectations
    expect(h1).toBeInTheDocument();
    });
});