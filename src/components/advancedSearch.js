import React, { useState } from 'react'
import { Form, InputGroup, FormControl } from 'react-bootstrap'
import { globalHistory } from '@reach/router'

import SearchArea from './searchArea'
import { getSearch } from '../utils/functions'

const AdvancedSearch = ({ headNavAdjust, normalNav }) => {
    const [searchQ, setSearchQ] = useState('')
    const [searchDrawer, setSearchDrawer] = useState(false)
    const [searchResult, setSearchResult] = useState([])
    const path = globalHistory.location.pathname

    const searchNowAction = async e => {
        e.preventDefault()
        setSearchDrawer(true)
        const result = await getSearch(path, searchQ)
        setSearchResult(result.results)
        headNavAdjust('adjust')
    }

    const handleSearchInput = e => {
        setSearchQ(e.target.value)
    }

    const closeDrawer = () => {
        setSearchDrawer(false)
        normalNav('normal')
    }

    return (
        <>
            <SearchArea searchResult={searchResult} searchDrawer={searchDrawer} closeDrawer={closeDrawer} />

            <Form inline onSubmit={searchNowAction}>
                <InputGroup>
                    <InputGroup.Prepend className="search-icon">
                        <InputGroup.Text id="basic-addon1">
                            <svg
                                width="20px"
                                height="20px"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 18 18"
                                aria-hidden="true"
                            >
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Artboard-1" stroke="#777777" strokeWidth="1.3">
                                        <g id="Group">
                                            <path
                                                d="M13.4044,7.0274 C13.4044,10.5494 10.5494,13.4044 7.0274,13.4044 C3.5054,13.4044 0.6504,10.5494 0.6504,7.0274 C0.6504,3.5054 3.5054,0.6504 7.0274,0.6504 C10.5494,0.6504 13.4044,3.5054 13.4044,7.0274 Z"
                                                id="Stroke-3"
                                            />
                                            <path d="M11.4913,11.4913 L17.8683,17.8683" id="Stroke-7" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="youtube apis docs"
                        aria-label="search"
                        onChange={handleSearchInput}
                        aria-describedby="basic-addon1"
                    />
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1" className="search-btn">
                            Search
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                </InputGroup>
            </Form>
        </>
    )
}

export default AdvancedSearch
