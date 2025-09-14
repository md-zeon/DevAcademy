"use client"
import React from 'react'
import { signIn } from 'next-auth/react'
import ROUTES from '@/constants/route'
import { Button } from '../ui/button'

const SocialAuthForm = ({ type }: { type: "SIGN_IN" | "SIGN_UP" }) => {
    const buttonText = type === "SIGN_IN" ? "Login" : "Sign Up";
    return (
        <>
            <Button variant="outline" className="w-full" onClick={() => signIn("google", { redirectTo: ROUTES.HOME })}>
                {buttonText} with Google
            </Button>
            <Button variant="outline" className="w-full" onClick={() => signIn("github", { redirectTo: ROUTES.HOME })}>
                {buttonText} with GitHub
            </Button>
        </>
    )
}

export default SocialAuthForm