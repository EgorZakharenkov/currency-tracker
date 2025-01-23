import { Component, FC, useState } from 'react';

import { NotificationWrapper } from '@/components/Notification/styled';

interface NotificationProps {
  message?: string;
  isVisible: boolean;
}

export class Notification extends Component<NotificationProps> {
  render() {
    const { message, isVisible } = this.props;

    return <NotificationWrapper isVisible={isVisible}>{message}</NotificationWrapper>;
  }
}

interface CounterProps {
  title: string;
}

export const Counter: FC<CounterProps> = ({ title }) => {
  const [counter, setCounter] = useState<number>(0);

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={incrementCounter}>Increase Counter</button>
      <p>Current Count: {counter}</p>
    </div>
  );
};
