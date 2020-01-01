import React from 'react'
import { Link } from 'gatsby'
import { ExternalLink, Tag, XCircle } from 'react-feather'
import Img from 'react-image'

import { getHostname } from '../utils/functions'
import '../styles/search-area.scss'

const SearchArea = ({ searchResult, searchDrawer, closeDrawer }) => (
    // const records = listData !== undefined ? listData.results : [
    <div className={searchDrawer ? 'search-area-open search-area' : 'search-area-closed search-area'}>
        <div className="visible-section">
            <div className="head">
                <div className="logo">API Coding</div>
                <div className="close-drawer" onClick={() => closeDrawer()}>
                    <XCircle size={14} /> <span>Close</span>
                </div>
            </div>
            <div className="search-area-inner">
                {searchResult.length > 0 &&
                    searchResult.map((objects, key) => {
                        if (objects.hits.length > 0) {
                            if (objects.index === 'API_CODING_APIS') {
                                return (
                                    <div className="search-widget" key={key}>
                                        <h2 className="category">APIs Collections</h2>
                                        {objects.hits.map((record, key) => (
                                            <div className="api-head-content" key={key}>
                                                <Img
                                                    className="card-image"
                                                    width="30"
                                                    height="30"
                                                    alt=""
                                                    src={[
                                                        `//logo.clearbit.com/${getHostname(record.link)}`,
                                                        'https://github.githubassets.com/favicon.ico',
                                                    ]}
                                                />
                                                <div className="card-title">
                                                    <a href={record.link} target="_blank" rel="noopener noreferrer">
                                                        <h2>{record.title}</h2>{' '}
                                                    </a>
                                                    <ul className="api-meta">
                                                        <li>{record.description}</li>
                                                    </ul>
                                                </div>
                                                <div className="external-link">
                                                    <ExternalLink size={13} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )
                            }
                            if (objects.index === 'API_CODING_LEARN') {
                                return (
                                    <div className="search-widget" key={key}>
                                        <h2 className="category">Learning</h2>
                                        {objects.hits.map((record, key) => (
                                            <Link
                                                to={`/${record.frontmatter.path}`}
                                                key={key}
                                                className="resource-list"
                                            >
                                                <h2>{record.frontmatter.title}</h2>
                                                <p>{record.frontmatter.excert}</p>
                                            </Link>
                                        ))}
                                    </div>
                                )
                            }
                            if (objects.index === 'API_CODING_TOOLS') {
                                return (
                                    <div className="search-widget" key={key}>
                                        <h2 className="category">Tools</h2>
                                        {objects.hits.map((record, key) => (
                                            <div className="api-head-content" key={key}>
                                                <Img
                                                    className="card-image"
                                                    width="30"
                                                    height="30"
                                                    alt=""
                                                    src={[
                                                        `//logo.clearbit.com/${getHostname(record.url)}`,
                                                        'https://github.githubassets.com/favicon.ico',
                                                    ]}
                                                />
                                                <div className="card-title">
                                                    <a href={record.url} target="_blank" rel="noopener noreferrer">
                                                        <h2>{record.title}</h2>{' '}
                                                    </a>
                                                    <ul className="api-meta">
                                                        <li>{record.description}</li>
                                                    </ul>
                                                </div>
                                                <div className="external-link">
                                                    <ExternalLink size={13} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )
                            }
                            if (objects.index === 'API_CODING_RESOURCES') {
                                return (
                                    <div className="search-widget" key={key}>
                                        <h2 className="category">Resources</h2>
                                        {objects.hits.map((record, key) => (
                                            <a
                                                href={record.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                key={key}
                                                className="resource-list"
                                            >
                                                <h2>{record.title}</h2>
                                                <p>{record.description}</p>
                                            </a>
                                        ))}
                                    </div>
                                )
                            }
                        }
                    })}
            </div>
        </div>
        <div className="blank-section" onClick={() => closeDrawer()} />
    </div>
)

export default SearchArea
