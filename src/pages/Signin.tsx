import { AuthPage } from "@/components/Auth";

export function Signin() {
        return (
                <div className=" md:grid  md:grid-cols-2 w-screen h-full   gap-1 ">
                        <div className="md:col-span-1 h-auto md:h-screen bg-primary rounded-br-full  flex ">
                                <div className="py-40 p-5 md:py-80  max-w-xl place-items-start">
                                        <h1 className="scroll-m-20  text-center text-6xl  md:text-[100px] font-stretch-200% font-extrabold tracking-tight text-balance text-secondary">
                                                Stashy
                                        </h1>
                                        <h4 className="md:scroll-m-20 text-sm md:text-[20px] border-2 font-semibold tracking-tight bg-secondary rounded-tr-full rounded-bl-full px-10  text-primary place-items-start">
                                                Your personal space for saving, organizing,
                                                and sharing your most important links <br />


                                        </h4>
                                </div>


                        </div>
                        <div className="bg-primary fixed bottom-0 right-0 h-1/2 w-full md:h-full md:w-1/2  text-accent-foreground  md:col-span-1  rounded-tl-full flex place-content-center place-items-center  ">


                                <div className="w-full flex justify-center -translate-y-30 md:-translate-y-0">
                                        <AuthPage isSignin />
                                </div>


                        </div>

                </div>
        )
}