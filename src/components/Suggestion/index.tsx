import { Component } from 'react';

import styled from 'styled-components';

interface SuggestionProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
}

export class Suggestion extends Component<SuggestionProps, {}> {
  constructor(props: SuggestionProps) {
    super(props);
  }
  handleClick = (suggestion: string) => () => {
    this.props.onSelect(suggestion);
  };
  render() {
    const { suggestions } = this.props;
    return (
      <StyledSuggestions>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={this.handleClick(suggestion)}>
            {suggestion.toUpperCase()}
          </li>
        ))}
      </StyledSuggestions>
    );
  }
}

export const StyledSuggestions = styled.ul`
  position: absolute;
  top: calc(100% + 10px);
  width: 100%;
  list-style: none;
  background: ${({ theme }) => theme.colors.search};
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 10;

  li {
    padding: ${({ theme }) => theme.paddings.md}px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.activeLink};
    }

    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    }
  }
`;
