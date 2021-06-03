/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react'

export class Table extends Component {
    constructor(props) {
        super(props)

        this.data = [] // this data should not live in state
        this.state = {
            name: '',
            email: '',
            website: '',
            isLoading: true,
        }
    }

    // fetch src data from JSON url (on Github)
    // UNSAFE_componentWillMount()
    componentDidMount() {
        // Where we're fetching data from
        fetch(`https://jsonplaceholder.typicode.com/users`)
            // We get the API response and receive data in JSON format...
            .then((response) => response.json())
            .then((res) => {
                const array = res

                this.data = array
                this.setState({
                    isLoading: false,
                })
            })

            // Catch any errors we hit and update the app
            .catch((error) => this.setState({ error, isLoading: false }))
    }

    handleSearchEvents = (title, name) => {
        this.setState({ [name]: title })
    }

    handleOnChange = (e) => {
        // console.log('value: '+e.target.value+ ' name: '+ e.target.name);
        this.handleSearchEvents(e.target.value, e.target.name)
    }

    render() {
        const filteredData = this.data.filter(
            (dataObj) =>
                dataObj.name.indexOf(this.state.name) !== -1 &&
                dataObj.email.indexOf(this.state.email) !== -1 &&
                dataObj.website.indexOf(this.state.website) !== -1
        )
        const rows = []

        // generate the table rows
        // based on container representational pattern and Hook, CountryTable should not have business logic
        filteredData.forEach((dataObj) => {
            rows.push(
                <tr>
                    <td>{dataObj.name}</td>
                    <td>{dataObj.email}</td>
                    <td>{dataObj.website}</td>
                </tr>
            )
        })
        return (
            <section className="articlesList-section">
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    <input
                                        type="text"
                                        name="name"
                                        value={this.name}
                                        onChange={this.handleOnChange}
                                        placeholder="name..."
                                    />
                                </th>
                                <th>
                                    <input
                                        type="text"
                                        name="email"
                                        value={this.email}
                                        onChange={this.handleOnChange}
                                        placeholder="email..."
                                    />
                                </th>
                                <th>
                                    <input
                                        type="text"
                                        name="website"
                                        value={this.website}
                                        onChange={this.handleOnChange}
                                        placeholder="website..."
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody className="tableBodyStyle">{rows}</tbody>
                    </table>
                </div>
            </section>
        )
    }
}

export default Table
