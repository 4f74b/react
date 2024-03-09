import NavItem from "./nav-item/NavItem"
export default function Nav(){
    return (
        <div className='nav'>
            <ul>
                <NavItem nav_text="Profile" />
            </ul>
        </div>
    )
}