import * as Styled from './components'

export default function Hero() {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Logo href='https://github.com/metarank'>
          <Styled.Icon alt='Metarang' src={require('../../assets/logo.svg').default} />
        </Styled.Logo>
        <Styled.Description>
          Is a toolbox for building personalized experience of displaying any entities.
          <br />
          It allows you to work both in offline (building the model using data that you already have) and online (using the live event stream) modes.
        </Styled.Description>
      </Styled.Container>
    </Styled.Wrapper>
  )
}
