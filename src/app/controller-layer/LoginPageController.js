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
    

    const handleLogin = async () => {
        const response = await login({emailAddress:email, password:password})

        if (response.token) {
            storeAuthToken(response.token);
        }

        router.push(`/categories/Agriculture`) //TODO: replace this with the homepage when this is created
    }

    return(
        <Login 
            password={password} setPassword={setPassword}
            email={email} setEmail={setEmail}
            login={handleLogin}
        />
    )
}

export default LoginPageController;