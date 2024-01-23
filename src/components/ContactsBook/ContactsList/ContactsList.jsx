import styles from "./contacts-list.css";

const ContactsList = ({items,deleteContact}) => {
    const elements=items.map(({id, name, number}) =>
    <li key={id}>{name}:{number} <button onClick={()=>deleteContact(id)} type="button">Delete</button></li>)

    return (
        <ol className={styles.list}>
            
            {elements}
            
        </ol>
    )
}
export default ContactsList;