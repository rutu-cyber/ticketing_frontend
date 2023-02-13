import React, {useState} from 'react';
import { Login } from '../../components/login/Login';
import { PasswordReset } from '../../components/password-reset/PasswordReset';

import './entry.css';

const Entry = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formLoad, setFormLoad] = useState('login');

  const handleOnChange = (e) =>{
    const {name, value} = e.target;

    switch(name){
      case 'email':
        setEmail(value)
        break;

        case 'password':
        setPassword(value)
        break;

        default:
          break;

    }
  };

  const handleOnSubmit = (e) =>{
    e.preventDefault()
    if(!email || !password){
      return alert('Fill up all the form!')
    }

    //todo call api to submit form
  };

  const handleOnResetSubmit = (e) =>{
    e.preventDefault()
    if(!email){
      return alert('Please Enter the Email')
    }

    //todo call api to submit form
  };

  const formSwitcher = (formType) =>{
    setFormLoad(formType);
  }

  return (
    <div className='entry-page bg-info'>
      <div className='p-5 mb-4 bg-light rounded-3 shadow form-box'>
        {formLoad === 'login' && 
        <Login  
          handleOnChange = {handleOnChange}
          handleOnSubmit = {handleOnSubmit}
          formSwitcher = {formSwitcher}
          email={email}
          password={password}
        />}

        {formLoad === 'reset' && 
        <PasswordReset
          handleOnChange = {handleOnChange}
          handleOnResetSubmit = {handleOnResetSubmit}
          formSwitcher = {formSwitcher}
          email={email}
        />}
      </div>
    </div>
  )
}

export default Entry;