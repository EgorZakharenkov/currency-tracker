import { Component } from 'react';

import styled from 'styled-components';

import { StyledSuggestions } from '@/components/Suggestion/styled';

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
