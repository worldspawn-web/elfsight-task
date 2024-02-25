import styled from 'styled-components';

export const PopUpWrapper = styled.div`
  display: flex;
  flex-direction: row;

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 14;

  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);

  justify-content: center;
  align-items: center;

  scrollbar-gutter: stable;
`;

export const PopUpContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;

  width: 600px;
  height: 500px;

  border-radius: 10px;

  background-color: var(--background);
  filter: drop-shadow(0 5px 15px #fb6467ff);

  transition: 0.3s all ease;

  font-family: 'Archangelsk';
`;

export const PopUpHeader = styled.h3`
  width: 100%;
  height: 48px;

  text-align: center;

  font-size: 48px;

  color: var(--red);

  margin: 10px 0 10px 0;
`;

export const PopUpImage = styled.img`
  order: 1;

  width: 200px;
  height: 200px;

  border-radius: 10px;

  margin: 0 20px 20px 20px;

  transition: 0.3s all ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const PopUpStats = styled.section`
  order: 2;

  display: flex;
  flex-direction: column;

  gap: 16px;

  font-size: 22px;

  color: var(--pink);
`;

export const PopUpStat = styled.span`
  color: white;
`;

export const PopUpParagraph = styled.p``;

export const PopUpAnchor = styled.a`
  color: var(--red);

  transition: 1s all ease;

  &:hover {
    cursor: pointer;

    color: white;
  }
`;

export const PopUpButton = styled.button`
  position: absolute;
  bottom: 25px;

  width: 100px;
  height: 30px;

  background-color: transparent;

  border: 1px solid var(--red);
  border-radius: 10px;

  color: white;

  font-family: 'Archangelsk';
  font-size: 22px;

  transition: 0.3s all ease;

  &:hover {
    cursor: pointer;

    transform: scale(1.1);

    background-color: var(--red);
    color: black;
  }
`;
