import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080"

export default {
    API_BASE_URL,
}