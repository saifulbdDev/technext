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

            if (sortConfig !== null) {
                console.log(sortConfig.key, sortConfig.direction, 'fff')
                sortableItems.sort((a, b) => {
                    if (a[sortConfig.key] < b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? -1 : 1
                    }
                    if (a[sortConfig.key] > b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? 1 : -1
                    }
                    return 0
                })
            }
            if (setConfig !== null) {
                console.log(setConfig)
                return sortableItems.filter(
                    (item) => item[setConfig.name].indexOf(setConfig.title) !== -1
                )
            }
            if (pagenumbers !== null) {
                if (pagenumbers !== 'all') {
                    return items.slice(0, pagenumbers)
                }
                return items
            }

            return sortableItems
        }, [items, sortConfig, setConfig, pagenumbers])

        const requestSort = (key) => {
            let direction = 'ascending'
            if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
                direction = 'descending'
            }

            setSortConfig({ key, direction })
        }

        const handleSearchEvents = (title, name) => {
            setState({ [name]: title })
            setdata({ name, title })
        }
        const pagination = (pagenumber) => {
            setpagination(pagenumber)
        }

        return { items: sortedItems, requestSort, sortConfig, handleSearchEvents, pagination }
    }

    async function fetchUsers() {
        try {
            const content = await axios.get('https://jsonplaceholder.typicode.com/users')
            setusers(content.data)
            console.log(content)
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
