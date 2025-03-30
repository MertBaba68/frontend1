"use client";

import LoginPage from "@/app/view/components/LoginPage";
import { useState, useEffect } from "react";
import { login } from "@/app/service-layer/LoginService";
import { authToken, storeAuthToken } from "../utils/auth";
import { useRouter } from "next/navigation";

const HOMEPAGE_ROUTE = `/categories/Agriculture` //TODO: replace this with the homepage when this is created

const LoginPageController = () => {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [incorrect, setIncorrect] = useState(false);

    useEffect(() => {
        const auth = authToken();
        if (auth) {
            router.push(HOMEPAGE_ROUTE);
        }
    }, [router]);
    
    const handleLogin = async () => {
        try {
            const response = await login({emailAddress:email, password:password})
            storeAuthToken(response.token);
            router.push(HOMEPAGE_ROUTE) 
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
        <LoginPage 
            password={password} setPassword={handlePasswordChange}
            email={email} setEmail={handleEmailChange}
            incorrect={incorrect}
            login={handleLogin}
        />
    )
}

export default LoginPageController;