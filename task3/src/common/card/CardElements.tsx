import styled from 'styled-components';

export const CardStatus = styled.div<{ $alive?: boolean; $unknown?: boolean }>`
  min-width: 10px;
  min-height: 10px;
  max-width: 10px;
  max-height: 10px;

  background-color: ${(props) => (props.$alive ? 'green' : 'red')};
  background-color: ${(props) => props.$unknown && 'grey'};

  border-radius: 100%;

  margin: auto 10px;
`;
