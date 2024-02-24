import axios from 'axios';
import { useEffect, useState } from 'react';
import { Character } from 'rickmortyapi';

import styles from './renderCards.module.css';
import { CardStatus } from '..';

export const RenderCards = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          'https://rickandmortyapi.com/api/character'
        );
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching characters...', error);
      }
    };

    fetchCharacters();
  }, []);

  const renderAliveStatus = (status: string) => {
    if (status === 'Dead') return <CardStatus />;
    if (status === 'Alive') return <CardStatus $alive />;
    return <CardStatus $unknown />;
  };

  return (
    <div className={styles.cards__wrapper}>
      {characters.map((character) => (
        <div className={styles.card}>
          <img className={styles.card__img} src={character.image} />
          <div className={styles.card__header__wrapper}>
            <a className={styles.card__header} href={character.url}>
              {renderAliveStatus(character.status)}
              {character.name}
            </a>
            <a className={styles.card__status}>Status: {character.status}</a>
          </div>

          <section className={styles.card__info}>
            <p className={styles.card__category}>Location:</p>
            <a className={styles.card__details} href={character.location.url}>
              {character.location.name}
            </a>
            <p className={styles.card__category}>Gender:</p>
            <a className={styles.card__details}>{character.gender}</a>
            <p className={styles.card__category}>Species:</p>
            <a className={styles.card__details}>{character.species}</a>
          </section>
        </div>
      ))}
    </div>
  );
};
