// // src/components/LoginPage.tsx
// import React, { useState } from 'react';

// const Login: React.FC = () => {
//   const [showSignUp, setShowSignUp] = useState(false);

//   return (
//     <div className="flex min-h-screen">
//       {/* Logo Section */}
//       <div className="w-2/5 bg-blue flex justify-center items-center">
//         <div className="text-white text-4xl font-bold">Logo</div>
//       </div>

//       {/* Form Section */}
//       <div className="w-3/5 flex justify-center items-center">
//         {!showSignUp ? (
//           <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
//             <h2 className="text-2xl font-bold mb-4">Login</h2>
//             <form>
//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-gray-700">Email</label>
//                 <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded mt-1" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="password" className="block text-gray-700">Password</label>
//                 <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
//               </div>
//               <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded mt-4">Login</button>
//             </form>
//             <div className="mt-4 text-center">
//               <button onClick={() => setShowSignUp(true)} className="text-blue-500">Don't have an account? Sign up</button>
//             </div>
//           </div>
//         ) : (
//           <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg bg-opacity-75">
//             <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
//             <form>
//               <div className="mb-4">
//                 <label htmlFor="name" className="block text-gray-700">Name</label>
//                 <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded mt-1" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-gray-700">Email</label>
//                 <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded mt-1" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="password" className="block text-gray-700">Password</label>
//                 <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
//               </div>
//               <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded mt-4">Sign Up</button>
//             </form>
//             <div className="mt-4 text-center">
//               <button onClick={() => setShowSignUp(false)} className="text-blue-500">Already have an account? Login</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import Logo from "../assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
// import axios from "axios";
import { FaPowerOff } from "react-icons/fa";

interface LoginData {
  name: string;
  password: string;
}

interface SignupData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: string;
}

const Login: React.FC = () => {
  const [, setActiveCard] = useState<"login" | "signup">("login");
  const [showSignup, setShowSignup] = useState(false);
  const [loginData, setLoginData] = useState<LoginData>({
    name: "",
    password: "",
  });
  const [signupData, setSignupData] = useState<SignupData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  // const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/auth/login",
  //       loginData,
  //       { withCredentials: true }
  //     );
  //     console.log("Login response:", response.data);
  //     if (response.data.access_token) {
  //       localStorage.setItem("token", response.data.access_token);
  //       navigate("/bridge");
  //     } else {
  //       console.error("Login response didn't contain a token:", response.data);
  //       alert("Login failed: Unexpected response from server");
  //     }
  //   } catch (error: any) {
  //     console.error("Login error:", error);
  //     if (error.response) {
  //       console.error("Error response:", error.response.data);
  //       alert(`Login failed: ${error.response.data.message || "An unexpected error occurred"}`);
  //     } else if (error.request) {
  //       console.error("No response received:", error.request);
  //       alert("Login failed: No response from server. Please try again.");
  //     } else {
  //       console.error("Error setting up request:", error.message);
  //       alert("Login failed: An unexpected error occurred. Please try again.");
  //     }
  //   }
  // };

  // const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (signupData.password !== signupData.confirmPassword) {
  //     alert("Passwords do not match");
  //     return;
  //   }
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/auth/register",
  //       signupData
  //     );
  //     console.log("Signup response:", response);
  //     if (response.data.token) {
  //       localStorage.setItem("token", response.data.token);
  //       navigate("/bridge");
  //     } else {
  //       console.error("Signup response didn't contain a token:", response.data);
  //       alert("Signup successful, but login failed. Please try logging in.");
  //     }
  //   } catch (error: any) {
  //     console.error("Signup error:", error);
  //     if (error.response) {
  //       console.error("Error response:", error.response.data);
  //       alert(`Signup failed: ${error.response.data.message || "An unexpected error occurred"}`);
  //     } else if (error.request) {
  //       console.error("No response received:", error.request);
  //       alert("Signup failed: No response from server. Please try again.");
  //     } else {
  //       console.error("Error setting up request:", error.message);
  //       alert("Signup failed: An unexpected error occurred. Please try again.");
  //     }
  //   }
  // };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    setData: React.Dispatch<React.SetStateAction<LoginData>>
  ) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const selectCard = (card: "login" | "signup") => {
    setActiveCard(card);
    if (card === "signup") {
      setShowSignup(true);
    }
  };

  const closeSignup = () => {
    setShowSignup(false);
  };

  return (
    <div className="login-container" data-aos="slide-left">
      <div className="left-section1">
        <img
          src={Logo}
          alt="logo"
          style={{ maxWidth: "600px", height: "100px" }}
        />
      </div>
      <div className="right-section1" data-aos="fade-up">
        <div className="form-holder">
          <div className="form-container">
            <h2>Log In</h2>
            {/* onSubmit={handleLogin} */}
            <form>
              <div className="input-container">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={loginData.name}
                  onChange={(e) => handleChange(e, setLoginData)}
                  required
                />
              </div>
              <div className="input-container">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={(e) => handleChange(e, setLoginData)}
                  required
                />
              </div>
              <button type="submit">Log In</button>
            </form>
          </div>
          <div className="contact_line">
            <div className="line"></div>
            <span className="section_subtitle">Or</span>
            <div className="line2"></div>
          </div>
          <div className="acc-section">
            <h4>Don't have an account? Join us today!</h4>
            <button
              className="option-button"
              onClick={() => selectCard("signup")}
            >
              Create an Account
            </button>
          </div>
        </div>
      </div>
      {showSignup && (
        <div className="signup-modal" data-aos="fade-in">
          <div className="signup-content">
            <button className="close-button" onClick={closeSignup}>
              <FaPowerOff size={28} />
            </button>
            <h2>Sign Up</h2>
            {/* onSubmit={handleSignup} */}
            <form>
              <div className="input-container">
                <label htmlFor="new-username">Username</label>
                <input
                  type="text"
                  id="new-username"
                  name="username"
                  value={signupData.name}
                  onChange={(e) =>
                    handleChange(
                      e,
                      setSignupData as React.Dispatch<
                        React.SetStateAction<LoginData | SignupData>
                      >
                    )
                  }
                  required
                />
              </div>
              <div className="input-container">
                <label htmlFor="new-email">Email</label>
                <input
                  type="email"
                  id="new-email"
                  name="email"
                  value={signupData.email}
                  onChange={(e) =>
                    handleChange(
                      e,
                      setSignupData as React.Dispatch<
                        React.SetStateAction<LoginData | SignupData>
                      >
                    )
                  }
                  required
                />
              </div>
              {/* <div className="input-container">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={signupData.gender}
                  onChange={(e) =>
                    handleChange(
                      e,
                      setSignupData as React.Dispatch<
                        React.SetStateAction<LoginData | SignupData>
                      >
                    )
                  }
                  required
                >
                  <option value="" disabled>
                    Select your gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div> */}
              <div className="input-container">
                <label htmlFor="userType">User Type</label>
                <select
                  id="userType"
                  name="userType"
                  value={signupData.userType}
                  onChange={(e) =>
                    handleChange(
                      e,
                      setSignupData as React.Dispatch<
                        React.SetStateAction<LoginData | SignupData>
                      >
                    )
                  }
                  required
                >
                  <option value="" disabled>
                    Select your user type
                  </option>
                  <option value="donor">Donor</option>
                  <option value="charity">Charity Organization</option>
                </select>
              </div>

              <div className="input-container">
                <label htmlFor="new-password">Password</label>
                <input
                  type="password"
                  id="new-password"
                  name="password"
                  value={signupData.password}
                  onChange={(e) =>
                    handleChange(
                      e,
                      setSignupData as React.Dispatch<
                        React.SetStateAction<LoginData | SignupData>
                      >
                    )
                  }
                  required
                />
              </div>
              <div className="input-container">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirmPassword"
                  value={signupData.confirmPassword}
                  onChange={(e) =>
                    handleChange(
                      e,
                      setSignupData as React.Dispatch<
                        React.SetStateAction<LoginData | SignupData>
                      >
                    )
                  }
                  required
                />
              </div>
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
