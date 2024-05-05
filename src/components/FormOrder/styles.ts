import styled from 'styled-components'

export const Title = styled.p`
  font-family: 'Baloo 2', sans-serif;
  font-weight: bold;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Container = styled.div`
  max-width: 784px;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 40px;
`

export const ContainerDescription = styled.div`
  display: flex;
  margin: 0 0 40px 0;
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  input.stateCode {
    grid-column: 1 / 6;
    width: 50%;
  }
  input.street {
    grid-column: 1 / 7;
  }

  input.complement {
    grid-column: 2 / 7;
  }

  input.uf {
    width: 100%;
  }

  input.city {
    grid-column: 2 / 6;
  }
`
