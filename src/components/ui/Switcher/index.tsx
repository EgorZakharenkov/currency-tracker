import { Circle, SwitchWrapper } from './styled';

export const Switcher = ({ isActive, onToggle }) => {
  return (
    <SwitchWrapper isActive={isActive} onClick={onToggle}>
      <Circle isActive={isActive} />
    </SwitchWrapper>
  );
};
