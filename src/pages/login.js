import React from "react";
import {useState} from "react";
import apiService from "../service/api.service";

function Login(props) {
  const [loading, setLoading] = useState(false);
  const email = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);

  const handleLogin = () => {
    const data = {email: email.value, password: password.value};
    apiService
      .login(data)
      .then((response) => {
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("role", response.data.data.role);
        if (response.data.data.role === "manager") {
          props.history.push("/ManagerDashboard");
        } else {
          props.history.push("/InventoryDashboard");
        }
      })
      .catch((error) => {
        alert(`error : ${error} `);
        setTimeout(() => {
          window.location.reload();
        }, 500);
      });
  };

  return (
    <div>
      <div style={{marginTop: 100}}>
        <h2 style={{marginBottom: 100}}>Welcome to Task Management WebApp</h2>
        <div>
          Email
          <br />
          <input
            type="text"
            {...email}
            autoComplete="new-password"
            style={{
              borderRadius: 5,
            }}
          />
        </div>
        <div style={{marginTop: 10}}>
          Password
          <br />
          <input
            type="password"
            {...password}
            autoComplete="new-password"
            style={{
              borderRadius: 5,
            }}
          />
        </div>
        {error && (
          <>
            <small style={{color: "red"}}>{error}</small>
            <br />
          </>
        )}
        <br />
        <input
          className="btn-dark "
          style={{
            paddingLeft: 50,
            paddingRight: 50,
            paddingTop: 5,
            paddingBottom: 5,
            borderRadius: 10,
          }}
          type="button"
          value={loading ? "Loading..." : "Login"}
          onClick={handleLogin}
          disabled={loading}
        />
        <br />
      </div>
    </div>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Login;
