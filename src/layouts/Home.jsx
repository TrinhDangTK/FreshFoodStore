import '../index.css'
function Home(){
    return(
        <section className="ff-home">
            <div className="flex relative">
                <div className="flex flex-col gap-13.75 pl-12.5">
                    <div className="pt-16.25">
                        <div className="flex max-w-105 max-h-14.75 gap-1.5  bg-ff-lightgreen rounded-full">
                            <div className="pl-2.75 flex items-center">
                                <img src="src/assets/objects/leaf.png" alt="leaf logo" className="w-8 h-8 mix-blend-multiply"></img>
                            </div>
                            <div className="py-5.5 flex items-center">
                                <h3 className="text-ff-24 text-ff-green font-medium">Good For You. Good For Nature</h3>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-166.25">
                        <h1 className="text-ff-70 font-bold">Fresh From <span className="text-ff-green">Nature</span>, Delivered to You</h1>
                    </div>
                    <div className="max-w-154.75 text-ff-24">
                        <p>Discover 100% organic groceries, farm-fresh produce, and wholesome essentials for a healthier, happier you.</p>
                    </div>
                    <div className="flex gap-5.5">
                        <button type="button" className="w-42.25 h-15 text-ff-24 text-ff-white bg-ff-green rounded-[50px] ">Shop now →</button>
                        <button type="button" className="w-59.5 h-15 text-ff-24 text-ff-dark bg-ff-mustard rounded-[50px]">Explore Product →</button>
                    </div>
                </div>
            
                <div className="absolute bottom-5 right-10 bg-ff-white/55 rounded-[10px] flex items-center gap-2.5 px-3.25 py-2 backdrop-blur-lg">
                    <img src="src/assets/objects/star.png" alt="star" className="w-11.25 h-11.5"></img>
                    <div className="whitespace-nowrap">
                        <p className="text-ff-green font-bold">4.9/5</p>
                        <p>12k Reviews</p>
                    </div>
                </div>

                <div className="absolute top-full right-[35%] bg-ff-white/55 rounded-[10px] flex items-center gap-2.5 px-3.25 py-2 backdrop-blur-lg">
                    <img src="src/assets/objects/truck.png" alt="delivery" className="w-11.25 h-11.5"></img>
                    <div className="whitespace-nowrap">
                        <p className="text-ff-green font-bold">Same Day Delivery</p>
                        <p>Freshness, delivered fast.</p>
                    </div>
                </div>

                <div className="absolute top-70 right-3 bg-ff-white/15 rounded-[10px] flex items-center gap-2.5 px-3.25 py-2 backdrop-blur-lg">
                    <img src="src/assets/objects/greenconfirm.png" alt="natural" className="w-11.25 h-11.5"></img>
                    <div className="whitespace-nowrap">
                        <p className="font-bold">100% <span className="text-ff-green">Natural</span></p>
                        <p className="text-gray-500">No chemicals. No compromise</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-7 ml-9.25 mt-9.25">
                <div className="flex flex-col gap-8.5">
                    <div className="flex gap-2">
                        <div>
                            <img src="src/assets/objects/leaf.png" alt="leaf" className="w-12.75 h-12.75 rounded-full"></img>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">100% Organic</p>
                            <p>Certified & natural produce</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div>
                            <img src="src/assets/objects/greenconfirm.png" alt="leaf" className="w-12.75 h-12.75 rounded-full"></img>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">Sercure Payments</p>
                            <p>Safe & encrypted checkout</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8.5">
                    <div className="flex gap-2">
                        <div>
                            <img src="src/assets/objects/greenrecycle.png" alt="leaf" className="w-12.75 h-12.75 rounded-full"></img>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">Sustainable Packaging</p>
                            <p>Eco-friendly & recyclable</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div>
                            <img src="src/assets/objects/greensmile.png" alt="leaf" className="w-12.75 h-12.75 rounded-full"></img>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">Happy Customers</p>
                            <p>Trusted by thousand</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}export default Home