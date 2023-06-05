import { FC } from "react"
import styled from "styled-components"

const NoResultCard: FC = () => {
  return (
    <SearchResultCardContainer>
      <Title>No results found</Title>
    </SearchResultCardContainer>
  )
}

const SearchResultCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
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

export default NoResultCard
