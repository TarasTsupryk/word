import React from "react";
import { render, screen } from '@testing-library/react';
import Word from './Word';

describe("Word", () => {
  it("default", () => {
    render(<Word word="яблуко" />);
    expect(screen.getByTestId('word')).toBeInTheDocument();
    expect(screen.getByTestId('word')).toHaveTextContent('Яблуко');
  });
});
