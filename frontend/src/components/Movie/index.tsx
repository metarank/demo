import { useCallback, useMemo } from 'react';
import * as Styled from './components';
import { MovieType } from '../../../../server/src/models/movie';
import { ArrowUpCircle, Sliders } from 'react-feather';

function getImageUrl(item: MovieType): string {
  return item && item.poster || '';
}

const statFields = ['']
export default ({
  item,
  id,
  onClick,
  disabled = false,
}: {
  item: MovieType,
  id?: string,
  onClick?: (id: string, item: MovieType) => Promise<void>,
  disabled?: boolean
}) => {
  const [meta, _stats] = useMemo(() =>
    item.features.reduce((acc: any, i: any) => {
      acc[i.name ? 0 : 1].push(i);
      return acc
    }, [[], []]),
    [item]
  )
  
  const stats = _stats.reduce((acc: Record<string, unknown>, { names, values }: any) => {
    names.forEach((n: string, index: number) => {
      if (values[index]) acc[n] = values[index]
    })
    return acc;
  }, {})

  console.log(stats);
  const handleClick = useCallback(() => {
    onClick && id && onClick(id, item)
  }, [])
  return (
    <Styled.Wrap onClick={handleClick} disabled={!onClick}>
      <Styled.Container style={{ backgroundImage: `url(${getImageUrl(item)})` }}>
        {/* {id && item.features.map((m) => <div>{m.name || m.names?.join(',')}: {m.values?.join(',') || m.value}</div>)} */}
        {
          !disabled &&
          <>
            <Styled.Hover>
              <ArrowUpCircle width={60} height={60} />
              <span>Promote</span>
            </Styled.Hover>
            <Styled.Info>
              <Sliders width={15} height={15} />
            </Styled.Info>
            <Styled.Explain> 
              <div>
                <h4>Rank:</h4>
                {id && Object.keys(stats).map((key:any) =>
                  <Styled.Line>{key}: <strong>{stats[key]}</strong></Styled.Line>)
                }
                <h4>Meta:</h4>
                {id && meta.map((m:any) =>
                  <Styled.Line>{m.name || m.names?.join(',')}: <strong>{m.values?.join(',') || m.value}</strong></Styled.Line>)
                }
              </div>
            </Styled.Explain>
          </>
        }
      </Styled.Container>
    </Styled.Wrap>
  );
}
