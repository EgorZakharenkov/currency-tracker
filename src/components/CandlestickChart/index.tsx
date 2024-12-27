import { ChangeEvent, Component } from 'react';
import { Bar } from 'react-chartjs-2';

import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';

import { CandleEditForm } from '@/components/CandleEditor';
import { ChartBox, ChartCard } from '@/components/CandlestickChart/styled';
import { Modal } from '@/components/Modal';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface CandleData {
  x: number;
  o: number;
  h: number;
  l: number;
  c: number;
  s: [number, number];
}

interface CandlestickChartProps {
  days?: number;
  onChartBuilt: () => void;
}

interface SelectedCandle extends CandleData {
  index: number;
}

interface CandlestickChartState {
  selectedCandle: SelectedCandle | null;
  isModalOpen: boolean;
  updatedChartData: CandleData[];
}

const generateData = (count: number = 7): CandleData[] => {
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

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
  parsing: {
    xAxisKey: 'x',
    yAxisKey: 's',
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export class CandlestickChart extends Component<CandlestickChartProps, CandlestickChartState> {
  constructor(props: CandlestickChartProps) {
    super(props);

    this.state = {
      selectedCandle: null,
      isModalOpen: false,
      updatedChartData: generateData(props.days),
    };
  }

  componentDidUpdate(prevProps: CandlestickChartProps) {
    if (prevProps.days !== this.props.days) {
      this.setState({ updatedChartData: generateData(this.props.days) });
      if (this.props.days === 30) {
        setTimeout(() => {
          this.props.onChartBuilt();
        }, 1000);
      }
    }
  }

  handleChartClick = (event, elements) => {
    if (elements.length > 0) {
      const index = elements[0].index;
      const selectedCandle = { ...this.state.updatedChartData[index], index };
      this.setState({ selectedCandle, isModalOpen: true });
    }
  };
  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };
  handleSaveChanges = (updatedCandle: CandleData & { index: number }) => () => {
    const updatedData = [...this.state.updatedChartData];
    updatedData[updatedCandle.index] = {
      ...updatedCandle,
      s: [updatedCandle.o, updatedCandle.c],
    };
    this.setState({ updatedChartData: updatedData, isModalOpen: false });
  };

  handleCandleChange = (e: ChangeEvent<HTMLInputElement>, key: keyof CandleData) => {
    if (this.state.selectedCandle) {
      this.setState({
        selectedCandle: {
          ...this.state.selectedCandle,
          [key]: parseFloat(e.target.value),
        },
      });
    }
  };

  render() {
    const { selectedCandle, isModalOpen, updatedChartData } = this.state;

    const data = {
      labels: updatedChartData.map((item) => new Date(item.x).toLocaleDateString()),
      datasets: [
        {
          label: 'Stock Prices',
          data: updatedChartData,
          backgroundColor: updatedChartData.map((item) =>
            item.c > item.o ? 'rgba(75, 192, 192, 0.2)' : 'rgba(255, 99, 132, 0.2)',
          ),
          borderColor: updatedChartData.map((item) =>
            item.c > item.o ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)',
          ),
          borderWidth: 1,
        },
      ],
    };

    return (
      <ChartCard>
        <ChartBox>
          <Bar data={data} options={{ ...options, onClick: this.handleChartClick }} />
          <Modal isOpen={isModalOpen} onClose={this.handleCloseModal}>
            {selectedCandle && (
              <CandleEditForm
                selectedCandle={selectedCandle}
                onChange={this.handleCandleChange}
                onSave={this.handleSaveChanges({ ...selectedCandle, index: selectedCandle.index! })}
                onCancel={this.handleCloseModal}
              />
            )}
          </Modal>
        </ChartBox>
      </ChartCard>
    );
  }
}
