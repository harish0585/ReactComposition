import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form';
import { useState } from 'react';

const initValue = {
  email: "",
  password: ""
}

function App() {
  const [formData, setFormData] = useState(initValue);
  const {email, password} = formData;
  const [data, setData] = useState([]);
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name] : value })
  }
   
  const onSubmit = (e) => {
    e.preventDefault();
    setData([...data, formData]);
    console.log(data);
    setFormData(initValue);
  }
  return (
   <Form onSubmit={onSubmit} >
    <input type="email" name="email" onChange={handleChange} value={email} placeholder='Enter Text'/>
    <input type="password" name="password" onChange={handleChange} value={password} placeholder='Enter password'/>
    <input type="submit" />
    {data.map((e) => (
      <>
      <div>{e.email}</div>
      <div>{e.password}</div>
      </>
    ))}
   </Form>
  );
}

export default App;
