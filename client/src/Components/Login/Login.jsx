import { useState } from 'react';
import { useContext } from 'react';
import './Login.css';
import '../Hero/Hero.css'
import { Navigate, useNavigate } from 'react-router-dom';
import { AppContent } from '../../Context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
 
export default function Login() {

    const navigate = useNavigate() ;

    const {backendUrl ,setIsLoggedin} = useContext (AppContent);

    const [action, setAction] = useState('Sign up');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {getUserData} = useContext(AppContent);

    const handleSubmit = async (e) => {
        try {
            //PREVENT BROWSER FROM RELOADING
            e.preventDefault(); // <- you must get 'e' here
                console.log(backendUrl);
                
                 axios.defaults.withCredentials = true;
     
                //MAKING API CALL 
                if (action === 'Sign up') {
                    const { data } = await axios.post(backendUrl + 'api/auth/register', { name, email, password });
    
                    if (data.success) {
                        setIsLoggedin(true);
                        await getUserData(); // <- this is the key fix
                        navigate('/');
                    } 
                    else {
                        toast.error(data.message);
                    }
                }else{
                    const { data } = await axios.post(backendUrl + 'api/auth/login', { email, password });
    
                    if (data.success) {
                        setIsLoggedin(true);
                        await getUserData();
                        navigate('/');
                    } 
                    else {
                        toast.error(data.message);
                    }
                }
            // }
        } catch (error) {
            toast.error(error.message || "Something went wrong");
        }
    };
    

    return (
        <div className='Login'>
            <div className='Container'>

                <div className='Header'>
                    <h1>{action}</h1>
                </div>
    <form onSubmit={handleSubmit}>

    {action === 'Sign up' && (            
<div className='Input'>
    <label className='Label' htmlFor="name">Name</label>
    <input
        id="name"
        name="name"
        type="text"
        autoComplete="name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        required
    />
    {/* {errors.name && <small className="error">{errors.name}</small>} */}
</div> )} 

<div className='Input'>
    <label className='Label' htmlFor="email">E-mail</label>
    <input
        id="email"
        name="email"
        type="email"
        autoComplete="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
    />
    {/* {errors.email && <small className="error">{errors.email}</small>} */}
</div>

<div className='Input'>
    <label className='Label' htmlFor="password">Password</label>
    <input
        id="password"
        name="password"
        type="password"
        autoComplete={action === 'Sign up' ? 'new-password' : 'current-password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        required
    />
    {/* {errors.password && <small className="error">{errors.password}</small>} */}
</div>

                <div className='submit-container11'>
                <button className='button1'>
                    {action}
                </button>
                </div>
                
                {/* {action === 'Login' && (
                    <div className='end-container'>
                        <p>Forgot Password?</p>
                        <span onClick={()=>navigate('/reset-password')} >Click here</span>
                    </div>
                )} */}
                </form>


                <div className='end-container'>
                {action === 'Sign up' ? (
                    <><p>Already have an account? {''}</p><span onClick={() => setAction('Login')}>Login here</span></>
                ) : (
                    <><p>Don't have an account? {''}</p><span onClick={() => setAction('Sign up')}>Sign up here</span></>
                ) }
                </div>

            </div>
        </div>
    );
}
 