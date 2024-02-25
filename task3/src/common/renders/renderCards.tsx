import axios from 'axios';
import { useEffect, useState } from 'react';
import { Character } from 'rickmortyapi';

import styles from './RenderCards.module.css';
import { renderCharacters } from './renderCharacters';

export const RenderCards = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const [nameFilter, setNameFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');

  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          'https://rickandmortyapi.com/api/character',
          {
            params: {
              name: nameFilter,
              status: statusFilter,
              species: speciesFilter,
              gender: genderFilter,
            },
          }
        );
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching characters...', error);
      }
    };

    fetchCharacters();
  }, [nameFilter, statusFilter, speciesFilter, genderFilter]);

  const handleFilterChange = (filterType: string, value: string) => {
    switch (filterType) {
      case 'name':
        setNameFilter(value);
        break;
      case 'status':
        setStatusFilter(value);
        break;
      case 'species':
        setSpeciesFilter(value);
        break;
      case 'gender':
        setGenderFilter(value);
        break;
      default:
        break;
    }
  };

  const openPopUp = (character: Character) => {
    setSelectedCharacter(character);
    setIsPopUpOpen(true);
  };

  const closePopUp = () => {
    setSelectedCharacter(null);
    setIsPopUpOpen(false);
  };

  const handleCharacterClick = (character: Character) => {
    openPopUp(character);
  };

  return (
    <section>
      <h2 className={styles.header}>Rick & Morty Wiki</h2>
      <div className={styles.filters}>
        <input
          className={styles.filter}
          type="text"
          placeholder="Name"
          onChange={(e) => handleFilterChange('name', e.target.value)}
        />
        <input
          className={styles.filter}
          type="text"
          placeholder="Status"
          onChange={(e) => handleFilterChange('status', e.target.value)}
        />
        <input
          className={styles.filter}
          type="text"
          placeholder="Species"
          onChange={(e) => handleFilterChange('species', e.target.value)}
        />
        <input
          className={styles.filter}
          type="text"
          placeholder="Gender"
          onChange={(e) => handleFilterChange('gender', e.target.value)}
        />
      </div>
      <div className={styles.cards__wrapper}>
        {renderCharacters(characters, handleCharacterClick)}
      </div>

      {isPopUpOpen && selectedCharacter && (
        <div className={styles.popup}>
          <div className={styles.popup__content}>
            <h3 className={styles.popup__name}>{selectedCharacter.name}</h3>
            <img
              className={styles.popup__image}
              src={selectedCharacter.image}
            />
            <section className={styles.popup__stats}>
              <p>
                Status: <span>{selectedCharacter.status}</span>
              </p>
              <p>
                Species: <span>{selectedCharacter.species}</span>
              </p>
              <p>
                Gender: <span>{selectedCharacter.gender}</span>
              </p>
              <p>
                Location:{' '}
                <a href={selectedCharacter.location.url}>
                  {selectedCharacter.location.name}
                </a>
              </p>
            </section>

            <button className={styles.popup__button} onClick={closePopUp}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
