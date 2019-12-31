import React from 'react'

import '../styles/search-area.scss'

const drawerState = true

const SearchArea = ({ searchResult }) => {
    console.log(searchResult[0])
    return (
        // const records = listData !== undefined ? listData.results : [
        <div className={drawerState ? 'search-area-open search-area' : 'search-area-closed search-area'}>
            <div className="head">
                <div className="logo">API Coding</div>
                <div className="close-drawer" onClick={() => closeDrawer()}>
                    close
                </div>
            </div>
            <div className="search-area-inner">
                {searchResult.length > 0 &&
                    searchResult.map((objects, key) => (
                        <div key={key}>
                            <h2 className="category">{objects.index}</h2>
                            {objects.hits.map((record, key) => (
                                <div key={key}>{record.title}</div>
                            ))}
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default SearchArea
