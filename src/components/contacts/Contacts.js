import React, { Component } from 'react'
import Contact from './Contact'
import {Consumer} from '../../context'

 class Contacts extends Component {
    render() {
        return(
            <Consumer>
                { value => {
                    const {contacts} = value;
                    return(
                        <React.Fragment>
                            <h3 className="display-5 mb-3">Contacts list</h3>
                            {contacts.map(contact => (
                            <Contact 
                            key={contact.id}
                            contact={contact}
                           />
                                ))}
                            
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}
export default Contacts;