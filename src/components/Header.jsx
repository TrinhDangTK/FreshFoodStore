import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header(){
    return(
        <section className="bg-ff-cream w-full">
           <nav className="flex gap-4.5 px-12.5 items-center max-w-360 mx-auto">
                <div className='flex gap-2.25 items-center'>
                    <img src="src/assets/logo/logo.jpg" alt="Logo" className="h-27 w-27 object-cover "/>
                    <h1 className="text-ff-32">Natural <span className='text-ff-green'>Market</span></h1>
                </div>
                <div>
                    <ul className="flex text-ff-24 pl-6.25 gap-5.5 pr-3 max-w-142 w-full">
                        <li><a href="#">Home</a></li>
                        <li className="flex items-center"><a href="#">Shop</a><img src="src\assets\objects\chevron-down.png" alt="chervon-down" className="w-5 h-5"></img></li>
                        <li className="flex items-center"><a href="#" >Categories</a><img src="src\assets\objects\chevron-down.png" alt="chervon-down" className="w-5 h-5"></img></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="flex gap-3.75">
                    <div className="relative">
                        <input type="text" placeholder="Search products ..." className='max-w-50.5 w-full rounded-[100px] h-10.5 pl-5.75 pr-10 bg-ff-white'/>
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="text-ff-24 !w-6 absolute right-3 top-1/2 -translate-y-1/2 text-ff-lightgray cursor-pointer"/>
                    </div>
                    <FontAwesomeIcon icon="fa-regular fa-circle-user" className="text-ff-36 !w-9 !h-9 cursor-pointer"/>
                    <div className="flex items-center gap-1.5 w-fit px-3 py-1.5 rounded-[50px] bg-ff-green cursor-pointer">
                        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className="text-ff-24"/>
                        <h4 className="text-white whitespace-nowrap">Cart(0)</h4>
                    </div>
                </div>
            </nav>
        </section>
    )
}
export default Header;