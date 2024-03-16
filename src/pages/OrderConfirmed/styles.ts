import styled from 'styled-components'

interface colorIcons {
  color: 'purple' | 'yellow' | 'yellow-dark'
}

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme['yellow-dark']};
`

export const SubTitle = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 14px;
    color: ${(props) => props.theme['base-text']};
  }
`

export const ContainerIcons = styled.div`
  position: relative;
  height: 270px;
  padding: 40px;

  &::before {
    border-radius: 8px 40px;
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid transparent;
    background: linear-gradient(
        100deg,
        ${(props) => props.theme.yellow},
        ${(props) => props.theme['purple-dark']}
      )
      border-box;
    -webkit-mask:
      linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }
`

export const ContainerSubTitle = styled.div<colorIcons>`
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 20px 0;

  div {
    height: 40px;
    border-radius: 50%;
    padding: 8px;
    background: ${(props) => props.theme[props.color]};
  }
`
