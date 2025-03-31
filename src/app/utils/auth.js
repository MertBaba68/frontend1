"use client";

export const storeAuthToken = (authToken) => {
    sessionStorage.setItem("auth",authToken);
}

export const authToken = () => {
    return sessionStorage.getItem("auth");
}

export const removeAuthToken = () => {
    sessionStorage.removeItem("auth");
}