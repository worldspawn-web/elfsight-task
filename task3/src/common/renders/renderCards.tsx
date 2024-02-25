import axios from 'axios';
import { useEffect, useState } from 'react';
import { Character } from 'rickmortyapi';

import { renderCharacters } from './renderCharacters';
import {
  CardFilter,
  CardFiltersDiv,
  CardsSectionHeader,
  CardsWrapper,
  PopUpAnchor,
  PopUpButton,
  PopUpContent,
  PopUpHeader,
  PopUpImage,
  PopUpParagraph,
  PopUpStat,
  PopUpStats,
  PopUpWrapper,
} from '..';

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
      <CardsSectionHeader>Rick & Morty Wiki</CardsSectionHeader>
      <CardFiltersDiv>
        <CardFilter
          type="text"
          placeholder="Name"
          onChange={(e) => handleFilterChange('name', e.target.value)}
        />
        <CardFilter
          type="text"
          placeholder="Status"
          onChange={(e) => handleFilterChange('status', e.target.value)}
        />
        <CardFilter
          type="text"
          placeholder="Species"
          onChange={(e) => handleFilterChange('species', e.target.value)}
        />
        <CardFilter
          type="text"
          placeholder="Gender"
          onChange={(e) => handleFilterChange('gender', e.target.value)}
        />
      </CardFiltersDiv>
      <CardsWrapper>
        {renderCharacters(characters, handleCharacterClick)}
      </CardsWrapper>

      {isPopUpOpen && selectedCharacter && (
        <PopUpWrapper>
          <PopUpContent>
            <PopUpHeader>{selectedCharacter.name}</PopUpHeader>
            <PopUpImage src={selectedCharacter.image} />
            <PopUpStats>
              <PopUpParagraph>
                Status: <PopUpStat>{selectedCharacter.status}</PopUpStat>
              </PopUpParagraph>
              <PopUpParagraph>
                Species: <PopUpStat>{selectedCharacter.species}</PopUpStat>
              </PopUpParagraph>
              <PopUpParagraph>
                Gender: <PopUpStat>{selectedCharacter.gender}</PopUpStat>
              </PopUpParagraph>
              <PopUpParagraph>
                Location:{' '}
                <PopUpAnchor href={selectedCharacter.location.url}>
                  {selectedCharacter.location.name}
                </PopUpAnchor>
              </PopUpParagraph>
            </PopUpStats>

            <PopUpButton onClick={closePopUp}>Close</PopUpButton>
          </PopUpContent>
        </PopUpWrapper>
      )}
    </section>
  );
};
