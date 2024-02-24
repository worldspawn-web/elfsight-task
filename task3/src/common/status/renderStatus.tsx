import { CardStatus } from '..';

export const renderAliveStatus = (status: string) => {
  if (status === 'Dead') return <CardStatus />;
  if (status === 'Alive') return <CardStatus $alive />;
  return <CardStatus $unknown />;
};
