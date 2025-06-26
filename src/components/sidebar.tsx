import { useSidebar } from "@/state/store"

export function Sidebar({ isVisible }: { isVisible: boolean }) {
        const { selected, setSelected } = useSidebar()
        return (
                isVisible && <div className="transition-all fixed bottom-0 duration-200 bg-primary border-secondary border-r-2  rounded-br-[100px] rounded-tr-[100px] w-full scroll-auto overflow-x-scroll md:w-72 md:h-full
                grid grid-rows-10 overflow-hidden outline-2 hover:border-ring hover:ring-ring/20 hover:ring-[6px]
                shadow-xl  shadow-secondary hover:shadow-2xl group
                  ">
                        <div className="place-items-center place-content-center row-span-2">

                                <h1 className="hidden md:block scroll-m-20 text-center text-[50px] font-stretch-200% font-extrabold tracking-tight text-balance text-secondary group-hover:-translate-0.5  ">
                                        Stashy
                                </h1>
                        </div>
                        <div className="flex md:flex-col ml-4 row-span-5 group:">
                                <Label selected={selected == 'youtube'} name={"Youtube"} onClick={() => {
                                        setSelected('youtube')
                                }} />
                                <Label selected={selected == 'tweet'} name={"Tweet / X"} onClick={() => {
                                         setSelected('twitter')
                                }} />
                                <Label selected={selected == 'thread'} name={"Thread"} onClick={() => {
                                        setSelected('thread')
                                }} />



                        </div>

                </div>
        )
}



export function Label(props: LabelI) {
        return (
                <div onClick={props.onClick} className="flex justify-between">
                        <h2 className={`scroll-m-20 w-full  py-1 md:py-2 text-[10px] md:text-[15px] px-5 md:pl-10 rounded-l-full  font-semibold font-stretch-150% tracking-tight first:mt-0 hover:text-secondary  text-shadow-2xl text-shadow-secondary hover:scale-105 hover:shadow-primary group-hover:scale-95 ${props.selected?"text-secondary":"text-muted-foreground"}` }>
                        {props.name}
                </h2>
                       
                </div >
        )
}
interface LabelI {
        name: string,
        onClick?: () => void,
        selected: boolean

}