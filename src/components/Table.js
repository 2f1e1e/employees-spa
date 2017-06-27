import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultRole = {
  waiter: 'Официант',
  driver: 'Водитель',
  cook:'Повар'
};

export default class Table extends Component {

  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
      }).isRequired,
      staticContext: PropTypes.object
    }).isRequired
  };

  handleClick(rowidx, rowid) {
    console.log("handleClick");
    console.log(rowidx);
    //rowid-=1;
    this.context.router.history.push('/users/' + rowid);

    this.setState({
      id: "fsdf"
    });
  }

        render() {

          return (
            <div className="datagrid">

              <table className="table table-hover">
              <thead>
                <tr>
                  {this.props.headers.map((item, idx) => {
                    return <th key = {idx}>{item}</th>
                  })}
                </tr>
                </thead>
                <tbody>
                {this.props.data.map((row, rowidx) => {
                  return <tr onClick={(e) => this.handleClick(rowidx, row.id)}>

                  <td>{row.name}</td>
                  <td>{row.birthday}</td>
                  <td>{defaultRole[row.role] || row.role}</td>
                  <td>{row.phone}</td>
                  </tr>
                })}
                </tbody>
              </table>
            </div>
          );
        }
      }


  //    export default Table
