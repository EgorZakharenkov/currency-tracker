import { ChangeEvent, Component } from 'react';
import { Bar } from 'react-chartjs-2';

import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';

import { CandleEditForm } from '@/components/CandleEditor';
import { ChartBox, ChartCard } from '@/components/CandlestickChart/styled';
import { Button } from '@/components/Convertor/styled';
import { Modal } from '@/components/Modal';
import { themeColors } from '@/constants/themeConstants';
import { generateData } from '@/utils/generateData';
import { chartObserver } from '@/utils/observer';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export interface CandleData {
  x: number;
  o: number;
  h: number;
  l: number;
  c: number;
  s: [number, number];
}

interface CandlestickChartProps {
  days?: number;
}

interface SelectedCandle extends CandleData {
  index: number;
}

interface CandlestickChartState {
  selectedCandle: SelectedCandle | null;
  isModalOpen: boolean;
  isAddModalOpen: boolean;
  updatedChartData: CandleData[];
  newCandle: Partial<CandleData>;
}

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
      isAddModalOpen: false,
      updatedChartData: generateData(props.days),
      newCandle: {
        x: Date.now(),
        o: 0,
        h: 0,
        l: 0,
        c: 0,
      },
    };
  }

  componentDidUpdate(prevProps: CandlestickChartProps) {
    if (prevProps.days !== this.props.days) {
      this.setState({ updatedChartData: generateData(this.props.days) });
      chartObserver.setDays(this.props.days);
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

  handleOpenAddModal = () => {
    this.setState({ isAddModalOpen: true });
  };

  handleCloseAddModal = () => {
    this.setState({ isAddModalOpen: false, newCandle: { x: Date.now(), o: 0, h: 0, l: 0, c: 0 } });
  };

  handleNewCandleChange = (e: ChangeEvent<HTMLInputElement>, key: keyof CandleData) => {
    this.setState((prevState) => ({
      newCandle: {
        ...prevState.newCandle,
        [key]: parseFloat(e.target.value),
      },
    }));
  };

  handleSaveNewCandle = () => {
    const { newCandle, updatedChartData } = this.state;
    const newCandleData = {
      ...newCandle,
      s: [newCandle.o, newCandle.c],
    } as CandleData;
    this.setState({
      updatedChartData: [...updatedChartData, newCandleData],
      isAddModalOpen: false,
      newCandle: { x: Date.now(), o: 0, h: 0, l: 0, c: 0 },
    });
    chartObserver.setDays([...updatedChartData, newCandleData].length);
  };

  render() {
    const { selectedCandle, isModalOpen, updatedChartData, isAddModalOpen, newCandle } = this.state;

    const data = {
      labels: updatedChartData.map((item) => new Date(item.x).toLocaleDateString()),
      datasets: [
        {
          label: 'Stock Prices',
          data: updatedChartData,
          backgroundColor: updatedChartData.map((item) =>
            item.c > item.o ? themeColors.dark.colors.green : themeColors.dark.colors.red,
          ),
          borderWidth: 1,
        },
      ],
    };

    return (
      <>
        <Button onClick={this.handleOpenAddModal}>Add day</Button>
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
            <Modal isOpen={isAddModalOpen} onClose={this.handleCloseAddModal}>
              <CandleEditForm
                selectedCandle={newCandle as CandleData}
                onChange={this.handleNewCandleChange}
                onSave={this.handleSaveNewCandle}
                onCancel={this.handleCloseAddModal}
              />
            </Modal>
          </ChartBox>
        </ChartCard>
      </>
    );
  }
}
