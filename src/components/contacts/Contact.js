import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Consumer} from '../../context';
import Axios from 'axios';
import { Link }from 'react-router-dom';
;
class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onDeleteClick = async (id, dispatch) => {
        await Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
             dispatch({type:'DELETE_CONTACT', payload: id})
    }
    render() {
        const {id, name, email, phone} = this.props.contact;
        const {showContactInfo} = this.state;
        return (
            <Consumer>
                {value => {
                    const{ dispatch } = value;
                    return (
                    <React.Fragment>
                        <div className="card card-body mb-3">
                         <h5>{name}{' '}

                        <i className="fa fa-sort-down" 
                        style={{cursor: 'pointer'}} 
                        onClick={() => {this.setState({showContactInfo: !this.state.showContactInfo})}}></i>

                        <i className="fa fa-times" 
                        style={{color:'red', cursor:'pointer', float: 'right' }} onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>

                        <Link to={`contact/edit/${id}`} >
                            <i className="fa fa-pencil mr-4"
                            style={{cursor: 'pointer',float: 'right', color:'blue'}}></i>
                        </Link>

                        </h5>
                        {showContactInfo ? (<ul className="list-group">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                        </ul>) : null}
                        </div>
                    </React.Fragment>
                    )
                }}
            </Consumer>
        )
       
        
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}


export default Contact;
