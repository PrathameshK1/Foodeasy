import React from 'react';

const OfferCard = () => {
  return (
    <div className="px-5 my-10 sm:my-0 lg:p-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
      <div className="rounded overflow-hidden shadow-lg relative ">
        <img
          className="w-full"
          src="https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2021/05/banner-11.jpg"
          alt="Mountain"
        />
        <div className="absolute top-8 sm:top-3 md:top-6 lg:top-12 left-6 lg:left-6 text-white">
          <h2 className="text-sm lg:text-md mb-1 lg:mb-2">Donate Food</h2>
          <h4 className="font-semibold text-xl md:text-1xl mb-1 lg:mb-2">
          Your donations<br/>helps fight hunger...
          </h4>
          {/* <p className="text-sm">Donate non-perishable items, canned goods, and fresh produce to those in need today.</p> */}
        </div>
      </div>
      <div className="rounded overflow-hidden shadow-lg relative">
        <img
          className="w-full"
          src="https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2021/05/banner-12.jpg"
          alt="River"
        />
        <div className="absolute top-8 sm:top-3 md:top-6 lg:top-12 left-6 lg:left-6 text-white">
          <h2 className="text-sm lg:text-md mb-1 lg:mb-2">Volunteer</h2>
          <h4 className="font-semibold text-xl lg:text-1xl mb-1 lg:mb-2">
          Make a difference by<br/>volunteering at a food pantry...
          </h4>
          {/* <p className="text-sm">Help sort, pack, and distribute food to those in need</p> */}
        </div>
      </div>

      <div className="rounded overflow-hidden shadow-lg relative ">
        <img
          className="w-full"
          src="https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2021/05/banner-13.jpg"
          alt="Forest"
        />
        <div className="absolute top-8 sm:top-3 md:top-6 lg:top-12 left-6 lg:left-6 text-white">
          <h2 className="text-sm lg:text-md mb-1 lg:mb-2">Host a Food Drive</h2>
          <h4 className="font-semibold text-xl lg:text-1xl mb-1 lg:mb-2">
          Every contribution<br/>can make a big impact... 
          </h4>
          {/* <p className="text-sm">SHOP NOW</p> */}
        </div>
      </div>
    </div>
  );
};

export default OfferCard;

