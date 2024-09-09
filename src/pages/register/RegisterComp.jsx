import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const RegisterComp = () => {
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const [password2, setPassword2] = useState ('')
    const [error, setError] = useState (false)

    function onInputChange ({target}) {
        const {value, name} = target

        if (name === 'email') {
            setEmail(value)
        } else if(name === 'password') {
            setPassword(value)
        } else if(name === 'password2') {
            setPassword2(value)
        }
    }

    function onSubmitHandler(event) {
        event.preventDefault()

       
        

        if (email === '' || password === '' || password2 === '') {
            setError('Todos los campos son obligatorios')           
            alert('Todos los campos son obligatorios')
            return
        
        } else if (password.length < 6 || password2.length < 6) {
            setError('El password debe tener al menos 6 caracteres')
            alert('El password debe tener al menos 6 caracteres')
            return 
        } else if(password !== password2)  {
            setError('las contraseñas no coinciden')
            alert('las contraseñas no coinciden')
       
        } else {
            alert('Te has registrado correctamente')
        }

        setEmail('') 
        setPassword('')
        setPassword2('')
        setError(false)

    }


  return (
<>
   <div> 
   
    <h1 style={{margin:'3rem', paddingLeft:'3rem', fontWeight:'bold'}}> Register</h1>
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

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Repita el password</Form.Label>
        <Form.Control 
        type="password"
        placeholder="Repita el password" 
        onChange={onInputChange}
        value={password2}
        name='password2'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button 
      variant="dark" 
      type="submit" 
      style={{width:'6rem'}}>

        Register
      </Button>
    </Form>
    </div>
    </>
  );
 
} 

export default RegisterComp;


