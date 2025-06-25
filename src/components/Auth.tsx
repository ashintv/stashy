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
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { BACKEND_URL } from "@/config"
import { useLoading } from "@/state/store"




interface AuthPageI {
        isSignin: boolean

}

export function AuthPage(props: AuthPageI) {
        const [username, setUsername] = useState<String | null>(null)
        const [password, setPassword] = useState<String | null>(null)
        let auth = props.isSignin
        const loading = useLoading()
        const navigate = useNavigate()
        async function authFun(auth_info: boolean) {
                if (auth_info) {
                        loading.setLoading(true)
                        const response = await axios.post(BACKEND_URL + '/signin', {
                                username: username,
                                password: password
                        })
                        loading.setLoading(false)
                        localStorage.setItem('stashy_token', response.data.token)
                        navigate('/dashboard')


                }
                else {
                        loading.setLoading(true)
                        await axios.post(BACKEND_URL + '/signup', {
                                username: username,
                                password: password
                        })
                        loading.setLoading(false)
                        authFun(true)
                }
        }
        function handlePage() {
                if (auth) {
                        navigate('/signup')
                }
                else {
                        navigate('/signin')
                }
        }

        return (

                <Card className="w-full max-w-sm hover:border-ring hover:ring-ring/20 hover:ring-[6px]">
                        <CardHeader>
                                <CardTitle>{auth ? "Login to your account" : "Create a new account"}</CardTitle>
                                <CardDescription>
                                        {auth ? "Enter your email below to login to your account" : " Enter your email below to signup to your account"}

                                </CardDescription>
                                <CardAction>
                                        <Button variant="default" onClick={handlePage}>
                                                {auth ? "Sign Up" : "Sign in"}
                                        </Button>
                                </CardAction>
                        </CardHeader>
                        <CardContent>
                                <div>
                                        <div className="">
                                                <Label className="py-2">Username</Label>
                                                <Input className="" onChange={(e) => {
                                                        setUsername(e.target.value)
                                                        console.log(username)
                                                }}></Input>
                                        </div>
                                </div>
                                <div>
                                        <div className="">
                                                <Label className="py-2">Password</Label>
                                                <Input className="" onChange={(e) => {
                                                        setPassword(e.target.value)
                                                        console.log(password)
                                                }}></Input>
                                        </div>
                                </div>

                        </CardContent>
                        <CardFooter className="flex-col gap-2" onClick={() => {
                                authFun(props.isSignin)
                        }}>
                                <Button type="submit" className="w-full">
                                        {props.isSignin ? "Sigin" : "Signup"}
                                </Button>
                        </CardFooter>
                </Card>
        )
}
