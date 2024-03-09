import StylesPostList from './StylesPostList'
import Post from "./post/Post"

export default function PostList(){
    return (
        <div className='w-100'>
            <ul>
                <Post />
                <Post />
            </ul>
        </div>
    )
}