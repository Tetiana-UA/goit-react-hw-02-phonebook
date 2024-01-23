import { Component } from "react";
import { nanoid } from 'nanoid';
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsList from "./ContactsList/ContactsList";


class ContacsBook extends Component {
  
  state = {
    contacts: [
        {id: "1111", name:"2222", number:"3333"},
    ],
    filter: '',
    
  }

  render() { 
    const {contacts}=this.state;
    return (
        <>
        <ContactsForm />
        <ContactsList items={contacts}/>
        
        </>
 

    );
  }
}
 
export default ContacsBook;