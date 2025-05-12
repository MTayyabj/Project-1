import "./Navbar.css";
import Logo from "../../assets/123.jpeg";
import Facebook from "../../assets/facebook_Dark.png";
import Instagram from "../../assets/instagram_dark.png";
import Linkedin from "../../assets/linkedin_dark.png";
import Youtube from "../../assets/youtube_dark.png";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AppContent } from "../../Context/AppContext";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from "react";

export default function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const { userData, backendUrl, setUserData, setIsLoggedin } = useContext(AppContent);
    const sendVerificationOtp = async () => {
        try {
            axios.defaults.withCredentials = true;
            const { data } = await axios.post(backendUrl + 'api/auth/send-verify-otp');
            if (data.success) {
                navigate('/email-verify');
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const logout = async () => {
        try {
            axios.defaults.withCredentials = true;
            const { data } = await axios.post(backendUrl + 'api/auth/logout');
            if (data.success) {
                setIsLoggedin(false);
                setUserData(false);
                navigate('/');
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
      
    // <nav className="navbar1">
    //     {/* <div className="icons">
    //         <ul>
    //             <li><img src={Instagram} alt="Instagram" /></li>
    //             <li><img src={Facebook} alt="Facebook" /></li>
    //             <li><img src={Linkedin} alt="LinkedIn" /></li>
    //         </ul>
    //     </div> */}

    //     <div className="menu">
    //             <ul>
    //                 <li><Link to="/">Home</Link></li>
    //                 <li><Link to="/about">About</Link></li>
    //                 <li><Link to="/contact">Contact</Link></li>
    //                 <li><Link to="/policy">Policy</Link></li>
    //             </ul>
    //     </div>

    //     <div className="center-content">
    //         <div className="logo">
    //             <img src={Logo} alt="Logo" />
    //         </div>
 
    //         <div>
    //         {userData && userData.name ? (
    //                 <div className="user-actions">
    //                     <span>{userData.name[0].toUpperCase()}</span>
    //                     <div className="dropdown">
    //                         <ul>
    //                             {!userData.isAccountVerified && (
    //                                 <li onClick={sendVerificationOtp}>Verify Email</li>
    //                             )}
    //                             <li onClick={logout}>Logout</li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             ) : (
    //                 <button onClick={() => navigate('/login')}>Login</button>
    //         )}
    //         </div>
    //     </div>

    //     {/* <div className="icons">
    //         <ul>
    //             <li><img src={Youtube} alt="YouTube" /></li>
    //             <li><img src={Linkedin} alt="LinkedIn" /></li>
    //             <li><img src={Facebook} alt="Facebook" /></li>
    //         </ul>
    //     </div> */}
    // </nav>
<nav className="navbar1">
  <div className="menu">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/policy">Policy</Link></li>
    </ul>
  </div>

  <div className="logo">
    <img src={Logo} alt="Logo" />
  </div>

  <div className="right-section">
    {userData && userData.name ? (
      <div className="user-actions" onClick={() => setShowDropdown(prev => !prev)}>
        <span>{userData.name[0].toUpperCase()}</span>
        {showDropdown && (
          <div className="dropdown">
            <ul>
              {!userData.isAccountVerified && (
                <li onClick={sendVerificationOtp}>Verify Email</li>
              )}
              <li onClick={logout}>Logout</li>
            </ul>
          </div>
        )}
      </div>
    ) : (
      <button className='button2'onClick={() => navigate('/login')}>Login</button>
    )}
  </div>
</nav>

    );


}
