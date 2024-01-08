import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";

export default function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/imgaurav02")
    //     .then((res) => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return (
        <>
            <div className="bg-gray-600 text-white m-4 p-4 text-3xl">Github Followers: {data.followers}
            <img src={data.avatar_url} width={300} />
            </div>
        </>
    );
}

export const githubInfoLoader = async () => {
    const res = await fetch("https://api.github.com/users/imgaurav02")
    return res.json()
}