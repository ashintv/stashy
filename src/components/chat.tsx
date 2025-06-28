import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea"
import { ChatCardReply, ChatCardSend } from "./chatcard";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { CloseIcon } from "./icons/close";
import { useChatbot } from "@/state/store";
import { RAG_URl } from "@/config";

interface ChatsInterface {
        chat: string,
        author: string
}
export function Chatbox() {
        const [chats, setChats] = useState<ChatsInterface[]>([])
        const bottomRef = useRef<HTMLDivElement>(null);
        const {setChatbot} = useChatbot()
        const [query, setQuery] = useState("")
        async function QueryBot() {
                setChats(chats=>[...chats, {
                        chat: query,
                        author: "user"
                }])
                console.log(chats)
                const response = await axios.post(RAG_URl+'/query', {
                        query: query
                }, {
                        headers: {
                                authorization: localStorage.getItem('stashy_token')
                        }
                }
                )
                setChats(chats=>[...chats, {
                        chat: response.data.answer.kwargs.content,
                        author: "bot"
                }])
                console.log(chats)
        }
        useEffect(() => {
                bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        }, [chats]);

        return (
                <div className="fixed bg-transparent h-screen w-screen">
                        <div className="backdrop-blur-sm  w-full h-full flex justify-center items-center ">
                                <div className="bg-primary h-4/5 w-4/5  rounded-2xl shadow-xl/70 shadow-secondary  relative">
                                       <Button onClick={()=>{
                                                setChatbot(false)
                                       }} className="absolute right-0
                                       hover:cursor-pointer text-muted-foreground hover:scale-110
                                       bg-transparent hover:text-secondary
                                       "><CloseIcon/></Button>
                                        <div className="flex flex-col h-5/6">
                                                <ScrollArea className="flex-1 m-5 overflow-y-auto">
                                                        <div>
                                                                {chats.map((c, i) =>
                                                                        c.author === 'user'
                                                                                ? <ChatCardSend key={i} content={c.chat} />
                                                                                : <ChatCardReply key={i} content={c.chat} />
                                                                )}
                                                        </div>
                                                        <div ref={bottomRef} />
                                                </ScrollArea>
                                        </div>

                                        <div className="absolute bottom-1 w-full p-5">
                                                <div className="bg-primary flex gap-2 border border-muted-foreground rounded-xl relative py-3 ">


                                                        <Textarea value={query} className="text-secondary resize-none w-full border-0 "
                                                                onChange={(e) => {
                                                                        setQuery(e.target.value)
                                                                }}
                                                        />

                                                        <Button
                                                                onClick={() => {
                                                                        setQuery('')
                                                                        QueryBot()
                                                                }}
                                                                variant={"secondary"} className=" absolute bottom-2 right-1 px-10">Send</Button>


                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}