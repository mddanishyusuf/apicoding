import React from 'react'
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
