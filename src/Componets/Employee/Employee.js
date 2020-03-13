import React,{useState} from 'react';
import './Employee.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill,faCheckCircle } from '@fortawesome/free-solid-svg-icons'
const Employee = (props) => {
    const {name,photo,designation,salary} = props.employee;
    const [isPaid, setIsPaid] = useState(false);
    let paymentButton = <button onClick={() => {props.addToAccounts(props.employee); setIsPaid(true)} } className="pay-btn"><FontAwesomeIcon icon={faMoneyBill} /> Pay Now</button>
    ;
    if(isPaid){
        paymentButton = <button  className="paid" disabled><FontAwesomeIcon icon={faCheckCircle} /> Paid</button>;
    }
    return (
        <div className="single-employee">
            <img src={photo} alt=""/>
            <h3>{name}</h3> 
            <p>{designation}</p>
            <p>Salary : {salary} BDT</p>
            {paymentButton}

        </div>
    );
};

export default Employee;