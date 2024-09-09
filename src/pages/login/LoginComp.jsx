import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const LoginComp = () => {
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const [error, setError] = useState (false)

    function onInputChange ({target}) {
        const {value, name} = target

        if (name === 'email') {
            setEmail(value)
        } else if(name === 'password') {
            setPassword(value)
        } 
    }

    function onSubmitHandler(event) {
        event.preventDefault()

       
        

        if (email === '' || password === '') {
            setError('Todos los campos son obligatorios')           
            alert('Todos los campos son obligatorios')
            return
        
        } else if (password.length < 6) {
            setError('El password debe tener al menos 6 caracteres')
            alert('El password debe tener al menos 6 caracteres')
            return 
       
        } else {
            alert('Has ingresado correctamente')
        }

        setEmail('')
        setPassword('')
        setError(false)

    }


  return (
<>
   <div> 
   
    <h1 style={{margin:'3rem', paddingLeft:'3rem', fontWeight:'bold'}}> Login</h1>
    <div style={{margin:'3rem', paddingLeft:'3rem'}}>
    {error && <h6 style={{ color: 'red' }}>{error}</h6>}
    </div>
    <Form style={{padding:'3rem', margin:'3rem'}} onSubmit={onSubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>


        <Form.Control 
        type="email" 
        placeholder="Enter email" 
        onChange={onInputChange}
        value={email}
        name='email'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password"
        placeholder="Password" 
        onChange={onInputChange}
        value={password}
        name='password'/>


      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button 
      variant="dark" 
      type="submit" 
      style={{width:'6rem'}}>

        Login
      </Button>
    </Form>
    </div>
    </>
  );
 
} 

export default LoginComp;


