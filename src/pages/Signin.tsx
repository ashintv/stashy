import { AuthPage } from "@/components/Auth";

export function Signin() {
        return (
                <div className="hidden md:grid md:grid-cols-2 md:w-screen md:h-screen   gap-1 ">
                        <div className="col-span-1 h-full bg-primary rounded-br-full flex ">
                                <div className="mt-20 ml-10 max-w-xl">
                                        <h1 className="scroll-m-20 text-center text-[100px] font-stretch-200% font-extrabold tracking-tight text-balance text-secondary">
                                                Stashy
                                        </h1>
                                        <h4 className="scroll-m-20 text-[20px] font-semibold tracking-tight bg-secondary rounded-br-full p-5 text-primary ">
                                                Your personal space for saving, organizing,
                                                 and sharing your most important links <br />
                                                 <i>— all in one place.</i>

                                        </h4>
                                </div>

                        </div>
                        <div className="bg-primary text-accent-foreground col-span-1 mt-10 rounded-tl-full place-content-center place-items-center rounded-t-2xl">
                                <AuthPage isSignin/>
                        </div>
                        
                </div>
        )
}