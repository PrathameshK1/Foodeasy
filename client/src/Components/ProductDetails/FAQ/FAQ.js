import React from 'react';
import FAQItem from './FAQItem';

  export const Faq = () => {
    return (
      <div class=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <div class="">
          <div class="space-y-4">
            <FAQItem title="What is Farmeasy?">
            Farmeasy is an online platform that allows farmers to sell their products directly to consumers, bypassing traditional middlemen like wholesalers and retailers.
            </FAQItem>
            <FAQItem title=" How does Farmeasy work?">
            A Farmeasy works by providing a digital marketplace where farmers can list their products, set prices, and accept payments. Customers can browse the platform, search for products, and place orders directly with the farmers.
            </FAQItem>
            <FAQItem title="What kind of products can farmers sell on a farmer e-commerce platform?">
            Farmers can sell a wide variety of products on Farmeasy, including fresh produce, meat, dairy products, eggs, grains, and other agricultural commodities.
            </FAQItem>
            <FAQItem title=" How do farmers benefit from using a farmer e-commerce platform?">
            Farmers can benefit from using Farmeasy in several ways. Firstly, they can sell their products directly to consumers, eliminating middlemen and increasing their profits. Secondly, they can reach a wider audience of potential customers, including those in distant locations. Finally, they can have greater control over the pricing and marketing of their products.
            </FAQItem>
          </div>
        </div>
      </div>
    );
  };