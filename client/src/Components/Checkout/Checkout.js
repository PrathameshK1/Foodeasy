import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import productsData from '../../Data/products';




const Checkout = () => {

var index=-1; 

function deletePost(x){
  
  const array=document.getElementsByTagName("li");
  array[x].style.display="none";
  for(var i=x;i<sessionStorage.getItem("itemCount");i++){
    sessionStorage.setItem("itemNumber_"+i,sessionStorage.getItem("itemNumber_"+(Number(i)+1)));
  }
  sessionStorage.setItem("itemCount",Number(sessionStorage.getItem("itemCount"))-1);
}


  const [amount,setAmount]=useState(3);
  const setDecrease=()=>{
    amount>1 ?setAmount(amount -0.25):setAmount(1);


  }
const setIncrease=()=>{
const product =productsData[Number(sessionStorage.getItem("itemNumber_"+index))]
const v=product.stock;
  if (amount<v){
  setAmount(amount + 0.25);

}
}
function total(pricee, amt){


  var t=pricee*amt;
  return t;
  
  }

function home(){
    
    

  fetch('http://localhost:4000/api/products')
   .then(response => response.json())
        .then(data => setActivity(data))
  
  }      
  const[records,setActivity]=useState([]);
  function selectproduct(serial){
    sessionStorage.setItem("selected_post", serial);
  }
  useEffect(()=>{home()});


  

//const product = productsData[Number(sessionStorage.getItem("itemNumber_"+sessionStorage.getItem("itemCount")))];

return (
    <div className="flex justify-center my-6">
      <div className="flex flex-col w-full p-8 text-gray-800 bg-white pin-r pin-y md:w-4/5 lg:w-4/5">
        <div className="flex-1">
          <table className="w-full text-sm lg:text-base" cellspacing="0">
            <thead>
              <tr className="h-12 font-sans text-gray-800 text-lg border border-teal-300 border-t-0 border-l-0 border-r-0">
                <th className="hidden text-left md:table-cell font-medium text-teal-600">
                  Image
                </th>
                <th className="text-left font-medium text-teal-600">
                  Product Details
                </th>
                <th className="text-left pl-5 lg:pl-8">
                  <span className="inline font-medium text-teal-600">
                    
                  </span>
                </th>
                <th className="text-right lg:text-left md:table-cell font-medium text-teal-600">
                  Remove
                </th>
                <th className="hidden text-right md:table-cell font-medium text-teal-600">
                  Unit price
                </th>
                <th className="text-right font-medium text-teal-600">
                  Total price
                </th>
              </tr>
            </thead>
         
            {records.map((ind,index) => {
              if(index<=Number(sessionStorage.getItem("itemCount"))){
const product = productsData[Number(sessionStorage.getItem("itemNumber_"+index))];
                
                return(
                 
            
                  // <li style={{"list-style":"none"}}>
              <tbody>
                
              <tr>
                <td className="pt-2"> </td>
              </tr>
              <tr>
                <td className="hidden pb-4 md:table-cell">
                  <a href="#0">
                    <img
                      src={product.image}
                      className="w-20 rounded"
                      alt="Thumbnail"
                    />
                  </a>
                </td>
                <td>
                  <a href="#0">
                    <p className="mb- ">{product.name}</p>
                    <form action="" method="POST">
                      <button type="submit" className="text-gray-700">
                       
                      </button>
                    </form>
                  </a>
                </td>
                <td className="justify-center md:justify-end md:flex md:mt-8">
                <div className="flex-1 flex items-end justify-between text-sm">
                                    <div className="border border-gray-300 rounded">
                                      <i onClick={setIncrease} className="fas fa-plus m-1 py-1 px-4 cursor-pointer font-normal text-teal-600">
                                      </i>
                                      <span className="mx-2 text-center w-1 text-gray-900">
                                        {amount}
                                      </span>

                                      <i onClick={setDecrease} className="fas fa-minus m-1 py-1 px-4 cursor-pointer font-normal text-teal-600"></i>
                                    </div>

                                    
                                  </div>
                                
                </td>
                <td>
                
                  <div className="flex">
                                      <button
                                        type="button"
                                        onClick={()=>deletePost(index)}
                                        className="font-medium tracking-wide text-teal-600 hover:text-teal-800"
                                      >
                                        Remove
                                      </button>
                                    </div>
                </td>
                <td className="hidden text-right md:table-cell">
                  <span className="text-sm lg:text-base font-medium">
                    {product.price}
                  </span>
                </td>
                <td className="text-right">
                  <span  className="text-sm lg:text-base font-medium">
                 {total(product.price,amount)}
                  </span>
                </td>
              </tr>
              <tr>
               
              </tr>
              <div className="flex justify-between border-b">
              <div className="lg:px-4 lg:py-2 m-1 text-lg lg:text-xl font-medium text-center text-gray-800">
                Subtotal
              </div>
              <div className="lg:px-4 lg:py-2 m-1 lg:text-lg font-medium text-right text-gray-800">
              {total(product.price,amount)}
              </div>
            </div>
           
               </tbody>
              
              //  </li>
              
              
              );
              
              }
            })}
           
           
          </table>
          <hr className="pb-6 mt-6" />
          <div className="my-4 mt-6 -mx-2 lg:flex">
            <div className="lg:px-2 lg:w-1/2">
              <div className="p-3 bg-teal-50 rounded-full">
                <h1 className="ml-2 font-semibold text-teal-600 uppercase">
                  Coupon Code
                </h1>
              </div>
              <div className="p-4">
                <p className="mb-4 italic">
                  If you have a coupon code, please enter it in the box below
                </p>
                <div className="justify-center md:flex">
                  <form action="" method="POST">
                    <div className="flex items-center w-full h-13 pl-3 bg-gray-100 border rounded-full">
                      <input
                        type="coupon"
                        name="code"
                        id="coupon"
                        placeholder="Apply coupon"
                        value="90off"
                        className="w-full bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none"
                      />
                      <button
                        type="submit"
                        className="text-sm flex items-center px-3 py-1 text-white bg-teal-500 rounded-full outline-none md:px-4 hover:bg-teal-700 focus:outline-none active:outline-none"
                      >
                        <svg
                          aria-hidden="true"
                          data-prefix="fas"
                          data-icon="gift"
                          className="w-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
                          />
                        </svg>
                        <span className="font-medium">Apply coupon</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="p-3 bg-teal-50 rounded-full my-3">
                <h1 className="ml-2 font-semibold text-teal-600 uppercase">
                  Enter Shipping Info
                </h1>
              </div>
              <div className="px-4">
                <p className="mb-4 italic">
                  Enter your delivery address where you get the product. You can
                  also send any other location where you send the products.
                </p>
              </div>
              <form>
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Name"
                    className="px-3 py-4 my-1 border-b border-teal-300 placeholder-gray-500 text-blueGray-600 relative tracking-wide rounded-lg bg-white text-base shadow outline-none focus:outline-none focus:shadow-outline w-full"
                  />
                </div>
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Email"
                    className="px-3 py-4 my-1 border-b border-teal-300 placeholder-gray-500 text-blueGray-600 relative  rounded-lg bg-white text-base shadow outline-none focus:outline-none focus:shadow-outline w-full"
                  />
                </div>
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="px-3 py-4 my-1 border-b border-teal-300 placeholder-gray-500 text-blueGray-600 relative  rounded-lg bg-white text-base shadow outline-none focus:outline-none focus:shadow-outline w-full"
                  />
                </div>
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Address"
                    className="px-3 py-4 my-1 border-b border-teal-300 placeholder-gray-500 text-blueGray-600 relative  rounded-lg bg-white text-base shadow outline-none focus:outline-none focus:shadow-outline w-full"
                  />
                </div>
              </form>
            </div>
            <div className="lg:px-2 lg:w-1/2">
              <div className="mb-4">
                <div className="p-3 bg-teal-50 rounded-full mb-3">
                  <h1 className="ml-2 font-semibold text-teal-600 uppercase">
                    Payment Method
                  </h1>
                </div>
                <div className="px-4">
                  <p className="mb-3 italic">
                    You can pay us in a multiple way in our payment gateway
                    system.
                  </p>

                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-5 w-5 text-gray-600"
                      checked
                    />
                    <span className="ml-2 text-gray-800 font-medium">
                      Cash On Delivery 
                    </span>
                  </label>
                  <hr />
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="radio"
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <span className="ml-2 text-gray-800 font-medium">
                      Gpay
                    </span>
                  </label>
                </div>
              </div>

              <div className="p-3 bg-teal-50 rounded-full">
                <h1 className="ml-2 font-semibold text-teal-600 uppercase">
                  Order Details
                </h1>
              </div>
              <div className="p-4">
                <p className="mb-1 italic">
                  Shipping and additionnal costs are calculated based on values
                  you have entered
                </p>
              
              
              
                <a href="#0">
               
                <Link to="/orderHistory" className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-teal-500 rounded-full shadow item-center hover:bg-teal-700 focus:shadow-outline focus:outline-none">
                    <svg
                      aria-hidden="true"
                      data-prefix="far"
                      data-icon="credit-card"
                      className="w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                      />
                    </svg>
                    
                    <span className="ml-2 pt-1">Place Order</span>
                    </Link>
                  </a>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;