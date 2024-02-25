import { Character } from 'rickmortyapi';

import {
  ThumbCard,
  ThumbCategory,
  ThumbDetails,
  ThumbHeader,
  ThumbHeaderWrapper,
  ThumbImage,
  ThumbInfo,
  ThumbStatus,
  renderAliveStatus,
} from '..';

export const renderCharacters = (
  characters: Character[],
  onCharacterClick: (character: Character) => void
) => {
  return characters.map((character) => (
    <ThumbCard key={character.id} onClick={() => onCharacterClick(character)}>
      <ThumbImage src={character.image} />
      <ThumbHeaderWrapper>
        <ThumbHeader href={character.url}>
          {renderAliveStatus(character.status)}
          {character.name}
        </ThumbHeader>
        <ThumbStatus>Status: {character.status}</ThumbStatus>
      </ThumbHeaderWrapper>
      <ThumbInfo>
        <ThumbCategory>Location:</ThumbCategory>
        <ThumbDetails href={character.location.url}>
          {character.location.name}
        </ThumbDetails>
        <ThumbCategory>Gender:</ThumbCategory>
        <ThumbDetails>{character.gender}</ThumbDetails>
        <ThumbCategory>Species:</ThumbCategory>
        <ThumbDetails>{character.species}</ThumbDetails>
      </ThumbInfo>
    </ThumbCard>
  ));
};
