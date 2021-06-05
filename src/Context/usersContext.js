/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */

/* eslint-disable no-use-before-define */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import dummyTestData from "./tests/dummyTestData";

const Users = React.createContext()

function UsersProvider({ children }) {
    const [users, setusers] = useState([])
    const [state, setState] = useState({ name: '', email: '', website: '' })

    useEffect(() => {
        fetchUsers()
    }, [])
    const useSortableData = (items, config = null) => {
        const [sortConfig, setSortConfig] = React.useState(config)
        const [setConfig, setdata] = React.useState(config)
        const [pagenumbers, setpagination] = React.useState(config)

        const sortedItems = React.useMemo(() => {
            const sortableItems = [...items]
            var sConfig = JSON.parse(localStorage.getItem('sortConfig'))
            var search = JSON.parse(localStorage.getItem('search'))

            if (sortConfig !== null) {
                sortableItems.sort((a, b) => {
                    if (a[sortConfig.key] < b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? -1 : 1
                    }
                    if (a[sortConfig.key] > b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? 1 : -1
                    }
                    return 0
                })
            } else if (sConfig) {
                setSortConfig(sConfig)
            }
            if (setConfig !== null) {
                return sortableItems.filter((item) => {
                    return item[setConfig.name]
                        .toLowerCase()
                        .includes(setConfig.title.toLowerCase())
                })
            }
            if (pagenumbers !== null) {
                if (pagenumbers !== 'all') {
                    return sortableItems.slice(0, pagenumbers)
                }
                return sortableItems
            }

            return sortableItems
        }, [items, sortConfig, setConfig, pagenumbers])

        const requestSort = (key) => {
            let direction = 'ascending'
            if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
                direction = 'descending'
            }
            const sortConfi = {
                key,
                direction,
            }

            localStorage.setItem('sortConfig', JSON.stringify(sortConfi))

            setSortConfig({ key, direction })
        }

        const handleSearchEvents = (title, name) => {
            const search = {
                name,
                title,
            }
            localStorage.setItem('search', JSON.stringify(search))
            setState({ [name]: title })
            setdata({ name, title })
        }
        const pagination = (pagenumber) => {
            setpagination(pagenumber)
        }
        const handlePrev = () => {}
        const handleNext = () => {}

        return {
            items: sortedItems,
            requestSort,
            sortConfig,
            handleSearchEvents,
            pagination,
            handlePrev,
            handleNext,
        }
    }

    async function fetchUsers() {
        try {
            const content = await axios.get('https://jsonplaceholder.typicode.com/users')
            setusers(content.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Users.Provider value={{ useSortableData, users, state, setState }}>
            {children}
        </Users.Provider>
    )
}

export { UsersProvider, Users }
