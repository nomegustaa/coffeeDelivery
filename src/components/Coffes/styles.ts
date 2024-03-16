import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 256px;
  border-radius: 8px 40px;
  padding: 80px 24px 20px 24px;
  margin: 30px 0;
  background-color: ${(props) => props.theme['base-card']};
  position: relative;
  text-align: center;

  img {
    position: absolute;
    width: 100px;
    left: 35%;
    bottom: 68%;
    margin: 0 0 20px 0;
  }
`

export const ContainerCategory = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

export const Category = styled.p`
  margin: 12px 0 16px 0;
  padding: 4px 8px;
  border-radius: 100px;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`

export const NameCoffe = styled.p`
  font-family: 'Baloo 2', sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => props.theme['base-subtitle']};
`

export const DescriptionCoffe = styled.p`
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme['base-label']};
  margin: 8px 0 33px 0px;
`

export const ShoppingCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-text']};
    margin-right: 1rem;
  }

  p > span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
  }
  .shoppingCart {
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 6px;
    padding: 8px;
    background: ${(props) => props.theme['purple-dark']};
    cursor: pointer;
  }
`
