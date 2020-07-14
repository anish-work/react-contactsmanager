
import React, { Component } from 'react';
import {Consumer} from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import Axios from 'axios';

export default class AddContact extends Component {

    state= {
        name:'',
        email:'',
        phone:'',
        errors: {}
    }

    onChange = (e) => this.setState({[e.target.name] : e.target.value})


    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        const {name, email, phone} = this.state;

        if(name === ''){
            this.setState({errors: {name: 'Name Is required'}});
            return;
        }
        if(email === ''){
            this.setState({errors: {email: 'Email Is required'}})
            return;
        }
        if(phone === ''){
            this.setState({errors: {phone: 'Name Is required'}});
            return;
        }

        const newContact = {
            name,
            email,
            phone
        }
       const res =  await Axios.post('https://jsonplaceholder.typicode.com/users', newContact)
        
       dispatch({type:'ADD_CONTACT', payload: res.data})
        
        //Clear State
        this.setState({
            name:'',
            email:'',
            phone:'',
            errors: {}
        })
        this.props.history.push('/')
    }
    render() {
        const {name, email, phone, errors} = this.state;
        return(
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card-mb-3">
                        <div className="card-header"><h5>Add new contact</h5></div>
                        <div className="card-body">
                         <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                        <TextInputGroup 
                        label="Name" 
                        name="name"
                        value={name}
                        placeholder="Enter a name..."
                        onChange={this.onChange}
                        error={errors.name}
                        />
                        <TextInputGroup 
                        label="Email" 
                        name="email"
                        value={email}
                        placeholder="Enter email"
                        type="email"
                        onChange={this.onChange}
                        error={errors.email}
                        />
                        <TextInputGroup 
                        label="Phone Number" 
                        name="phone"
                        value={phone}
                        placeholder="Enter Phone Number"
                        onChange={this.onChange}
                        error={errors.phone}
                          />
                        <input type="submit" className="btn btn-block btn-light" value="Add"/>
                    </form>
                </div>
            </div>
                    )
                }}
            </Consumer>
        )
    }
}
