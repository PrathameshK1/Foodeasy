import React from 'react';
import vendorData from '../../../Data/AllShopData';

const AllShopBanner = () => {
    
    return (  
        <div class="w-full bg-center bg-cover h-56" style={{backgroundImage: `url(https://th.bing.com/th/id/OIP.A3R63-WqGajlnm8WJ-QcGgHaE8?pid=ImgDet&rs=1)`}}>
            <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-60">
                <div class="text-center">
                    <h1 class="text-4xl font-semibold text-white uppercase lg:text-4xl">All Registered Shops</h1>
                </div>
            </div>
        </div>  
    );
};

export default AllShopBanner;