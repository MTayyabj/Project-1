import React, { useContext, useEffect } from "react";
import { AppContent } from "../../Context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import '../Login/Login.css'
import './EmailVerify.css'
const EmailVerify = () => {
  const inputRefs = React.useRef([]);

  const { backendUrl, isLoggedin, userData, getUserData } = useContext(AppContent);

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("");
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const otpArray = inputRefs.current.map((el) => el.value);
      const otp = otpArray.join("");

      const { data } = await axios.post(backendUrl + "api/auth/verify-account", { otp });
      if (data.success) {
        toast.success(data.message);
        getUserData();
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
 
  useEffect(() => {
    if (isLoggedin && userData && userData.isAccountVerified) {
      navigate("/");
    }
  }, [isLoggedin, userData, navigate]);

  return (
    <div className="Login">
      <form className="Container" onSubmit={onSubmitHandler}>
        
        <div className='Header'>
        <h1>Email Verification</h1>
        </div>

        <div className="end-container77">
        <p>Enter the 6-digit code sent to your email:</p>
        </div>

        <div className="OTP" onPaste={handlePaste}>
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
        <div className="submit-container11">
        <button className="button1" type="submit">Verify Email</button>
        </div>
      </form>
    </div>
  );
};

export default EmailVerify;
