export { default } from "next-auth/middleware";

//Define protected paths
export const config = {
    matcher: ["/profile","/dashboard"]
}