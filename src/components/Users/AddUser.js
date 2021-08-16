import React, { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'

import styles from './AddUser.module.css'

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault()
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            alert('Please write something!');
        }
        if(+enteredAge < 1){
            return;
        }
        props.onAddUser(enteredUserName, enteredAge)
        setEnteredUserName('')
        setEnteredAge('')
    }

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }

    const ageChaneHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"  value={enteredUserName} onChange={userNameChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChaneHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )

}

export default AddUser