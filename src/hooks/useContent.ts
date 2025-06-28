import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent() {
        const [contents, setContent] = useState([])
        function setRefresh() {
                axios.get(BACKEND_URL + '/content', {
                        headers: {
                                'authorization': localStorage.getItem('stashy_token')
                        }
                }).then((response) => {
                        setContent(response.data)

                })
        }




        useEffect(() => {
                setRefresh()
                let intervel = setInterval(()=>{
                        setRefresh()
                } , 5*1000)

                return ()=>{
                        clearInterval(intervel)
                }
        }, [])


        return { contents, setRefresh };
}