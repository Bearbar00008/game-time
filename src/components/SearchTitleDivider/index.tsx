import { FC } from 'react'
import styled from 'styled-components'

interface TSearchTitleDivider {
  title: string
}

const SearchTitleDivider: FC<TSearchTitleDivider> = ({title}) =>{

  return(
    <SearchTitleDividerContainer>
      <Title>
        {title}
      </Title>
    </SearchTitleDividerContainer>
  )
}

const SearchTitleDividerContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #e3e6e6;
  padding: 10px 10px;
`

const Title = styled.h3`
  font-size: 13px;
  font-weight: 600;
  font-family: arial;
  color: #38383d;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (width < 1024px) {
    font-size: 16px;
	}
`

export default SearchTitleDivider