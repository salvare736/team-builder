import React from 'react';

export default function MemberForm(props) {
  const { values, update, submit } = props

  const onChange = evt => {
    const { name, value } = evt.target;
    update(name, value);
  }
  
  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }
  
  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label>Name
          <input
            type='text'
            name='name'
            value={values.name}
            onChange={onChange}
            placeholder='type your name'
            maxLength='30'
          />
        </label>

        <label>Email
          <input
            type='email'
            name='email'
            value={values.email}
            onChange={onChange}
            placeholder='type your email'
            maxLength='40'
          />
        </label>

        <label>Role
          <select name='role' value={values.role} onChange={onChange}>
            <option value=''>-------select role-------</option>
            <option value='Backend Developer'>Backend Developer</option>
            <option value='Frontend Developer'>Frontend Developer</option>
            <option value='Designer'>Designer</option>
            <option value='Pokemon Champion'>Pokemon Champion</option>
          </select>
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}
