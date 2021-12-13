import { useCallback, useState } from 'react';
import tags from '../../../assets/top_tags.json';
import * as Styled from './components';

const RANDOM_TAG = 'Random';
const enhancedTags = [RANDOM_TAG, ...tags];

type OnClickType = (tag: string) => void;

export default ({
  onSelect
}: {
  onSelect: OnClickType
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked = (tag: string) => () => {
    setSelectedOption(tag);
    setIsOpen(false);
    onSelect(tag);
  };

  return (
    <Styled.DropDownContainer>
      <Styled.DropDownHeader onClick={toggling}>Select Tag</Styled.DropDownHeader>
      {isOpen && (
        <Styled.DropDownListContainer>
          <Styled.DropDownList>
            {
              enhancedTags.map((tag) => (
                <Styled.ListItem key={tag} onClick={onOptionClicked(tag)}>{tag}</Styled.ListItem>
              ))
            }
          </Styled.DropDownList>
        </Styled.DropDownListContainer>
      )}
    </Styled.DropDownContainer>
  )
}