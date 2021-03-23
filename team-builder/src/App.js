import React, { useState } from 'react';
import MemberForm from './MemberForm';
import Member from './Member';
import './App.css';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
  key: ''
}

const initialMembers = [
  {name: 'Cynthia', email: 'SinnohChamp@gmail.com', role: 'Pokemon Champion', key: 'garchompAce'},
  {name: 'Steven', email: 'HoennChamp@gmail.com', role: 'Pokemon Champion', key: 'metagrossAce'}
]

export default function App() {
  const [members, setMembers] = useState(initialMembers);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    });
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
      key: Math.random()
    };
    if (!newMember.name || !newMember.email || !newMember.role)
    return;
    setMembers([...members, newMember]);
    setFormValues(initialFormValues);
  }

  return (
    <div className='container'>
      <h1>Form App</h1>
      <MemberForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {members.map(member => {
        return (
          <Member key={member.key} details={member} />
        )
      })}
    </div>
  )
}
