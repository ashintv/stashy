
import { AddForm } from "@/components/Addform";
import { Chatbox } from "@/components/chat";
import { ContentCard } from "@/components/ContentCard";
import { Chatbot } from "@/components/icons/chatbot";
import { SidebarIcon } from "@/components/icons/sidebar";
import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { useContent } from "@/hooks/useContent";
import { useChatbot, useConteForm, useSidebar } from "@/state/store";
import { useEffect, useState } from "react";

export function Dashboard() {
        const [sidebar, setSidebar] = useState(true)
        const { chatbot, setChatbot } = useChatbot()
        const { visible, setVisible } = useConteForm()
        function hideSidebar() {
                setSidebar(x => !x)
        }
        const { contents, setRefresh } = useContent()
        const { selected } = useSidebar()
        let [contentsFilterd, setContentFilterd] = useState(contents)

        useEffect(() => {
                //@ts-ignore
                const filtered = contents.filter((x) => x.Type === selected);
                setContentFilterd(filtered);
        }, [selected, contents]);
        useEffect(() => {
                setRefresh()
        }, [visible])
        return (
                <>

                        <div className="fixed h-screen w-screen flex  bg-primary">

                                <Sidebar isVisible={sidebar} />
                                <div className={`p-10 mt-15  scroll-auto overflow-x-scroll  flex flex-wrap justify-center gap-5 ${sidebar ? " md:w-8/10 " : "md:w-full"}`}>

                                        {

                                                contentsFilterd.map(

                                                        (x) => {
                                                                //@ts-ignore

                                                                //@ts-ignore
                                                                return <ContentCard key={x._id} _id={x._id} title={x.title} url={x.link} type={x.Type} />;


                                                        })
                                        }

                                </div>


                        </div>
                        <div className="fixed flex gap-5 top-0 right-5  m-5 ">
                                <Button variant={"secondary"} className="border-2 hover:scale-105" onClick={() => {
                                        setVisible(true)
                                }} >Add Link</Button>
                                <Button variant={"default"} className="border-2 hover:scale-105">Share</Button>
                        </div>
                        {visible && <AddForm></AddForm>}
                        <Button className="fixed m-2 hover:scale-110 text-muted-foreground hover:shadow-2xl hover:text-secondary border-secondary border-0 " onClick={hideSidebar}><SidebarIcon /></Button>
                        <Button className="fixed m-2 hover:scale-110 text-muted-foreground hover:shadow-2xl hover:text-secondary bottom-5 right-5 border-secondary border-0 " onClick={() => {
                                setChatbot(true)
                        }}><Chatbot /></Button>
                        {chatbot && <Chatbox />}




                </>

        )
}