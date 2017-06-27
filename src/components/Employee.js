import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';

export default class Employee extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user ? this.props.user.name : '',
      value: this.props.user ? this.props.user.name : '',
      phone: this.props.user ? this.props.user.phone : '',
      birthday: this.props.user ? this.props.user.birthday : '',
      isArchive: this.props.user ? this.props.user.isArchive : false,
      role: this.props.user ? this.props.user.role : 'waiter',
      noErrors: {
        name: true,
        phone: true,
        birthday: true
      },
      id: this.props.user ? this.props.user.id : this.props.lastId,
      lastId: this.props.lastId,
      inputClassName: {
        name: '',
        birthday: '',
        phone: ''
      },
      secondTry: false
   }
  }

  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
      }).isRequired,
      staticContext: PropTypes.object
    }).isRequired
  }

  validator = (value) => {
    if (value.length < 3 ) {
      this.setState({noErrors: {...this.state.noErrors, name: false}});
    } else {
      this.setState({noErrors: {...this.state.noErrors, name: true}});
    }
  }

  handleChange = (event) => {
    this.resetClassNames();
    this.validator(event.target.value);
    this.setState({name: event.target.value, value: event.target.value});
  }

  phoneValidator = (phone) => {
    if (/^\+\d\s\(\d{3}\)\s\d{3}-\d{4}$/gm.test(phone)) {
      this.setState({noErrors: {...this.state.noErrors, phone: true}});
    }
  }

  phoneChange = (event) => {
    this.resetClassNames();
    this.phoneValidator(event.target.value)
    this.setState({phone: event.target.value});
  }

  birthdayChange = (event) => {
    this.resetClassNames();
    if (/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(event.target.value)) {
      this.setState({
        birthday: event.target.value,
      });
      this.setState({noErrors: {...this.state.noErrors, birthday: true}});
      console.log("Correct date")
    }
  }

  resetClassNames = () => {
    this.setState({
      inputClassName: {
        name: '',
        birthday: '',
        phone: ''
      }
    });
  }

  handleSubmit = (event) => {
    let inputClassName = {};
    const noErrors = this.state.noErrors;
    this.resetClassNames();
    event.preventDefault();
    this.setState({secondTry: true});
    this.validator(this.state.name);
    this.phoneValidator(this.state.phone)

    if (noErrors.name && noErrors.phone && noErrors.birthday) {
      this.props.onTodoClick(this.state);
      this.context.router.history.push('/');
    } else {
      console.log(this.state.inputClassName);
      if (!noErrors.name) {
        inputClassName.name = "has-error";
      }
      if (!noErrors.phone) {
        inputClassName.phone = "has-error";
      }
      if (!noErrors.birthday) {
        inputClassName.birthday = "has-error";
      }
      this.setState({ inputClassName });
    }
   }

   roleChange = (event) => {
     this.setState({role: event.target.value});
   }

   isArchiveChange = (event) => {
     this.setState({isArchive: event.target.checked});
   }

   componentDidMount() {
     if (this.props.newEntry) {
       this.setState({
         noErrors: {
           name: false,
           phone: false,
           birthday: false
         },
       });
     }
   }

  render() {

    const { name, phone, birthday, role, isArchive, inputClassName } = this.state;

    return (
      <div>
      <form className="form-horizontal">
       <div className={`form-group ${inputClassName.name}`}>
         <label className="col-sm-2 control-label">Имя: </label>
         <div className="col-sm-10">
           <input className="form-control"
             id="focusedInput"
             defaultValue={name}
             onChange={this.handleChange}
             type="text" />
         </div>
       </div>
       <div className={`form-group ${inputClassName.phone}`}>
         <label className="col-sm-2 control-label">Телефон: </label>
         <div className="col-sm-10">
           <InputMask className="form-control"
             {...this.props} defaultValue={phone}
             id="focusedInput"
             onChange={this.phoneChange}
             mask="+7 (999) 999-9999"
             maskChar=" " alwaysShowMask="true"
             type="text" />
         </div>
       </div>
       <div className={`form-group ${inputClassName.birthday}`}>
         <label className="col-sm-2 control-label">Дата рождения: </label>
         <div className="col-sm-10">
           <InputMask className="form-control" {...this.props}
           defaultValue={birthday} onChange={this.birthdayChange}
           id="focusedInput"
           mask="99.99.9999" maskChar=" "
           type="text"
           placeholder="01.01.1970"/>
         </div>
       </div>
       <div className="form-group">
         <label className="col-sm-2 control-label">Должность: </label>
         <div className="col-sm-10">
           <select className="form-control" value={role} onChange={this.roleChange}>
             <option value="waiter">Официант</option>
             <option value="driver">Водитель</option>
             <option value="cook">Повар</option>
           </select>
         </div>
       </div>
       <div className="form-group">
         <label className="col-sm-2 control-label">В архиве: </label>
         <div className="col-sm-10">
           <input
             name="isGoing"
             type="checkbox"
             value={isArchive ? 'on' : 'off'}
             checked={isArchive}
             onChange={this.isArchiveChange}
              />
         </div>
       </div>
     </form>

      <button
        onClick={(e) => {this.handleSubmit(e)}}
        type="button"
        className="btn btn-primary">
        Сохранить
      </button>
      <Link
        type="button"
        className="btn btn-primary"
        to="/">
        Назад
      </Link>
      </div>
    )
  }
}
