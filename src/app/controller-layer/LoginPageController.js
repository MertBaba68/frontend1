"use client";

import Login from "@/app/view/components/Login";
import { useState } from "react";
import {login} from "@/app/service-layer/LoginService";
import { storeAuthToken } from "../utils/auth";
import { useRouter } from "next/navigation";

const LoginPageController = () => {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [incorrect, setIncorrect] = useState(false);
    
    const handleLogin = async () => {
        try {
            const response = await login({emailAddress:email, password:password})
            storeAuthToken(response.token);
            router.push(`/categories/Agriculture`) //TODO: replace this with the homepage when this is created
        } catch (error) {
            console.log(error)
            setIncorrect(true)
        }
    }

    const handlePasswordChange = (password) => {
        setIncorrect(false)
        setPassword(password)
    }

    const handleEmailChange = (email) => {
        setIncorrect(false)
        setEmail(email)
    }

    return(
        <Login 
            password={password} setPassword={handlePasswordChange}
            email={email} setEmail={handleEmailChange}
            incorrect={incorrect}
            login={handleLogin}
        />
    )
}

export default LoginPageController;