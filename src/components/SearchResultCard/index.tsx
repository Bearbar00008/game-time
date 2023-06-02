import { FC } from 'react'
import styled from 'styled-components'

interface TSearchResultCard {
	image: string
	title: string
	subtitle: string
}

const SearchResultCard: FC<TSearchResultCard> = ({image, title, subtitle}) =>{

	return(
		<SearchResultCardContainer>
			<Image src={image} alt={title} />
			<TextContainer>
				<Title>{title}</Title>
				<Subtitle>{subtitle}</Subtitle>
			</TextContainer>
    </SearchResultCardContainer>
	)
}

const SearchResultCardContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #808080;
	padding: 10px;
`

const Image = styled.img`
	width: 50px;
	height: 50px;
	object-fit: cover;

  @media (width < 1024px) {
		width: 70px;
	  height: 70px;
	}
`

const TextContainer = styled.div`
	margin-left: 20px;
`

const Title = styled.h4`
	font-size: 16px;
	font-weight: 500;
	margin-bottom: 5px;
	font-family: arial;
	text-transform: capitalize;

  @media (width < 1024px) {
		font-size: 19px;
	}
`

const Subtitle = styled.p`
	font-size: 12px;
	font-weight: 400;
	font-family: arial;
	color: #808080;
	text-transform: capitalize;

  @media (width < 1024px) {
    font-size: 14px;
	}
`

export default SearchResultCard