import React, { ChangeEvent, Component } from 'react';

import styled from 'styled-components';

import { images } from '@/constants/images';

interface SearchState {
  value: string;
  setValue: (value: string) => void;
}

export class Search extends Component<SearchState, {}> {
  constructor(props: SearchState) {
    super(props);
    this.state = {
      value: '',
    };
  }
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.setValue(event.target.value);
  };

  render() {
    const { value } = this.props;
    return (
      <StyledSearch>
        <input placeholder="Сurrency search..." value={value} onChange={this.handleChange} />
        <img src={images.search} alt="search" />
      </StyledSearch>
    );
  }
}

export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.paddings.lg}px;
  margin-top: ${({ theme }) => theme.paddings.lg}px;
  background: ${({ theme }) => theme.colors.search};
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;

  input {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    background: transparent;
  }
`;
