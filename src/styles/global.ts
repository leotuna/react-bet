import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #E9F2FF;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 18px;
    padding: 32px;
    overflow-y: scroll;
  }
	@media (max-width: 768px) {
		body {
			padding: 8px;
		}
	}
`
