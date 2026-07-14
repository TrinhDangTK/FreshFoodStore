import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer(){
    return(
        <footer className="bg-ff-white/50 backdrop-blur-[5px] mt-82.5 relative z-10">
            <div className="px-12.5 pt-9.5 pb-5">
                <div className="flex justify-between gap-11.25">
                    {/* Logo&Description */}
                    <div>
                        <div className="flex gap-3 items-center mb-2.5">
                            <img src="src/assets/logo/logo.jpg" className="w-15 h-15" alt="logo"></img>
                            <h3 className="font-bold text-ff-32">Natural Market</h3>
                        </div>
                        <p className="text-ff-20 text-ff-black leading-1.6">
                            Good for you. Good for nature.<br/>
                            Bring you 100% organic product,<br/>
                            sourced with care and delivered fresh to your door.
                        </p>
                    </div>
                    {/* Quick Links */}
                    <div className="border-l border-ff-black pl-7.5">
                        <h3 className="font-bold text-ff-32 mb-2.5 whitespace-nowrap">Quick Links</h3>
                        <div className="flex flex-col gap-3 text-ff-20 text-ff-black">
                            <a href="#">Home</a>
                            <a href="#">About Us</a>
                            <a href="#">Shop</a>
                            <a href="#">Register now →</a>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="border-l border-ff-black pl-7.5">
                        <h3 className="font-bold text-ff-32 mb-2.5">Categories</h3>
                        <div className="flex text-ff-20 flex-col gap-3 text-ff-black">
                            <a href="#">All</a>
                            <a href="#">Fruit</a>
                            <a href="#">Vegetables</a>
                            <a href="#">Meat&Fish</a>
                            <a href="#">Others</a>
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div className="border-l border-ff-black pl-7.5">
                        <h3 className="font-bold text-ff-32 mb-2.5">Contact Us</h3>
                        <div className="flex text-ff-20 gap-2.5 items-center text-ff-black">
                            <FontAwesomeIcon icon="fa-solid fa-phone" className="text-[16px]"/>
                            <span>03**-3**-5**</span>
                        </div>
                        <div className="flex text-ff-20 gap-2.5 items-center text-ff-black mt-2.5">
                            <FontAwesomeIcon icon="fa-solid fa-envelope" className="text-[16px]"/>
                            <a href="#">dangtrinh768@gmail.com</a>
                        </div>
                        <div className="flex pt-5 text-ff-32 justify-between text-ff-black">
                            <FontAwesomeIcon icon="fa-brands fa-facebook" className="cursor-pointer hover:text-ff-green"/>
                            <FontAwesomeIcon icon="fa-brands fa-facebook-messenger" className="cursor-pointer hover:text-ff-green"/>
                            <FontAwesomeIcon icon="fa-brands fa-instagram" className="cursor-pointer hover:text-ff-green"/>
                            <FontAwesomeIcon icon="fa-brands fa-square-x-twitter" className="cursor-pointer hover:text-ff-green"/>
                        </div>
                    </div>

                    {/* We Accept */}
                    <div className="border-l border-ff-black pl-7.5">
                        <h3 className="font-bold text-ff-32 mb-2.5 whitespace-nowrap">We Accept</h3>
                        <div className="grid grid-cols-2 gap-8">
                            <img src="src/assets/payments/visa.png" alt="Visa" className="w-20 h-11.25 object-contain"></img>
                            <img src="src/assets/payments/momopay.png" alt="Momo" className="w-20 h-11.25 object-contain"></img>
                            <img src="src/assets/payments/mastercard.svg" alt="Mastercard" className="w-20 h-11.25 object-contain"></img>
                            <img src="src/assets/payments/vietqr.png" alt="VietQR" className="w-20 h-11.25 object-contain"></img>
                            <img src="src/assets/payments/googlepay.png" alt="Google Pay" className="w-20 h-11.25 object-contain"></img>
                            <img src="src/assets/payments/applepay.png" alt="Apple Pay" className="w-20 h-11.25 object-contain"></img>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-right mt-5">
                    <p className="text-ff-black text-ff-18">@ 2026 natural market right. All right reserved.</p>
                </div>
            </div>
        </footer>
    )
}export default Footer