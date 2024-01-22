import { Component } from "react";
import { nanoid } from 'nanoid';


class ContacsBook extends Component {
  
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  render() { 
    return (
 <PhoneBook/>

    );
  }
}
 
export default ContacsBook;