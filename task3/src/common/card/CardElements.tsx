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

export const CardFilter = styled.input`
  background-color: transparent;

  border: 0 solid black;
  border-radius: 10px;

  color: var(--red);

  margin: 0 20px;
  padding: 10px;

  text-align: center;

  outline: none;

  transition: 0.3s all ease;

  &:hover {
    border: 1px solid var(--red);
  }

  &:focus {
    border: 1px solid var(--red);
  }
`;

export const CardFiltersDiv = styled.div`
  display: flex;
  justify-content: center;

  margin: 10px auto;
`;

export const CardsWrapper = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;

  margin-bottom: 20px;
`;

export const CardsSectionHeader = styled.h2`
  text-align: center;

  color: var(--red);

  font-size: 48px;
  font-family: 'Archangelsk';

  margin: 30px auto;
`;

export const ThumbCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin: 10px;

  height: 200px;
  width: 600px;

  background-color: var(--background-light);

  border-radius: 10px;

  transition: 0.3s all ease;

  &:hover {
    transform: scale(1.02);
    filter: drop-shadow(0 5px 15px #fb6467ff);

    cursor: pointer;
  }
`;

export const ThumbImage = styled.img`
  display: flex;

  width: 100px;
  height: 100px;

  padding: 10px 0 0 10px;

  border-radius: 16px;
`;

export const ThumbHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10px 0 0 10px;

  height: 90px;
  width: 200px;

  font-family: 'Archangelsk';
`;

export const ThumbHeader = styled.a`
  display: flex;

  height: 48px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  color: white;

  font-size: 24px;
  text-decoration: none;

  align-items: center;
`;

export const ThumbStatus = styled.span`
  margin-left: 10px;
  margin-top: 10px;

  font-size: 18px;

  color: var(--red);
`;

export const ThumbInfo = styled.section`
  display: flex;
  flex-direction: column;

  gap: 10px;

  justify-content: center;

  margin-left: 20px;
`;

export const ThumbCategory = styled.p`
  color: var(--cyan);

  font-size: 18px;
  font-family: 'Archangelsk';
`;

export const ThumbDetails = styled.a`
  height: 18px;

  display: flex;

  color: var(--orange);

  font-size: 18px;
  font-family: 'Archangelsk';
  text-decoration: none;
`;
