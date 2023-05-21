import React from 'react';

const Background = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="w-full rounded-lg" />
                    <div className="absolute rounded-xl h-full left-0 right-0 flex items-center bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-gray-200 space-y-8 pl-14 w-1/2'>
                            <h2 className='text-7xl font-extrabold'>Every Toys Are Ready For You</h2>
                            <p className='font-semibold'>In these shop, you can buy various kinds of toys related to cars, bus , truck and etc. This shop maintains the quality of products as well as the customer value </p>
                            <div>
                                <button className="btn btn-outline btn-accent mr-5">Buy Toys</button>
                                <button className="btn btn-accent">Show More</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-x-5 left-5 right-5 top-10">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1569164942237-00385e8fd71e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="w-full rounded-lg" />
                    <div className="absolute rounded-xl h-full left-0 right-0 flex items-center bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-gray-200 space-y-8 pl-14 w-1/2'>
                            <h2 className='text-7xl font-extrabold'>Every Toys Are Ready For You</h2>
                            <p className='font-semibold'>In these shop, you can buy various kinds of toys related to cars, bus , truck and etc. This shop maintains the quality of products as well as the customer value </p>
                            <div>
                                <button className="btn btn-outline btn-accent mr-5">Buy Toys</button>
                                <button className="btn btn-accent">Show More</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-x-5 left-5 right-5 top-10">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1531048324985-45ab12882e58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="w-full rounded-lg" />
                    <div className="absolute rounded-xl h-full left-0 right-0 flex items-center bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-gray-200 space-y-8 pl-14 w-1/2'>
                            <h2 className='text-7xl font-extrabold'>Every Toys Are Ready For You</h2>
                            <p className='font-semibold'>In these shop, you can buy various kinds of toys related to cars, bus , truck and etc. This shop maintains the quality of products as well as the customer value </p>
                            <div>
                                <button className="btn btn-outline btn-accent mr-5">Buy Toys</button>
                                <button className="btn btn-accent">Show More</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-x-5 left-5 right-5 top-10">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1681127727536-069dc4cdedad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="w-full rounded-lg" />
                    <div className="absolute rounded-xl h-full left-0 right-0 flex items-center bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-gray-200 space-y-8 pl-14 w-1/2'>
                            <h2 className='text-7xl font-extrabold'>Every Toys Are Ready For You</h2>
                            <p className='font-semibold'>In these shop, you can buy various kinds of toys related to cars, bus , truck and etc. This shop maintains the quality of products as well as the customer value </p>
                            <div>
                                <button className="btn btn-outline btn-accent mr-5">Buy Toys</button>
                                <button className="btn btn-accent">Show More</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-x-5 left-5 right-5 top-10">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Background;


// https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80

// https://images.unsplash.com/photo-1569164942237-00385e8fd71e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80

// https://images.unsplash.com/photo-1531048324985-45ab12882e58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80

// https://images.unsplash.com/photo-1681127727536-069dc4cdedad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80