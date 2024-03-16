import styled from 'styled-components'

interface colorIcons {
  color: 'purple' | 'yellow' | 'yellow-dark' | 'base-text'
}

export const ContainerMain = styled.div`
  margin: 6rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  max-width: 500px;
  line-height: 2.5rem;
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme['base-title']};
`

export const Subtitle = styled.p`
  max-width: 451px;
  color: ${(props) => props.theme['base-title']};
  margin: 25px 0 66px 0;
`

export const ContainerIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column: 1fr;
  gap: 1rem;
`

export const IconsContainer = styled.div<colorIcons>`
  gap: 1rem;
  display: flex;
  align-items: center;

  div {
    height: 40px;
    border-radius: 50%;
    padding: 8px;
    background: ${(props) => props.theme[props.color]};
  }
  p {
    font-size: 14px;
  }
`

export const TitleCoffee = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ContainerCoffes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`
