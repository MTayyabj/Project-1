import { useNavigate } from 'react-router-dom';
import './ResetPassword.css';
import { useState, useRef, useContext } from 'react';
import { AppContent } from '../../Context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function ResetPassword() {
    const { backendUrl } = useContext(AppContent);
    axios.defaults.withCredentials = true;

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [otp, setOtp] = useState('');
    const [isOtpSubmitted, setIsOtpSubmitted] = useState(false);

    const inputRefs = useRef([]);

    const handleInput = (e, index) => {
        if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handlePaste = (e) => {
        const paste = e.clipboardData.getData('text');
        const pasteArray = paste.split('');
        pasteArray.forEach((char, index) => {
            if (inputRefs.current[index]) {
                inputRefs.current[index].value = char;
            }
        });
    };

    const onSubmitEmail = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(backendUrl + 'api/auth/send-reset-otp', { email });
            data.success ? toast.success(data.message) : toast.error(data.message);
            if (data.success) setIsEmailSent(true);
        } catch (error) {
            toast.error(error.message);
        }
    };

    const onSubmitOTP = (e) => {
        e.preventDefault();
        const otpArray = inputRefs.current.map((el) => el.value);
        setOtp(otpArray.join(''));
        setIsOtpSubmitted(true);
    };

    const onSubmitPassword = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(backendUrl + 'api/auth/reset-password', { email, otp, newPassword });
            data.success ? toast.success(data.message) : toast.error(data.message);
            if (data.success) navigate('/login');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            {!isEmailSent && (
                <div className='Login'>
                <form className='Container' onSubmit={onSubmitEmail}>
                    <div className='Header'>
                    <h1>Reset Password</h1>
                    <p>Enter your registered email</p>
                    </div>
                    <div className='Input'>
                        <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className='submit-container'>
                    <button type="submit">Submit</button>
                    </div>
                </form>
                </div>
            )}

            {isEmailSent && !isOtpSubmitted && (
                <form onSubmit={onSubmitOTP}>
                    <h1>Reset Password OTP</h1>
                    <p>Enter the 6-digit code sent to your email</p>
                    <div onPaste={handlePaste}>
                        {Array(6).fill(0).map((_, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                required
                                ref={(el) => (inputRefs.current[index] = el)}
                                onChange={(e) => handleInput(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                            />
                        ))}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}

            {isOtpSubmitted && (
                <form onSubmit={onSubmitPassword}>
                    <h1>New Password</h1>
                    <p>Enter your new password</p>
                    <div>
                        <input type="password" placeholder="New password" value={newPassword} onChange={e => setNewPassword(e.target.value)} required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
        </>
    );
}
