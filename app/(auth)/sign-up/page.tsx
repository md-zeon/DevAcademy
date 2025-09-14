import SocialAuthForm from "@/components/forms/SocialAuthForm"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ROUTES from "@/constants/route"
import Link from "next/link"

const SignUpPage = () => {
    return (
        <main className="container mx-auto flex items-center justify-center min-h-[calc(100vh-80px)]">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Sign Up to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                    <CardAction>
                        <Button variant="link" asChild>
                            <Link href={ROUTES.SIGN_IN}>
                                Sign In
                            </Link>
                        </Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input id="password" type="password" required />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
                        Sign up
                    </Button>
                    <SocialAuthForm type="SIGN_UP" />
                </CardFooter>
            </Card>
        </main>
    )
}

export default SignUpPage;