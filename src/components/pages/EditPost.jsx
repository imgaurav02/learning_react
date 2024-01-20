import {Container, PostForm} from "../../components"
import service from "../../appwrite/config"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"

export default function EditPost() {
    const [post,setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        // console.log(slug);
        if(slug){
            service.getPost(slug).then((post) => {
                console.log(post);
                if(post){
                    setPosts(post)
                }
            })
        }
        else{
            navigate('/')
        }
    }, [slug,navigate])
    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}