import { FC } from 'react'
import styled from 'styled-components'

import { SearchBar } from '../../components'

const Home: FC = () =>{

	return (
		<PageContainer>
			<LogoContainer>
				<LogoImage src = './logo/Gametime_logo.png' />
			</LogoContainer>
			<SearchBarContainer>
				<SearchBar />
			</SearchBarContainer>
		</PageContainer>
	)
}

const PageContainer = styled.main`
	width: 100%;
	height: 100vh;
	padding-top: 150px; 
`

const LogoContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 30px;
`
const LogoImage = styled.img`
	width: 350px;
	@media (width < 1024px) {
    width: 300px;
	}

  @media (width < 768px) {
    width: 250px;
	}
`

const SearchBarContainer = styled.div`
	display: flex;
	justify-content: center;
`

export default Home