import Nav from "./navigation/Nav";
import RegionWrapper from "./region-selector/RegionWrapper";

export default function HeaderWrapper(){
    return (
        <div id="header-wrapper" className='border-black w-100'>
            <Nav />
            <RegionWrapper />
        </div>
    )
}