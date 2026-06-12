import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contects/AuthProvider'

const Login = () => {
     const {login,loginwithGoogle} = useContext(AuthContext);
        const [error,setError] = useState(" ");
    
        const location = useLocation();
        const navigate= useNavigate();
        const from =location.state?.from?.pathname || "/";
    
        const handleLogin=(event) =>{
            event.preventDefault();
            const form = event.target;
            const email=form.email.value;
            const password=form.password.value;
            login(email,password).then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert("Login successfull")
                navigate(from,{replace:true})

                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
              });

            
            
    
    
           
        }
    
        //Log in
        const handleRegister= ()=>{
            loginwithGoogle().then((result)=>{
                const  user =result.user;
                alert("log in Successfull!");
                navigate(from,{replace:true})
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
                // ..
              });
    
        }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #f3e5ab, #e6d4a7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        {/* Header */}
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#3e2723",
            marginBottom: "1rem",
          }}
        >
          📚 Welcome to Book Heaven!
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "#5d4037",
            marginBottom: "2rem",
          }}
        >
          log in to explore our vast collection of books!
        </p>
       

        {/* Form */}
        <form onSubmit={ handleLogin}>
          {/* Full Name */}
          <div style={{ marginBottom: "1.5rem", position: "relative" }}>
            <input
              type="text"
              id="fullname"
              placeholder="Full Name"
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "1rem",
                color: "#3e2723",
                outline: "none",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "#6a4f4b")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "#ddd")
              }
            />
          </div>

          {/* Email Address */}
          <div style={{ marginBottom: "1.5rem", position: "relative" }}>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "1rem",
                color: "#3e2723",
                outline: "none",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "#6a4f4b")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "#ddd")
              }
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "1.5rem", position: "relative" }}>
            <input
              type="password"
              id="password"
              placeholder="Password"
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "1rem",
                color: "#3e2723",
                outline: "none",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "#6a4f4b")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "#ddd")
              }
            />
          </div>

          {/* Confirm Password */}
          <div style={{ marginBottom: "1.5rem", position: "relative" }}>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "1rem",
                color: "#3e2723",
                outline: "none",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "#6a4f4b")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "#ddd")
              }
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#3e2723",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "#5d4037")
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "#3e2723")
            }
          >
            log in
          </button>
 

        </form>

        {
        error ? <p className='text-red'></p>:""
        }

        {/* Footer */}
        <p
          style={{
            fontSize: "0.9rem",
            color: "#5d4037",
            marginTop: "1.5rem",
          }}
        >
          If you haven't an account?{" "}
          <Link
            to="/sign-up"
            style={{
              color: "#3e2723",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Sign up
          </Link>
        </p>
        <div className="d-flex flex-column align-items-center mt-3 gap-3 w-300">
            <button  onClick={handleRegister} className="btn btn-outline-primary text-black d-flex align-items-center"><img src="/Google-logo.png" alt="" style={{ width: "38px", height: "38px" }} />Login with Google</button>
        </div>
      </div>
    </div>
  )
}

export default Login
