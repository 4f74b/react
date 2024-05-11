import StylesPostList from './StylesPostList'
import Post from "./post/Post"

export default function PostList(){
    return (
        <div className='w-100 h-100 border-black'>
            <ul>
                <Post />
                <Post />
            </ul>
        </div>
    )
}