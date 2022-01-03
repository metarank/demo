import * as Styled from './components';
import { useState } from 'react';

export default function MovieTypes({
  options,
  onSelect,
  selected
}: {
    options: string[],
    onSelect: (option: string) => void,
    selected: string,
  }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <Styled.Container expanded={expanded}>
      {
        options.map((option: string, index) => (
            <Styled.Item
              key={option}
              selected={selected === option}
              onClick={() => onSelect(option)}
            >
              { option }
            </Styled.Item>
        ))
      }
      {
        !expanded &&
        <Styled.ShowMore onClick={() => setExpanded(true)}>
          show more
        </Styled.ShowMore>
      }
    </Styled.Container>
  )
}
