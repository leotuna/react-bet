import styled from 'styled-components'

interface INumber {
  selected: boolean
  disabled: boolean
}

interface ICallToActionButton {
  disabled: boolean
}

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  font-family: 'Playfair Display', serif;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  font-family: 'Playfair Display', serif;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const NumbersContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(10, 1fr);
  max-width: 547px;
  margin: 0 auto;
  grid-gap: 8px;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`

export const Number = styled.div<INumber>`
  background-color: ${(props) => (props.selected ? '#000' : '#D8E2ED')};
  color: ${(props) => (props.selected ? '#fff' : 'inherit')};
  border-radius: 18px;
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  user-select: none;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`

export const CallToActionButton = styled.div<ICallToActionButton>`
  border-radius: 18px;
  width: 200px;
  height: 48px;
  font-size: 18px;
  font-family: 'Playfair Display', serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 64px auto;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => (props.disabled ? '#D8E2ED' : '#2082FC')};
  color: ${(props) => (props.disabled ? 'inherit' : '#fff')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  user-select: none;
`

export const CurrentPrize = styled.div`
  background-color: #d8e2ed;
  border-radius: 18px;
  font-family: 'Playfair Display', serif;
  text-align: center;
  max-width: 400px;
  width: 100%;
  margin: 0 auto 64px;
  padding: 8px 16px;
  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  p {
    font-size: 48px;
    font-weight: normal;
  }
`

export const Footer = styled.footer`
  text-align: center;
  font-family: 'Playfair Display', serif;
  ul {
    list-style-type: none;
    font-size: 18px;
    li {
      margin-bottom: 8px;
    }
  }
`
