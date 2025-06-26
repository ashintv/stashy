
import {
        Card,
        CardAction,
        CardContent,
        CardDescription,
        CardHeader,
        CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import XPostEmbed from "./embeds/x"
import { YoutubeEmbed } from "./embeds/youtube"
import axios from "axios"
import { BACKEND_URL } from "@/config"
import { useState } from "react"
import { Loading } from "./loading"
import { useContent } from "@/hooks/useContent"

export function ContentCard(props: ContentCardI) {
        const { setRefresh } = useContent()
        const [loading, setLoading] = useState(false)
        async function deleteContent() {
                setLoading(true)
                await axios.delete(BACKEND_URL + '/content', {
                        data: {
                                _id: props._id
                        }
                        ,
                        headers: {
                                authorization: localStorage.getItem('stashy_token')
                        }
                })
                setRefresh()
                setLoading(false)
        }

        
                
       
        return (
                <>


                        <Card className={` h-fit w-fit mt-10  text-secondary shadow-secondary  group hover:scale-101  border-none shadow-xl/30  outline-2 bg-primary}`
                        } >
                                {loading && <Loading />}
                                <CardHeader className="transition duration-500 group-hover:scale-104  group-hover:translate-1  ">
                                        <CardTitle className="font-stretch-125%  "><h2 >{props.title}</h2></CardTitle>
                                        <CardDescription className="font-stretch-120%">{
                                                "Use the scroll-auto utility to revert to the default browser behavior for scrolling:"
                                        }</CardDescription>
                                        <CardAction><Button variant={"outline"} onClick={() => { deleteContent() }} className="bg-primary border-0">Delete</Button></CardAction>
                                </CardHeader>
                                <CardContent >

                                        <div className="flex justify-between items-baseline">
                                                <p className="mb-2 text-xs font-stretch-125% text-muted-foreground">10-12-2025</p>
                                        </div>

                                        {
                                                props.type == "twitter" && <XPostEmbed url={props.url} />
                                        }
                                        {
                                                props.type == "youtube" && <YoutubeEmbed url={props.url} />
                                        }



                                </CardContent>

                        </Card>

                </>
        )
}

interface ContentCardI {
        _id: string
        title: string
        url: string,
        type: 'youtube' | 'twitter'
}