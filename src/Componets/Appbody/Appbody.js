import React, { useState } from 'react';
import EmpoyeesList from '../../employees/employees.json';
import Employee from '../Employee/Employee';
import './Appbody.css';
import Accounts from '../Accounts/Accounts';

const Appbody = () => {
    const [employees, setEmployees] = useState(EmpoyeesList);
    const [accounts, setAccounts] = useState([]);

    const addToAccounts = (newData) => {
        const newAccounts = [...accounts,newData];
        setAccounts(newAccounts);
    }
    return (
        <div className="app-body">
            <div className="employee-container">
                {
                    employees.map(employee => <Employee addToAccounts={addToAccounts} employee={employee}></Employee>)
                }
            </div>
            <div className="accounts-container">
                <Accounts accounts={accounts}></Accounts>
            </div>
        </div>
    );
};

export default Appbody;