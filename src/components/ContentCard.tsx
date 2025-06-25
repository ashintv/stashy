
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
export function ContentCard(props:ContentCardI) {
        return (

                <Card className=" h-fit w-fit mt-10 bg-primary text-secondary shadow-secondary  group hover:scale-101  border-none shadow-xl/30  outline-2  
                        " >
                        <CardHeader className="transition duration-500 group-hover:scale-104  group-hover:translate-1  ">
                                <CardTitle className="font-stretch-125%  "><h2 >{"Youtube video"}</h2></CardTitle>
                                <CardDescription className="font-stretch-120%">{
                                        "Use the scroll-auto utility to revert to the default browser behavior for scrolling:"
                                }</CardDescription>
                                <CardAction><Button variant={"outline"} className="bg-primary border-0">Delete</Button></CardAction>
                        </CardHeader>
                        <CardContent >

                                <div className="flex justify-between items-baseline">
                                        <p className="mb-2 text-xs font-stretch-125% text-muted-foreground">10-12-2025</p>
                                </div>

                              {
                                props.type=="twitter" && <XPostEmbed url={props.url}/>
                              }
                               {
                                props.type=="youtube" && <YoutubeEmbed url={props.url}/>
                              }



                        </CardContent>

                </Card>
        )
}

interface ContentCardI{
        url:string,
        type:'youtube' | 'twitter'
}