import styles from "./filter.css";

const Filter = ({filter, changeFilter}) => {
    

    return (
        <div className={styles.filter}> 
        <label>Find contacts by name</label>
        <input onChange={changeFilter} value={filter} name="filter"/>
        </div>
    )
}

export default Filter;