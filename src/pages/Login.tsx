import { useNavigate } from "react-router-dom";
import logoImage from "../assets/logo.png"

function Login() {
  const navigate = useNavigate();

  function handleLogin() {

    navigate("/home");
  }

  return (
    <>
      <img src={logoImage} alt="teste" />

      <div>
        <input type="text" />
        <input type="text" />

        <button onClick={handleLogin}>Login</button>
      </div>

    </>
  )
}

export default Login;