import React, { useState } from "react"
import validator from 'validator'

function Form(props) {
    // Variables and states
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [website, setWebsite] = useState('')

    // Errors onSubmit={handleSubmit}
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [userError, setUserError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmError, setConfirmError] = useState('')
    const [websiteError, setWebsiteError] = useState('')

    // Handles submit and errors 
    function handleSubmit(e) {
        e.preventDefault()
        let err = false
        
        // Name
        if (name === '') {
            err = true
            setNameError('- Cannot be blank')
        } else {
            setNameError('')
        }

        // Email
        if (email !== '') {
            if (!validator.isEmail(email)) {
                err = true
                setEmailError('- Must be a valid email')
            } else {
                setEmailError('')
            }
        } else {
            err = true
            setEmailError('- Cannot be blank')
        }

        // User
        if (user === '') {
            err = true
            setUserError('- Cannot be blank')
        } else {
            setUserError('')
        }

        // Password
        if(password !== '' && confirm !== '' ){
            if(!validator.isAscii(password)){
                err = true
                setPasswordError('- Cannot be blank')
            }else if(!validator.isAscii(confirm)){
                err = true
                setConfirmError('- Cannot be blank')
                }if(password === confirm){
                    setPasswordError('')
                    setConfirmError('')
                }else if(password !== confirm){
                    err = true
                    setPasswordError('- Must Match')
                    setConfirmError('- Must Match')
                }
         }else if(password !== '' && confirm === ''){
                err = true
                setConfirmError('- Cannot be blank')
        }else if(password === '' && confirm !== ''){
            err = true
            setPasswordError('- Cannot be blank')
        }else {
            err = true
            setPasswordError('- Cannot be blank')
            setConfirmError('- Cannot be blank')
       }

        // website
        if (website !== '') {
            if (!validator.isURL(website)) {
                err = true
                setWebsiteError('- Must be a valid URL')
            } else {
                setWebsiteError('')
            }
        } else {
            err = true
            setWebsiteError('- Cannot be blank')
        }

        // Submit
        if (!err) {
            console.log('submitted')
            props.history.push('/submitted')
        } else {
            console.log('not submitted')
        }
    } 

    return (
    <div>
        <h1>Profile Form - All fields required</h1>
    
        <form onSubmit={handleSubmit}>
            <div className='field'>
                <label htmlFor='name' className={nameError === '' ? '' : 'error'}>Name {nameError}</label>
                <input 
                className={nameError === '' ? '' : 'redbox'}
                value={name} 
                onChange={e => setName(e.target.value)} 
                type='text' 
                name="name" 
                placeholder="Name"></input>
            </div>

            <div className='field'>
                <label htmlFor='email' className={emailError === '' ? '' : 'error'}>Email {emailError}</label>
                <input 
                className={emailError === '' ? '' : 'redbox'}
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                type='type' 
                name="email" 
                placeholder="Email"></input>
            </div>

            <div className='field'>
                <label htmlFor='username' className={userError === '' ? '' : 'error'}>Username {userError}</label>
                <input 
                className={userError === '' ? '' : 'redbox'}
                value={user} 
                onChange={e => setUser(e.target.value)} 
                type='text' 
                name="username" 
                placeholder="Username"></input>
            </div>

            <div className='field'>
                <label htmlFor='password' className={passwordError === '' ? '' : 'error'}>Password {passwordError}</label>
                <input 
                className={passwordError === '' ? '' : 'redbox'}
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                type='password' 
                name="password" 
                placeholder="Password"></input>
            </div>

            <div className='field'>
                <label htmlFor='confirm' className={confirmError === '' ? '' : 'error'}>Confirm Password {confirmError}</label>
                <input 
                className={confirmError === '' ? '' : 'redbox'}
                value={confirm} 
                onChange={e => setConfirm(e.target.value)} 
                type='password' 
                name="confirm" 
                placeholder="Confirm Password"></input>
            </div>

            <div className='field'>
                <label htmlFor='website' className={websiteError === '' ? '' : 'error'}>Website {websiteError}</label>
                <input 
                className={websiteError === '' ? '' : 'redbox'}
                value={website} 
                onChange={e => setWebsite(e.target.value)} 
                type='text' 
                name="website" 
                placeholder="Website"></input>
            </div>

            <div className='submit'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form