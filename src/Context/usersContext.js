import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import dummyTestData from "./tests/dummyTestData";

const Users = React.createContext()

function UsersProvider({ children }) {
    const [users, setusers] = useState([])

    useEffect(() => {
        // eslint-disable-next-line no-use-before-define
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const content = await axios.get('https://jsonplaceholder.typicode.com/users')
            setusers(content.data)
            console.log(content)
        } catch (error) {
            console.log(error)
        }
    }

    return <Users.Provider value={{ users }}>{children}</Users.Provider>
}

export { UsersProvider, Users }
