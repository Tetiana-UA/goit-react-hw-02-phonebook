import styles from "./contacts-list.css";

const ContactsList = ({items}) => {
    const elements=items.map(({id, name, number}) =>
    <li key={id}>{name}:{number} <button type="button">Delete</button></li>)

    return (
        <ol className={styles.list}>
            <h2 className={styles.h2}>Contacts</h2>
            {elements}
            
        </ol>
    )
}
export default ContactsList;