import { FC } from 'react'
import styled from 'styled-components'

const SearchBar: FC = () =>{

  return(
    <>
      <SearchBarContainer>
        <SearchIcon src='./icons/search.png' alt ='search icon' /> 
        <TextField placeholder='Search' />
      </SearchBarContainer>
    </>
  )
}

const SearchBarContainer = styled.div`
  width: 100%;
  height: 40px;
  border: 1.5px solid #808080;
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 0 2% 0 1%;
`

const SearchIcon = styled.img`
  width: 17px;
  height: 17px;
`
const TextField = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 18px;
  font-family: arial;
  font-weight: 500;
  padding: 0 1%;
`

export default SearchBar