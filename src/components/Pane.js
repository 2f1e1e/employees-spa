import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Pane.css';

export default class Table extends Component {

  render() {
    console.log("staet");
    console.log(this.props)
    return (
      <div className="pane">
      <form className="form-inline">
        <div className="form-group">
        <label htmlFor="focusedInput">Сортировка</label>
        <select className="form-control"
          onChange={e => this.props.onSortingChange(e.target.value)}
          defaultValue={this.props.state.sortBy}>
          <option value="none">По умолчанию</option>
          <option value="name">Имя</option>
          <option value="birthday">Дата</option>
        </select>
        </div>
        <div className="form-group">
        <label htmlFor="focusedInput">Должность</label>
        <select className="form-control"
          onChange={e => this.props.onRoleChange(e.target.value)}
          defaultValue={this.props.state.roleFilter}>
          <option value="all">Все</option>
          <option value="waiter">Официант</option>
          <option value="driver">Водитель</option>
          <option value="cook">Повар</option>
        </select>
        </div>
        <div className="form-group">
        <label htmlFor="focusedInput">В архиве</label>
        <input
          name="isGoing"
          type="checkbox"
          checked={this.props.state.isArchiveFilter}
          onChange={e => this.props.onIsArchiveChange(e.target.checked)}
           />
        </div>
          <div className="form-group">
        <Link
          type="button"
          className="btn btn-primary"
          to="/new">Новый сотрудник</Link>
      </div>
      </form>
      </div>
    );
  }
}

/*
<div className="datagrid">
<label>
Должность:
<select className="form-control">
  <option value="none">Все</option>
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
     />
</label>
<label>
Сортировка:
<select className="form-control">
  <option value="waiter">По имени</option>
  <option value="driver">По дате рождения</option>
</select>
</label>
</div>
*/
