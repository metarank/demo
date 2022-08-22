import { useCallback, useMemo, useRef, useEffect, useState } from 'react';
import * as Styled from './components';
import { MovieType } from '../../../../server/src/models/movie';
import { ArrowUpCircle, ChevronsUp, Sliders } from 'react-feather';

function getImageUrl(item: MovieType): string {
  return item && item.poster || '';
}

const statFields = ['']

export default ({
  item,
  id,
  onClick,
  disabled = false,
  index
}: {
  item: MovieType,
  id?: string,
  onClick?: (id: string, item: MovieType) => Promise<void>,
  disabled?: boolean,
  index?: number
}) => {
  const _index = useRef(index)

  const [changedPosition, setChangedPosition] = useState(0)
  
  const handleClick = useCallback((e) => {
    onClick && id && onClick(id, item)
  }, [])

  useEffect(() => {
    if (_index.current === index) return
    setChangedPosition(_index.current > index ? 1 : -1)
    setTimeout(() => setChangedPosition(0), 2000)
  }, [index])
  return (
    <Styled.Wrap disabled={!onClick}>
      <Styled.Container style={{ backgroundImage: `url(${getImageUrl(item)})` }}>
        {/* {id && item.features.map((m) => <div>{m.name || m.names?.join(',')}: {m.values?.join(',') || m.value}</div>)} */}
        {
          !disabled &&
          <>
            <Styled.Hover onClick={handleClick}>
              <ArrowUpCircle width={60} height={60} />
              <span>Promote</span>
            </Styled.Hover>
            <Styled.Info onClick={(e) => e.preventDefault()}>
              <Sliders width={15} height={15} />
            </Styled.Info>
            {
              !!changedPosition &&
              <Styled.PositionUpdater up={changedPosition > 0}>
                <ChevronsUp width={60} height={60} />
              </Styled.PositionUpdater>
            }
            <Styled.Explain> 
              <div>
                <h4>Rank:</h4>
                {id && Object.keys(item.features).map((key:any) =>
                  <Styled.Line>{key}: <strong>{Array.isArray(item.features[key]) ? item.features[key].join(',') : item.features[key]}</strong></Styled.Line>)
                }
                {/* <h4>Meta:</h4>
                {id && meta.map((m:any) =>
                  <Styled.Line>{m.name || m.names?.join(',')}: <strong>{m.values?.join(',') || m.value}</strong></Styled.Line>)
                } */}
              </div>
            </Styled.Explain>
          </>
        }
      </Styled.Container>
    </Styled.Wrap>
  );
}
