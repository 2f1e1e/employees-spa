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
      id: this.props.user ? this.props.user.id : this.props.lastId,
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
    console.log(process.env.dd);
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
   if (/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(event.target.value)) {
     this.setState({birthday: event.target.value});
     console.log("Correct date")
   }

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
    const { name, phone, birthday, role, isArchive} = this.state;
    return (
      <ul>
      <div>{this.state.errors}</div>
      <form>
        <label>
          Name:
          <input className="form-control form-control-error" type="text" value={name} onChange={this.handleChange} />
        </label>
        <label>
          Phone:
          <InputMask className="form-control" {...this.props} defaultValue={phone} onChange={this.phoneChange} mask="+7 (999) 999-9999" maskChar=" " alwaysShowMask="true" />
        </label>
        <label>
          Birthday:
          <InputMask className="form-control" {...this.props}
          defaultValue={birthday} onChange={this.birthdayChange}
          mask="99.99.9999" maskChar=" "
          placeholder="01.01.1970"/>
        </label>
        <label>
        Должность:
        <select className="form-control" value={role} onChange={this.roleChange}>
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
            value={isArchive ? 'on' : 'off'}
            checked={isArchive}
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
