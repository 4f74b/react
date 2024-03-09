import Wormhole from "./Wormhole"
import PostList from "./post-list/PostList"
export default function Universe({universe_data}){
    return(
        <li>
            {universe_data.active && <PostList />}
            <Wormhole universe_label={universe_data.label}/>
        </li>
    )
}