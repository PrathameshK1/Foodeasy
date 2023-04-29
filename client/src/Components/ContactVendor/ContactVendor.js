import React from 'react';

const ContactVendor = () => {

  

  return (
    <div>
      <div className="bg-white rounded m-2 shadow-3xl z-20 pt-5 pb-6 px-2 mt-10 border-t-2 border-teal-400">
        <div>
          <h1 className="text-xl text-gray-800">Contact with Vendor</h1>
          <h3 className="text-base text-gray-700">Send request for Products</h3>
        </div>
        <div className="pt-3">
          <form>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="mb-3  block text-sm py-3 px-4 rounded w-full outline-none border border-teal-400"
              required
            />

            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Write your Message"
              className="mb-3  block text-sm py-3 px-4 rounded w-full border border-teal-400 outline-none"
            ></textarea>

            <input
              type="submit"
              value="Send Message"
              className="cursor-pointer bg-teal-500 hover:bg-teal-700 py-1 px-4 rounded text-white"
            />
          </form>
        </div>
      </div>
      <h1 className="text-xl text-gray-800">Guidlines</h1>
    <h3 className="text-base text-gray-700">1.Keep hot foods hot (above 140°F) and cold foods cold (below 40°F).<br/>
    2.Use clean, sanitized containers for storing and transporting food.<br/>
    3.Do not donate food that has passed its expiration date.<br/>
    4.Do not donate food that has been previously opened or partially consumed.<br/>
5.Do not donate food that has been prepared in a home kitchen, as it may not meet local health department regulations.<br/>
6.Wash your hands thoroughly with soap and water before handling food.<br/>
7.Do not donate food that has been in contact with contaminants such as dirt, insects, or chemicals.<br/>
8.Label all donated food with the date it was prepared or received, the type of food, and any special instructions or dietary restrictions.<br/>
9.If donating perishable items, such as meat, dairy, or fresh produce, ensure that they are stored and transported at the correct temperature.<br/>
10.If donating canned or packaged goods, ensure that the packaging is intact and free from damage or contamination.<br/>
11.By following these guidelines, you can help ensure that the food you donate is safe and healthy for those in need.</h3>
    </div>
    
    
  );
};

export default ContactVendor;
