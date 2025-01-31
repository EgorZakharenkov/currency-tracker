import { CandleData } from '@/components/CandlestickChart';

export const generateData = (count: number = 7): CandleData[] => {
  const data: CandleData[] = [];
  let lastClose = 1.0;

  for (let i = 0; i < count; i++) {
    const open = lastClose;
    const high = open + Math.random() * 0.5;
    const low = open - Math.random() * 0.5;
    const close = low + Math.random() * (high - low);

    data.push({
      x: new Date(2024, 11, i + 1).setHours(0, 0, 0, 0),
      o: open,
      h: high,
      l: low,
      c: close,
      s: [open, close],
    });

    lastClose = close;
  }

  return data;
};
