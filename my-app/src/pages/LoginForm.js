import {useState} from 'react'
import axios from './api';
 

export const LoginForm = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.post('/login',{email,password});
            console.log('login successfull',response.data);
        }catch(err){
            setError('Login failed,please check your credentials');
            console.error(err);
        }
    }
  return (
    <div>
        <h2>Login</h2>
         <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input type='email'value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            </div>
            <div>     
            <label>Password:</label>
            <input type='password'value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            </div>
            <button type="submit">Login</button>

         </form>
    </div>
    
  )
}
export default LoginForm