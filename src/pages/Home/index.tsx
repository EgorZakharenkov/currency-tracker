import { useEffect, useState } from 'react';

import { Card } from '@/components/Card';
import { Converter } from '@/components/Convertor';
import { Button } from '@/components/Convertor/styled';
import { LastUpdate } from '@/components/LastUpdate';
import { Loader } from '@/components/Loader';
import { Modal } from '@/components/Modal';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { WrapperCardList, WrapperCards } from '@/pages/Home/styled';
import { getCurrencyData } from '@/store/Slices/Currency';
import { SubTitle } from '@/styles/styled';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { currencyData, currencyDataLoading } = useAppSelector((state) => state.currency);
  const [open, setOpen] = useState<boolean>(false);
  const [current, setCurrent] = useState<string>(null);
  const fakeCards = [
    {
      title: 'Stocks',
      items: [
        {
          valueInUSD: 5,
          currency: 'IFIX',
        },
      ],
    },
    {
      title: 'Quotes',
      items: [{ currency: 'USD', valueInUSD: '1' }, ...currencyData],
    },
  ];

  useEffect(() => {
    dispatch(getCurrencyData());
  }, []);

  const handleClickCard = (current: string) => () => {
    setOpen(true);
    setCurrent(current);
  };
  const onClose = () => {
    setOpen(false);
  };

  const updateCurrencyData = () => {
    dispatch(getCurrencyData());
  };
  if (currencyDataLoading) return <Loader />;
  return (
    <div>
      <LastUpdate time="12:30" />
      <Button onClick={updateCurrencyData}>Update data</Button>
      <div>
        {currencyData &&
          fakeCards.map(({ title, items }) => (
            <WrapperCardList>
              <SubTitle size="lg" color="primary" border>
                {title}
              </SubTitle>
              <WrapperCards>
                {items.map(({ currency, valueInUSD }) => (
                  <Card
                    onClick={handleClickCard(currency)}
                    key={currency}
                    currency={currency}
                    valueInUSD={valueInUSD}
                  />
                ))}
              </WrapperCards>
              <Modal onClose={onClose} isOpen={open}>
                <Converter current={current} />
              </Modal>
            </WrapperCardList>
          ))}
      </div>
    </div>
  );
};
