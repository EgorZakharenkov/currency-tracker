import { useState } from 'react';

import { Map } from '@/components/Map';
import { Notification } from '@/components/Notification';
import { images } from '@/constants/images';
import { ContactContainer, InfoContainer, Wrapper, WrapperText } from '@/pages/Contact/styled';
import { SubTitle, Text } from '@/styles/styled';

const info = [
  {
    label: 'Addres',
    value: 'Vitebsk city, st. Bogdan Khmelnytskogo 30/46, BC “Euro”',
    copy: false,
  },
  {
    label: 'Work',
    value: 'career@modsen-software.com',
    copy: true,
  },
  {
    label: 'Сooperation',
    value: 'contact@modsen-software.com',
    copy: true,
  },
  {
    label: 'Internship',
    value: 'internship@modsen-software.com',
    copy: true,
  },
];

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const handleClick = (value: string) => async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('err copy:', err);
    }
  };
  return (
    <ContactContainer>
      <SubTitle color="primary">Contacts</SubTitle>
      <Wrapper>
        <InfoContainer>
          {info.map(({ label, value, copy }) => (
            <WrapperText>
              <Text color="primary">
                {label}: {value}
              </Text>
              {copy && <img onClick={handleClick(value)} src={images.copy} alt="copy" />}
            </WrapperText>
          ))}
        </InfoContainer>
        <Map lat={55.1904} lng={30.2049} markers={[{ name: 'Modsen', coordinates: [30.206938, 55.184649] }]} />
      </Wrapper>
      <Notification isVisible={copied} message={'copied!'} />
    </ContactContainer>
  );
};
