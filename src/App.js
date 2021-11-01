import React, { Component } from 'react'
import PhoneBook from './Components/Phone/PhoneBook'
import PhoneEditor from './Components/Phone/PhoneEditor'
import PhoneFilter from './Components/Phone/PhoneFilter'
// import { v4 as uuid } from 'uuid'

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
    filter: '',
  }
  addNewContact = (object) => {
    // const isContactExist = (name) =>
    //   this.state.contacts.some(
    //     (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    //   )

    return this.setState({
      contacts: [...this.state.contacts, object],
    })
  }

  componentDidMount() {
    const oldContacts = localStorage.getItem('contacts')
    if (oldContacts) {
      this.setState({
        contacts: JSON.parse(oldContacts),
      })
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  deleteContact = (e) => {
    const id = e.target.id
    this.setState((prevState) => ({
      contacts: [...prevState.contacts.filter((contact) => contact.id !== id)],
    }))
  }

  onHandleChangeFilter = (e) => {
    this.setState({ filter: e.target.value })
  }

  getFiltredContacts = () => {
    return [
      ...this.state.contacts.filter((contact) =>
        contact.name
          .toLowerCase()
          .includes(this.state.filter.toLocaleLowerCase()),
      ),
    ]
  }

  render() {
    return (
      <>
        <PhoneEditor
          x={this.addNewContact}
          contactList={this.state.contacts}
          // isContactExist={this.isContactExist}
        />
        <PhoneFilter
          filter={this.state.filter}
          onHandleChangeFilter={this.onHandleChangeFilter}
        />
        <PhoneBook
          contactList={this.getFiltredContacts()}
          deleteContact={this.deleteContact}
        />
      </>
    )
  }
}
