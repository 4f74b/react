import Universe from "./universe/Universe"
export default function UniverseWrapper({universes}){
    return (
        <div id="universe-wrapper" className='border-black h-100'>
            <ul id="universe-container" className='d-flex'>
                {universes.map((universe_data)=> {
                    return <Universe key={universe_data.label} universe_data={universe_data}/>
                })}
            </ul>
        </div>
    )
}