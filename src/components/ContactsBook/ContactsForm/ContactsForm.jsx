import { Component } from "react";
import styles from "./contacts-form.css";
import { nanoid } from "nanoid";

class ContactsForm extends Component {

    contactNameId=nanoid();
    contactNumberId=nanoid();

    state = { 
        name: '',
    number: ''
    } 

handleChange = ({target}) => {
    const {name, value}=target;
    this.setState({
        [name]:value
        
    })
    console.log(value);
}

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);

    }



    render() {
        
        const{contactNameId, contactNumberId, handleSubmit,handleChange}=this;
        return (

            <form onSubmit={handleSubmit} className={styles.form} >
                <div className={styles.formElement} >
                    <label htmlFor={contactNameId}>Name</label>
                    <input type="text" name="name" required   id={contactNameId} onChange={handleChange} />
                </div>
                <div className={styles.formElement}>
                    <label htmlFor={contactNumberId}>Number</label>
                    <input type="tel" name="number" required   id={contactNumberId} onChange={handleChange} />
                </div>
                <button type="submit">Add contact</button>
            </form>
        );
    }
}
 
export default ContactsForm;