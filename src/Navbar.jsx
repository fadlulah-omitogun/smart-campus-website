import Logo from './assets/logo.jpg'
import './index.css'

function Navbar(){
    const navLinks = [
        {page:"Home", link:"/"},
        {page:"Sensors", link:"/Sensors"},
        {page:"Locations", link:"/Locations"},
        {page: "FAQs", link:"/FAQs"},
        {page: "Members", link:"/Members"},
        {page: "Future Plans", link:"/Plans"}
    ];

    return(
        <nav className="text-white bg-black w-full flex justify-between p-4 shadow-md shadow-gray-400  z-50 font-quicksand">
            {/*<a href="/" className="text-xl">Smart Campus</a>*/}
            <img className="w-14" src={Logo} alt="smart campus logo" ></img>
            <ul className="flex gap-4 mt-2 mx-4 ">
                {navLinks.map(({page,link})=>{
                    return(<li>
                        <a 
                        className="hover:text-red-400 hover:text-xl hover:underline"
                        href={link}>
                            {page}
                        </a>
                    </li>);
                })}
            </ul>
        </nav>
    )
}
export default Navbar;