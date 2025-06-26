

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
        Form,
        FormControl,
        FormDescription,
        FormField,
        FormItem,
        FormLabel,
        FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useConteForm, useLoading } from "@/state/store"
import { useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "@/config"



//schema 
const formSchema = z.object({
        title: z.string().min(1, 'Title is required'),
        link: z.string().url().optional(),         // optional link (and must be a URL if present)
        desc: z.string().optional(),               // optional description
        // tags: z.array(z.string().length(24)).optional(),  // assuming ObjectId as 24-char hex strings // required ObjectId string
        Type: z.enum(['youtube', 'twitter'])
})

export function ProfileForm() {
        const setform = useConteForm()
        const form = useForm<z.infer<typeof formSchema>>({
                resolver: zodResolver(formSchema),
                defaultValues: {
                        title: "",
                        link: "",
                        desc: "",
                        Type: "youtube"

                },
        })
        const loading = useLoading()
        const [type, setType] = useState<'youtube' | 'twitter'>('youtube')

        async function onSubmit(values: z.infer<typeof formSchema>) {
                loading.setLoading(true)
                const response = await axios.post(BACKEND_URL + '/content', {
                        title: values.title,
                        link: values.link,
                        Type: type

                },{
                        headers:{
                                authorization:localStorage.getItem('stashy_token')
                        }
                })
                setform.setVisible(false)
                loading.setLoading(false)
                console.log(response.data)
                
        }
       

        return (
                <div className="p-10 bg-primary/98 border-2 min-w-2xl border-primary rounded-3xl shadow-2xl shadow-secondary">
                        <div className=" flex justify-end text-secondary"> <Button variant={"ghost"} onClick={() => {
                                setform.setVisible(false)
                        }}>X</Button></div>
                        <Form {...form} >
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                        <FormField
                                                control={form.control}
                                                name="title"
                                                render={({ field }) => (
                                                        <FormItem className="text-secondary">
                                                                <FormLabel>Title</FormLabel>
                                                                <FormControl>
                                                                        <Input placeholder="Web Dev.." {...field} className="rounded border border-muted-foreground" />
                                                                </FormControl>
                                                                <FormDescription>
                                                                        Card Title
                                                                </FormDescription>
                                                                <FormMessage />
                                                        </FormItem>
                                                )}
                                        />

                                        <FormField
                                                control={form.control}
                                                name="link"
                                                render={({ field }) => (
                                                        <FormItem className="text-secondary">
                                                                <FormLabel>Link</FormLabel>
                                                                <FormControl>
                                                                        <Input placeholder="www.example.com" {...field} className="rounded border border-muted-foreground" />
                                                                </FormControl>
                                                                <FormDescription>
                                                                        Url of content you want to save in Stashy
                                                                </FormDescription>
                                                                <FormMessage />
                                                        </FormItem>
                                                )}
                                        />
                                        <FormField
                                                control={form.control}
                                                name="desc"
                                                render={({ field }) => (
                                                        <FormItem className="text-secondary">
                                                                <FormLabel>Description</FormLabel>
                                                                <FormControl>
                                                                        <Input  {...field} className="rounded border-muted-foreground" />
                                                                </FormControl>

                                                                <FormMessage />
                                                        </FormItem>
                                                )}
                                        />

                                        <div className="flex justify-between text-secondary">
                                                <Button type="button" variant={"ghost"} className={type == 'youtube' ? 'text-red-500 border border-secondary' : ''} onClick={() => {
                                                        setType('youtube')
                                                }}>Youtube</Button>
                                                <Button type="button" variant={"ghost"} className={type == 'twitter' ? 'text-blue-500 border border-secondary' : ''} onClick={() => {
                                                        setType('twitter')
                                                }}>Twitter</Button>
                                        </div>
                                        <Button type="submit" variant={'destructive'} className="w-full">Submit</Button>
                                </form>
                        </Form>
                </div>
        )
}
