
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Signin } from "./Signin";
import { useNavigate } from "react-router-dom";
export function Landing() {
        const words = [
                {
                        text: "Collect",
                },
                {
                        text: "now.",
                },
                {
                        text: "Explore",
                },
                {
                        text: "when",
                },
                {
                        text: "Ready.",
                        className: "text-red-500 dark:text-red-500",
                },
        ];
        const navigate = useNavigate()
        return (<>
                <div className="fixed h-screen w-screen flex flex-col items-center justify-center ">
                        <Signin />
                </div>

                <div className="r h-screen w-screen flex flex-col items-center justify-center bg-transparent backdrop-blur-2xl">
                        <p className="text-secondary bg-primary px-5 rounded dark:text-neutral-200 text-base  mb-10">
                                Quiet the chaos. Save smarter
                        </p>
                        <TypewriterEffect words={words} />
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
                                <button onClick={() => {
                                        navigate('/Signup')
                                }} className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                                        Start now
                                </button>
                                <button onClick={() => {
                                        navigate('/Signin')
                                }} className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                                        Login
                                </button>
                        </div>



                </div>



        </>
        );
}




