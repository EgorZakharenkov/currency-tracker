import { Component } from 'react';

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
