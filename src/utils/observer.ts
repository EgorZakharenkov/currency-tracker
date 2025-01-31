class ChartObserver {
  private observers = [];
  private days: number = 0;

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((l) => l !== observer);
  }

  setDays(days: number) {
    this.days = days;
    this.notify();
  }

  notify() {
    this.observers.forEach((observer) => observer.update(this.days));
  }
}

class DisplayNotify {
  private listeners: Array<() => void> = [];

  subscribe(listener: () => void) {
    this.listeners.push(listener);
  }
  unsubscribe(listener: () => void) {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  update(days: number) {
    if (days === 30) {
      this.listeners.forEach((listener) => listener());
    }
  }
}
export const chartObserver = new ChartObserver();
export const displayNotify = new DisplayNotify();
