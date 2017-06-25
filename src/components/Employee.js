import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import InputMask from 'react-input-mask';

class Employee extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user ? this.props.user.name : '',
      value: this.props.user ? this.props.user.name : '',
      phone: this.props.user ? this.props.user.phone : '',
      birthday: this.props.user ? this.props.user.birthday : '',
      isArchive: this.props.user ? this.props.user.isArchive : false,
      role: this.props.user ? this.props.user.role : 'waiter',
      errors: 'err',
      lastId: this.props.lastId
   };
  }
  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
      }).isRequired,
      staticContext: PropTypes.object
    }).isRequired
  };

  validator = (value) => {
    console.log(value);
    if (value.length < 1) {
      this.setState({errors: 'err'});
    } else {
      this.setState({errors: ''});
    }
  }
  handleChange = (event) => {
    console.log(event.target.value);
    this.validator(event.target.value);
    this.setState({name: event.target.value, value: event.target.value});
    console.log(this.state);
 }

 phoneChange = (event) => {
   console.log(event.target.value);
   this.setState({phone: event.target.value});
 }

 birthdayChange = (event) => {
   this.setState({birthday: event.target.value});
 }

 handleSubmit(event) {
   event.preventDefault();
   if (this.state.errors !== 'err') {
     this.props.onTodoClick(this.state);
     this.context.router.history.push('/');
   }
  }

  roleChange = (event) => {
    console.log(event.target.value);
    this.setState({role: event.target.value});
  }

  isArchiveChange = (event) => {
    console.log(event.target);
    const target = event.target;
    //let value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
     isArchive: target.checked
   });
 }

  componentDidMount() {

  }

  render() {
    return (
      <ul>
      <div>{this.state.errors}</div>
      <form>
        <label>
          Name:
          <input className="form-control form-control-error" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Phone:
          <InputMask className="form-control" {...this.props} defaultValue={this.state.phone} onChange={this.phoneChange} mask="+7 (999) 999-9999" maskChar=" " alwaysShowMask="true" />
        </label>
        <label>
          Birthday:
          <InputMask className="form-control" {...this.props}
          defaultValue={this.state.birthday} onChange={this.birthdayChange}
          mask="99.99.9999" maskChar=" "
          placeholder="01.01.1970"/>
        </label>
        <label>
        Должность:
        <select className="form-control" value={this.state.role} onChange={this.roleChange}>
          <option value="waiter">Официант</option>
          <option value="driver">Водитель</option>
          <option value="cook">Повар</option>
        </select>
        </label>
        <label>
          В архиве:
          <input
            name="isGoing"
            type="checkbox"
            value={this.state.isArchive ? 'on' : 'off'}
            checked={this.state.isArchive}
            onChange={this.isArchiveChange}
             />
        </label>
      </form>

      {/*<InputMask
      className="form-control" {...this.props}
      onChange={this.phoneChange}
      mask="+7 (999) 999-9999" maskChar=" "
      alwaysShowMask="true" />*/}

      <button
        onClick={(e) => {this.handleSubmit(e)}}
        type="button"
        className="btn btn-primary"
      >
        Save
      </button>
      </ul>

    )
  }
}

export default Employee
