/* eslint-disable no-var */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-this-in-sfc */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import dummyTestData from "./tests/dummyTestData";

const Users = React.createContext()

function UsersProvider({ children }) {
    const [users, setusers] = useState([])
    var [state, setState] = useState([])

    state = {
        name: '',
        email: '',
        website: '',
    }

    useEffect(() => {
        // eslint-disable-next-line no-use-before-define
        fetchUsers()
    }, [])
    const useSortableData = (items, config = null) => {
        const [sortConfig, setSortConfig] = React.useState(config)

        const sortedItems = React.useMemo(() => {
            const sortableItems = [...items]
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
            }
            return sortableItems
        }, [items, sortConfig])

        const requestSort = (key) => {
            let direction = 'ascending'
            if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
                direction = 'descending'
            }
            setSortConfig({ key, direction })
        }

        const handleSearchEvents = (title, name) => {
            setState({ [name]: title })
        }
        return { items: sortedItems, requestSort, sortConfig }
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
