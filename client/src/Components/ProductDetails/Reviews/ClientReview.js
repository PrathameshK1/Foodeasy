import React from 'react';

const ClientReview = () => {
  return (
    <div className="container flex flex-col w-full px-6 py-4 mx-auto divide-y rounded-md divide-coolGray-700">
      <div className="flex justify-between p-4 font-sans">
        <div className="flex space-x-4">
          <div>
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt="hello"
              className="object-cover w-12 h-12 rounded-full"
            />
          </div>
          <div>
            <h4 className="font-display font-semibold text-gray-900">
              Leroy Jenkins
            </h4>
            <span className="text-xs text-gray-800 tracking-wide">
              2 days ago
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm font-sans text-gray-800 tracking-wide">
        <p>
       " I have been using Foodeasy for a few months now, and I must say, it has exceeded my expectations. 
        The platform is intuitive, and the community is supportive.
         I feel good knowing that my excess food is not going to waste and is instead reaching those who need it the most.
          Foodeasy is a great initiative, and I will continue to use it to donate food in the future."
        </p>
        <p>
        "I am impressed with the concept of Foodeasy. It not only helps in reducing food wastage but also provides a solution to the problem of hunger in our society. The platform is user-friendly, and the donation process is simple and efficient. I highly recommend Foodeasy to anyone who wants to make a positive impact on society."
        </p>
        <p>
        Foodeasy has been a game-changer for me. As someone who often ends up with excess food that would otherwise go to waste, Foodeasy has provided an easy and hassle-free way to donate it to those in need. The platform is simple to use and has helped me contribute to a good cause in a meaningful way
        </p>
      </div>
    </div>
  );
};

export default ClientReview;
