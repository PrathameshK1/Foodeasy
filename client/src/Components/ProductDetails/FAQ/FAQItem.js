import React, { useState } from 'react';
const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded border-teal-100 shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  return (
    <div class=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <div class="">
          <div class="space-y-4">
            <Item title="What is Farmeasy?">
            Farmeasy is an online platform that allows farmers to sell their products directly to consumers, bypassing traditional middlemen like wholesalers and retailers.
            </Item>
            <Item title=" How does Farmeasy work?">
            A Farmeasy works by providing a digital marketplace where farmers can list their products, set prices, and accept payments. Customers can browse the platform, search for products, and place orders directly with the farmers.
            </Item>
            <Item title="What kind of products can farmers sell on a Farmeasy Platform?">
            Farmers can sell a wide variety of products on Farmeasy, including fresh produce, meat, dairy products, eggs, grains, and other agricultural commodities.
            </Item>
            <Item title=" How do farmers benefit from using aFarmeasy platform?">
            Farmers can benefit from using Farmeasy in several ways. Firstly, they can sell their products directly to consumers, eliminating middlemen and increasing their profits. Secondly, they can reach a wider audience of potential customers, including those in distant locations. Finally, they can have greater control over the pricing and marketing of their products.
            </Item>
          </div>
        </div>
      </div>
  );
};
