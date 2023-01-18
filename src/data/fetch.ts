import { useQuery } from "@tanstack/react-query"

export const useFetchData = (url:string) =>{
    const {isLoading , error, data} = useQuery({
        queryKey : ['lyrics-data'],
        queryFn : () => fetch(url).then(res => console.log(res))
    })
}



