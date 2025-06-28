
import ReactMarkdown from 'react-markdown';

export function ChatCardReply({content}:{
        content:string
} ) {
        return (

             <div className="w-full my-5 ">
                   <div className="w-fit   bg-secondary flex rounded m-5">
                        <div className="bg-primary min-w-3 rounded-tr-full">

                        </div>
                        <div className="bg-secondary ml-2 px-5 max-w-2xl rounded p-5">
                                <ReactMarkdown>
                                {
                                        content
                                }
                                </ReactMarkdown>

                        </div>
                </div>
             </div>
        )
}


export function ChatCardSend({content}:{
        content:string
} ) {
        return (

              <div className="w-full flex justify-end text-secondary my-5">
                   <div className="w-fit  border-t border-secondary  flex rounded m-5">
                        <div className="bg-accent-foreground   px-5 max-w-2xl border border-r-0   border-t-0 border-secondary rounded">
                                {
                                        content
                                }
                        </div>
                         <div className="bg-primary   min-w-3  border border-b-0 border-r-0 border-secondary rounded-tl-full">

                        </div>
                </div>
             </div>
        )
}
