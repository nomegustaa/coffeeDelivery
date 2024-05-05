import styled from 'styled-components'

export const Title = styled.p`
  font-family: 'Baloo 2', sans-serif;
  font-weight: bold;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ContainerTotalCoffes = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 40px;
  border-radius: 8px 40px;
  max-height: 560px;
  width: 500px;
`

export const ContainerTotalCoffesWrapper = styled.div`
  max-height: 300px;
  overflow-y: auto;
  padding: 0 10px 0 0;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`

export const CoffeeNotFound = styled.p`
  color: ${(props) => props.theme['base-label']};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 368px;
  height: 125px;
  margin: 24px 0;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`

export const ContainerCoffe = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    margin-right: 1rem;
  }
  padding: 0 0 24px 0;
  margin: 24px 0;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`

export const ContainerAmount = styled.div`
  display: flex;
  flex-direction: column;
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 250px;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Amount = styled.div`
  display: flex;
  gap: 1rem;
`

export const PriceCoffe = styled.p`
  display: flex;
  justify-content: end;
  width: 25%;
  font-weight: bold;
  color: ${(props) => props.theme['base-text']};
`

export const ButtonRemove = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme['base-button']};
  padding: 8px;
  border-radius: 6px;
  height: 40px;
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme['base-text']};
  font-size: 12px;
  cursor: pointer;
`

export const ContainerPrice = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  margin: 0 0 24px 0;
  p {
    color: ${(props) => props.theme['base-text']};
  }
  p.price {
    grid-column: 3;
    text-align: end;
  }
`

export const TotalPrice = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: ${(props) => props.theme['base-subtitle']};
`
