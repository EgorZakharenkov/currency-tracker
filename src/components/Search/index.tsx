import React, { ChangeEvent, Component } from 'react';

import { StyledSearch } from '@/components/Search/styled';
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
