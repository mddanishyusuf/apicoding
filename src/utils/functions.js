import React from 'react'
import axios from 'axios'
import { GoBrowser } from 'react-icons/go'
import { GiThink } from 'react-icons/gi'
import { FaApple, FaTerminal, FaWindows, FaAndroid, FaAppStoreIos, FaConnectdevelop, FaDatabase } from 'react-icons/fa'
import {
    DiRubyRough,
    DiPython,
    DiJavascript1,
    DiGo,
    DiScala,
    DiJava,
    DiHaskell,
    DiPostgresql,
    DiLinux,
} from 'react-icons/di'
import { MdOfflinePin, MdExtension } from 'react-icons/md'

export const getHostname = function(url) {
    if (url !== null) {
        const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i)
        if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
            return match[2]
        }
    }

    return null
}

function getIndces(pathname, query) {
    const type = pathname.split('/')[1]
    const paramObjArray = []
    if (type === '') {
        paramObjArray.push(
            {
                indexName: 'API_CODING_APIS',
                params: `query=${query}`,
            },
            {
                indexName: 'API_CODING_LEARN',
                params: `query=${query}`,
            },
            {
                indexName: 'API_CODING_TOOLS',
                params: `query=${query}`,
            },
            {
                indexName: 'API_CODING_RESOURCES',
                params: `query=${query}`,
            }
        )
    } else if (type === 'public-apis') {
        paramObjArray.push({
            indexName: 'API_CODING_APIS',
            params: `query=${query}`,
        })
    } else if (type === 'learn') {
        paramObjArray.push({
            indexName: 'API_CODING_LEARN',
            params: `query=${query}`,
        })
    } else if (type === 'tools') {
        paramObjArray.push({
            indexName: 'API_CODING_TOOLS',
            params: `query=${query}`,
        })
    } else if (type === 'resources') {
        paramObjArray.push({
            indexName: 'API_CODING_RESOURCES',
            params: `query=${query}`,
        })
    } else {
        paramObjArray.push(
            {
                indexName: 'API_CODING_APIS',
                params: `query=${query}`,
            },
            {
                indexName: 'API_CODING_LEARN',
                params: `query=${query}`,
            },
            {
                indexName: 'API_CODING_TOOLS',
                params: `query=${query}`,
            },
            {
                indexName: 'API_CODING_RESOURCES',
                params: `query=${query}`,
            }
        )
    }
    return paramObjArray
}

export const getSearch = async function(pathname, query) {
    const indices = getIndces(pathname, query)
    const result = await axios({
        method: 'post',
        url: 'https://3ODBCR3ZKZ-dsn.algolia.net/1/indexes/*/queries',
        headers: {
            'X-Algolia-API-Key': process.env.ALGOLIA_SEARCH_KEY,
            'X-Algolia-Application-Id': process.env.GATSBY_ALGOLIA_APP_ID,
        },
        data: {
            requests: indices,
            strategy: 'none',
        },
    })
    return result.data
}

export const getIconComp = function(name) {
    if (name === 'Web') {
        return <GoBrowser />
    }

    if (name === 'Chrome Extension') {
        return <MdExtension />
    }

    if (name === 'MacOS') {
        return <FaApple />
    }

    if (name === 'CMD tool') {
        return <FaTerminal />
    }

    if (name === 'Windows') {
        return <FaWindows />
    }

    if (name === 'Android') {
        return <FaAndroid />
    }

    if (name === 'iOS') {
        return <FaAppStoreIos />
    }

    if (name === 'PWA') {
        return <MdOfflinePin />
    }

    if (name === 'Framework') {
        return <FaConnectdevelop />
    }

    if (name === 'Ruby') {
        return <DiRubyRough />
    }

    if (name === 'Python') {
        return <DiPython />
    }

    if (name === 'Javascript') {
        return <DiJavascript1 />
    }

    if (name === 'Go') {
        return <DiGo />
    }

    if (name === 'Scala') {
        return <DiScala />
    }

    if (name === 'Java') {
        return <DiJava />
    }

    if (name === 'Haskell') {
        return <DiHaskell />
    }

    if (name === 'Postgres') {
        return <DiPostgresql />
    }

    if (name === 'Database') {
        return <FaDatabase />
    }

    if (name === 'Linux') {
        return <DiLinux />
    }
    return <GiThink />
}

export const pagination = function(c, m) {
    const current = c
    const last = m
    const delta = 2
    const left = current - delta
    const right = current + delta + 1
    const range = []
    const rangeWithDots = []
    let l

    for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || (i >= left && i < right)) {
            range.push(i)
        }
    }

    for (const i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1)
            } else if (i - l !== 1) {
                rangeWithDots.push('...')
            }
        }
        rangeWithDots.push(i)
        l = i
    }

    return rangeWithDots
}
