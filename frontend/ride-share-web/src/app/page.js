'use-client'
import Image from "next/image";
import LoginComponent from "./components/Login";
import { Paper } from "@mui/material";
import "./styles/login.css"

{/* JS page where everything starts */}

const Login = function() {
  return (
    <div>
      <Paper className="paper-margins" children={<LoginComponent />} elevation={5} />      
    </div>
  )
}

export default Login;