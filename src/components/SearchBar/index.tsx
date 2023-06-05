import { FC, useState, useEffect } from "react"
import styled from "styled-components"

import { TSearchSData } from "../../types/searchData"
import { useDebounce } from "../../hooks"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { selectAppReducer } from "../../store/store"
import {
  getQuery,
  setGetQueryStatusStatusIdle,
} from "../../store/search/thunks"
import { setClear } from "../../store/search/slicer"
import { SearchResultCard, SearchTitleDivider, NoResultCard } from ".."

const SearchBar: FC = () => {
  const appDispatch = useAppDispatch()
  const appSelector = useAppSelector(selectAppReducer)
  const [query, setQuery] = useState("")
  const [focus, setFocus] = useState(true)
  const [isQueryResult, setIsQueryResult] = useState(false)
  const debounce = useDebounce(query, 500)
  const clearField = () => {
    setQuery("")
    appDispatch(setClear())
    appDispatch(setGetQueryStatusStatusIdle())
  }

  useEffect(() => {
    if (debounce.length > 0) {
      appDispatch(getQuery(query))
    }
    // eslint-disable-next-line
  }, [debounce])

  useEffect(() => {
    if (query.length === 0) {
      appDispatch(setClear())
      appDispatch(setGetQueryStatusStatusIdle())
    }
    // eslint-disable-next-line
  }, [query])

  useEffect(() => {
    if (
      appSelector.searchResult.data.venues.length === 0 &&
      appSelector.searchResult.data.performers.length === 0 &&
      appSelector.searchResult.data.events.length === 0
    ) {
      setIsQueryResult(false)
    } else {
      setIsQueryResult(true)
    }
  }, [
    appSelector.searchResult.data.venues,
    appSelector.searchResult.data.performers,
    appSelector.searchResult.data.events,
  ])

  return (
    <SearchBarContainer>
      <SearchTextFieldContainer
        focus={focus || query.length > 0}
        showResults={
          query.length > 0 &&
          (appSelector.searchResult.status.status === "fulfilled" ||
            isQueryResult)
        }
      >
        <Icon src="./icons/search.png" alt="search icon" />
        <TextField
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <CloseIconContainer>
          {query.length > 0 && (
            <CloseIcon
              src="./icons/close.png"
              alt="search icon"
              onClick={clearField}
            />
          )}
        </CloseIconContainer>
      </SearchTextFieldContainer>

      {query.length > 0 &&
        (appSelector.searchResult.status.status === "fulfilled" ||
          isQueryResult) && (
          <ResultDisplay>
            <Divider />
            <ScrollContainer>
              {Object.keys(appSelector.searchResult.data).map((entity) => {
                if (
                  appSelector.searchResult.data[entity as keyof TSearchSData]
                    .length > 0
                ) {
                  return (
                    <div key={entity}>
                      <SearchTitleDivider title={entity} />
                      {appSelector.searchResult.data[
                        entity as keyof TSearchSData
                      ].map((entity) => {
                        return (
                          <SearchResultCard
                            key={entity.id}
                            title={entity.title}
                            subtitle={entity.subtitle}
                            image={entity.image}
                          />
                        )
                      })}
                    </div>
                  )
                } else {
                  return null
                }
              })}

              {!isQueryResult && <NoResultCard />}
            </ScrollContainer>
          </ResultDisplay>
        )}
    </SearchBarContainer>
  )
}

const SearchBarContainer = styled.div`
  width: 750px;
  position: relative;

  @media (width < 768px) {
    width: 90%;
  }
`

interface TSearchTextFieldContainer {
  focus: boolean
  showResults: boolean
}

const SearchTextFieldContainer = styled.div<TSearchTextFieldContainer>`
  width: 100%;
  height: 40px;
  border: 1.5px solid ${(props) => (props.focus ? "black" : "#808080")};
  ${(props) =>
    props.showResults
      ? "border-radius: 20px 20px 0px 0px; border-bottom: 0px;"
      : "border-radius: 40px;"}
  display: flex;
  align-items: center;
  padding: 0 15px 0 15px;

  @media (width < 1024px) {
    height: 50px;
  }
`
const Icon = styled.img`
  width: 15px;
  height: 15px;

  @media (width < 1024px) {
    width: 20px;
    height: 20px;
  }
`
const CloseIconContainer = styled.div`
  width: 15px;
  height: 15px;

  @media (width < 1024px) {
    width: 20px;
    height: 20px;
  }
`
const CloseIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
  &: hover {
    opacity: 0.5;
  }

  @media (width < 1024px) {
    width: 20px;
    height: 20px;
  }
`
const TextField = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 18px;
  font-family: arial;
  font-weight: 500;
  padding: 0 2%;

  @media (width < 1024px) {
    font-size: 20px;
  }
`
const ResultDisplay = styled.div`
  width: 100%;
  border: 1.5px solid black;
  border-top: 0px;
  border-radius: 0px 0px 20px 20px;
  padding-bottom: 10px;
  position: absolute;
`
const Divider = styled.div`
  width: 95%;
  margin: 0 auto;
  border-bottom: 0.1px solid #808080;
`
const ScrollContainer = styled.div`
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  padding: 10px;
`

export default SearchBar
