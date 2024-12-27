import { FC, useEffect, useState } from 'react';

import { ConverterContainer, CurrentCurrencyBlock, ResultBlock, WrapperBtns } from '@/components/Convertor/styled';
import { Input } from '@/components/ui/Input/styled';
import { Select } from '@/components/ui/Select';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { getConvertData } from '@/store/Slices/Currency';

interface ConverterProps {
  current?: string;
}

export const Converter: FC<ConverterProps> = ({ current }) => {
  const dispatch = useAppDispatch();
  const { currencyData, convertValue } = useAppSelector((state) => state.currency);
  const [amount, setAmount] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
  const [result, setResult] = useState<string>('');

  const fakeRates = currencyData.reduce(
    (rates, { currency, valueInUSD }) => {
      rates[currency] = valueInUSD;
      return rates;
    },
    { USD: 1 },
  );

  const options = Object.keys(fakeRates).map((key) => ({ value: key }));

  useEffect(() => {
    dispatch(getConvertData({ baseCurrency: current, convertCurrency: selectedCurrency }));
  }, [current, selectedCurrency]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    calculateResult(e.target.value);
  };

  const calculateResult = (amount: number) => {
    if (!isNaN(amount) && convertValue) {
      setResult((amount * convertValue.rate).toFixed(2));
    } else {
      setResult('');
    }
  };

  const handleCurrencyChange = (currency: string) => {
    setSelectedCurrency(currency);
    setResult('');
  };

  return (
    <ConverterContainer>
      <CurrentCurrencyBlock>
        <span>Current Currency: {current}</span>
        <Input type="number" value={amount} onChange={handleAmountChange} placeholder="Enter amount" />
      </CurrentCurrencyBlock>
      <WrapperBtns>
        <Select options={options} selected={selectedCurrency} setSelected={handleCurrencyChange} />
      </WrapperBtns>

      <ResultBlock>
        {result ? `Converted Amount: ${result} ${selectedCurrency}` : 'Enter an amount to convert'}
      </ResultBlock>
    </ConverterContainer>
  );
};
