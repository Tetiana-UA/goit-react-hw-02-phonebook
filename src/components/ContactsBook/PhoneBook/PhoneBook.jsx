import { Component } from "react";
import styles from "./phone-book.css";
import { nanoid } from "nanoid";

class PhoneBook extends Component {

    contactNameId=nanoid();
    contactNumberId=nanoid();

    state = {  } 
    render() {
        
        const{contactNameId, contactNumberId}=this;
        return (

            <form>
                <div className={styles.form}>
                    <label>Name</label>
                    <input className={styles.formElement}></input>
                </div>
            </form>
        );
    }
}
 
export default PhoneBook;