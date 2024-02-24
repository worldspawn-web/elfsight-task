import { Character } from 'rickmortyapi';

import { renderAliveStatus } from '..';
import styles from './RenderCards.module.css';

export const renderCharacters = (
  characters: Character[],
  onCharacterClick: (character: Character) => void
) => {
  return characters.map((character) => (
    <div
      className={styles.card}
      key={character.id}
      onClick={() => onCharacterClick(character)}
    >
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
  ));
};
