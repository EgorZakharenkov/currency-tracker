import React, { Component } from 'react';

import { CandlestickChart } from '@/components/CandlestickChart';
import { Notification } from '@/components/Notification';
import { Select } from '@/components/ui/Select';
import { Container } from '@/pages/TimeLine/styled';
import { chartObserver, displayNotify } from '@/utils/observer';

interface Option {
  value: number;
}

interface TimeLineState {
  selected: number;
  notificationVisible: boolean;
}

export class TimeLine extends Component<{}, TimeLineState> {
  options: Option[] = [{ value: 7 }, { value: 15 }, { value: 29 }, { value: 30 }];

  constructor(props: {}) {
    super(props);
    this.state = {
      selected: 7,
      notificationVisible: false,
    };
  }

  componentDidMount() {
    displayNotify.subscribe(this.handleChartBuilt);
    chartObserver.subscribe(displayNotify);
  }

  componentWillUnmount() {
    displayNotify.unsubscribe(this.handleChartBuilt);
    chartObserver.unsubscribe(displayNotify);
  }

  handleSelected = (value: number) => {
    this.setState({ selected: value });
  };

  handleChartBuilt = () => {
    this.setState({ notificationVisible: true });

    setTimeout(() => {
      this.setState({ notificationVisible: false });
    }, 3000);
  };

  render() {
    const { selected, notificationVisible } = this.state;

    return (
      <Container>
        <Select options={this.options} setSelected={this.handleSelected} selected={selected} />
        <CandlestickChart days={selected} />
        <Notification message="The 30-day schedule has been successfully completed!" isVisible={notificationVisible} />
      </Container>
    );
  }
}
