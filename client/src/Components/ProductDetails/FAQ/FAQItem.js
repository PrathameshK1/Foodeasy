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
        <Item title="What is Foodeasy?">
        Foodeasy is an online platform which allows people to donate excessive food to the poor and needy, bypassing traditional wastage of food
        </Item>
        <Item title=" How does Farmeasy work?">
        Foodeasy works by providing an online platform where people can donate their excessive food to the poor and needy. Users can create a profile on the platform and list the type of food they want to donate, along with the quantity and other relevant information. People in need can then browse the platform and search for the type of food they require. They can place their orders directly with the donors and collect the food from the donor's location. This bypasses traditional wastage of food and ensures that the surplus food reaches those who need it the most.
        </Item>
        <Item title="What kind of products can farmers sell on a farmer e-commerce platform?">
        People can donate a wide variety of excess food on Foodeasy, including fresh produce, meat, dairy products, eggs, grains, and other food commodities. The platform encourages users to donate any type of food that is still edible and can be used to prepare meals. This helps to prevent food waste and ensures that the surplus food reaches those who are in need of it.
        </Item>
        <Item title=" How do farmers benefit from using a farmer e-commerce platform?">
        Users who donate their excess food on Foodeasy can benefit in several ways. Firstly, they can directly donate to those in need, bypassing traditional wastage of food and ensuring that surplus food is utilized effectively. Secondly, they can reach a wider audience of people who are in need of the type of food they are donating. Finally, they can have greater control over the amount of food they want to donate and ensure that it is utilized to the fullest.
        </Item>
      </div>
    </div>
  </div>
   
  );
};
