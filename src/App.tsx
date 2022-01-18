import React, { useState } from 'react'
import { GlobalStyle } from './styles/global'
import {
  Title,
  SubTitle,
  NumbersContainer,
  Number,
  CallToActionButton,
  CurrentPrize,
  Footer,
} from './App.styles'

const options: number[] = Array.from({ length: 60 }, (_, i) => i + 1)

const subTitles: { [id: number]: string } = {
	0: 'Choose your 6 numbers',
	1: "More 5, let's go",
	2: 'Keep going, 4 more. Good luck!',
	3: 'Half! Choose 3 numbers now',
	4: "You're good! Get 2 more numbers",
	5: 'Just 1 more. Uhu!',
	6: 'It is time to DO IT',
}

const App = () => {

  const [choice, setChoice] = useState<number[]>([])

  const selectOption = (option: number): void => {
    if (!options.includes(option)) {
      throw new Error(`Option ${option} not available.`)
    }

    if (choice.length === 6 && !choice.includes(option)) {
      return
    }

    if (choice.includes(option)) {
      setChoice(choice.filter((item) => item !== option))
    } else {
      setChoice([...choice, option])
    }
  }

  const checkIfOptionIsDisabled = (option: number): boolean => {
    if (choice.length === 6 && !choice.includes(option)) {
      return true
    }
    return false
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <Title>Luck with eth</Title>
      <SubTitle id="subtitle">{subTitles[choice.length]}</SubTitle>
      <NumbersContainer>
        {options.map((option) => (
          <Number
						id={`number-${option}`}
            key={option}
            disabled={checkIfOptionIsDisabled(option)}
            selected={choice.includes(option)}
            onClick={() => selectOption(option)}
          >
            {option}
          </Number>
        ))}
      </NumbersContainer>
      <CallToActionButton disabled={choice.length !== 6}>
        Let's do it
      </CallToActionButton>
      <CurrentPrize>
        <h3>Current prize</h3>
        <p>1,437.33 eth</p>
      </CurrentPrize>
      <Footer>
        <ul>
          <li>how it works</li>
          <li>faq</li>
        </ul>
      </Footer>
    </React.Fragment>
  )
}

export default App
