'use-client'
import Image from "next/image";
import RegisterComponent from "../../components/Register";
import { Paper } from "@mui/material";
import "../../styles/login.css"

{/* JS page where everything starts */}

const Register = function() {
  return (
    <div>
      <Paper className="register-paper-margins" children={<RegisterComponent />} elevation={5} />      
    </div>
  )
}

export default Register;