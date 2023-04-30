import React, { useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/solid';
import { useEffect } from 'react';

function AddNewProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);


  const [formData, setFormData] = useState({ name: "", age: "" });
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch("http://localhost:3000/data");
    const data = await response.json();
    setData(data);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    setFormData({ name: "", age: "" });
    fetchData();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
          <input type="text" id="name" value={formData.name} onChange={(event) => setName(event.target.value)} className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
          <input type="text" id="description" value={description} onChange={(event) => setDescription(event.target.value)} className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="price" className="block text-gray-700 font-medium mb-2">Price</label>
          <input type="text" id="price" value={price} onChange={(event) => setPrice(event.target.value)} className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
        </div>
        <div>
          <label htmlFor="image" className="block text-gray-700 font-medium mb-2">Image</label>
          <div className="flex items-center space-x-2">
            <label htmlFor="file-upload" className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
              <PlusCircleIcon className="h-5 w-5 inline-block -mt-1" aria-hidden="true" />
              <span>Upload</span>
            </label>
            <input type="file" id="file-upload" onChange={(event) => setImage(event.target.files[0])} className="hidden" />
            <span className="text-gray-500">{image ? image.name : 'No file selected'}</span>
          </div>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">Add Product</button>
      </form>
    </div>
  );
}

export default AddNewProduct;
