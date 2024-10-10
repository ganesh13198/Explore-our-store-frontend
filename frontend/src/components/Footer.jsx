const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                <h1 className='text-3xl font-medium text-gray-800'>Explore our store</h1>
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem Ipsum is simply dummy text of printing and typesetting industry
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>1-22-33-44-55</li>
                        <li>contact@explore our store.com</li>
                    </ul>
                </div>
            </div>
        <div>
            <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ Exploreourstore.com - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer
