import { Component } from 'react';

import { Map } from '@/components/Map';
import { Search } from '@/components/Search';
import { Suggestion } from '@/components/Suggestion';
import { BankContainer, SearchContainer } from '@/pages/Bank/styled';
import { SubTitle } from '@/styles/styled';

interface BankState {
  value: string;
  open: boolean;
}
export class Bank extends Component<{}, BankState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value: '',
      open: false,
    };
  }
  lng = 30.2049;
  lat = 55.1904;

  setValue = (value: string) => {
    this.setState({ value });
    this.setState({ open: true });
  };
  onSelect = (value: string) => {
    this.setState({ value });
    this.setState({ open: false });
  };
  render() {
    const { value, open } = this.state;
    const suggestions = ['usd', 'eur'].filter((suggestion) => suggestion.toLowerCase().includes(value.toLowerCase()));
    const banks = [
      { name: 'Bank 1', coordinates: [30.205, 55.1908], currency: ['eur', 'usd'] },
      { name: 'Bank 2', coordinates: [30.209, 55.192], currency: ['usd'] },
      { name: 'Bank 3', coordinates: [30.203, 55.188], currency: ['eur', 'gbp'] },
    ].filter(
      (bank) => bank.currency && bank.currency.some((item) => item.toLowerCase() === this.state.value.toLowerCase()),
    );
    return (
      <BankContainer>
        <SubTitle size="xl" color="primary">
          Search currency in the bank
        </SubTitle>
        <SearchContainer>
          <Search value={value} setValue={this.setValue} />
          {open && value && <Suggestion onSelect={this.onSelect} suggestions={suggestions} />}
        </SearchContainer>
        <Map lat={this.lat} lng={this.lng} markers={banks} />
      </BankContainer>
    );
  }
}
