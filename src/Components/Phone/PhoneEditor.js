import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'
import s from './phoneEditor.module.css'

export default class PhoneEditor extends Component {
  state = {
    userName: '',
    userPhone: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const isContactExist = (userName) =>
      this.props.contactList.some(
        (contact) => userName.toLowerCase() === contact.name.toLowerCase(),
      )
    const newContact = {
      id: uuid(),

      name: this.state.userName,
      number: this.state.userPhone,
    }
    if (!isContactExist(this.state.userName)) {
      this.props.x(newContact)
    } else alert(`contact ${this.state.userName} already exist`)
  }

  render() {
    return (
      <>
        <form className={s.phone} onSubmit={this.handleSubmit}>
          <h2>Phone book</h2>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="userName"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="userPhone"
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <button type="submit">Add contact</button>
        </form>
      </>
    )
  }
}
