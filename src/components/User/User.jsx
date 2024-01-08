import { useParams } from "react-router-dom"

export default function User() {
    const {userid} = useParams()
    return(
        <>
            <h1 className="bg-gray-600 text-white p-4 text-3xl">User: {userid}</h1>
        </>
    )
}
