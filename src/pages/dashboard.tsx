
import { AddForm } from "@/components/Addform";
import { ContentCard } from "@/components/ContentCard";
import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { useConteForm } from "@/state/store";

import { useState } from "react";

export function Dashboard() {
        const [sidebar, setSidebar] = useState(true)
       const {visible , setVisible} = useConteForm()
        function hideSidebar() {
                setSidebar(x => !x)
        }
        return (
                <>

                        <div className="fixed h-screen w-screen flex  bg-primary">
                                <Button className="fixed m-2 border-2 border-secondary " onClick={hideSidebar}>O</Button>

                                <Sidebar isVisible={sidebar} />
                                <div className={`p-10 mt-15  scroll-auto overflow-x-scroll  flex flex-wrap justify-center gap-5 ${sidebar ? "w-8/10 " : " w-full"}`}>

                                        <ContentCard url="https://x.com/AI_Rohanislam/status/1937464192392683833" type="twitter" />
                                        <ContentCard url="https://youtu.be/7G3nBb9_MWs?feature=shared" type={"youtube"} />
                                        <ContentCard url="https://x.com/AI_Rohanislam/status/1937464192392683833" type="twitter" />
                                        <ContentCard url="https://x.com/AI_Rohanislam/status/1937464192392683833" type="twitter" />



                                        <ContentCard url="https://x.com/AI_Rohanislam/status/1937464192392683833" type="twitter" />
                                        <ContentCard url="https://youtu.be/7G3nBb9_MWs?feature=shared" type={"youtube"} />
                                        <ContentCard url="https://x.com/AI_Rohanislam/status/1937464192392683833" type="twitter" />
                                        <ContentCard url="https://x.com/AI_Rohanislam/status/1937464192392683833" type="twitter" />
                                        <ContentCard url="https://x.com/AI_Rohanislam/status/1937464192392683833" type="twitter" />
                                        <ContentCard url="https://youtu.be/7G3nBb9_MWs?feature=shared" type={"youtube"} />
                                        <ContentCard url="https://x.com/AI_Rohanislam/status/1937464192392683833" type="twitter" />
                                        <ContentCard url="https://x.com/AI_Rohanislam/status/1937464192392683833" type="twitter" />
                                        <ContentCard url="https://x.com/AI_Rohanislam/status/1937464192392683833" type="twitter" />
                                        <ContentCard url="https://youtu.be/7G3nBb9_MWs?feature=shared" type={"youtube"} />
                                        <ContentCard url="https://x.com/AI_Rohanislam/status/1937464192392683833" type="twitter" />
                                        <ContentCard url="https://x.com/AI_Rohanislam/status/1937464192392683833" type="twitter" />


                                </div>


                        </div>
                        <div className="fixed flex gap-5 top-0 right-5  m-5 ">
                                <Button variant={"secondary"} className="border-2 hover:scale-105" onClick={()=>{
                                        setVisible(true)
                                }} >Add Link</Button>
                                <Button variant={"default"} className="border-2 hover:scale-105">Share</Button>
                        </div>
                        {visible && <AddForm></AddForm>}
                        
                </>

        )
}