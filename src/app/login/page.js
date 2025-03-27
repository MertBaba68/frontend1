"use client";

import LoginPageController from "@/app/controller-layer/LoginPageController";
import Navbar from "../view/components/navbar";

export default function Home() {
    return <>
    <Navbar></Navbar>
    <LoginPageController/>
    </>
}