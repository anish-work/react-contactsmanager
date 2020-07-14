
import React, { Component } from 'react';
import {Consumer} from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import Axios from 'axios';

class EditContact extends Component {

    state= {
        name:'',
        email:'',
        phone:'',
        errors: {}
    }

    async componentDidMount() {
         const { id } = this.props.match.params;
         const res = await Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

         const contact = res.data ;

         this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
         });
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
        

        const updContact = {
            name,
            email,
            phone
        }
        
        const { id } = this.props.match.params;
        
        const res = await Axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact);
        dispatch({type: 'UPDATE_CONTACT', payload: res.data})

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
                        <div className="card-header"><h5>Edit contact</h5></div>
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
                        <input type="submit" className="btn btn-block btn-light" value="Update"/>
                    </form>
                </div>
            </div>
                    )
                }}
            </Consumer>
        )
    }
}


export default EditContact;