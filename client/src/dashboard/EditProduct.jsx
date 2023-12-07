import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";

import { useLoaderData, useParams } from 'react-router-dom'

const EditProduct = () => {
  const {id} = useParams();
  const {name, imageURL, price, description} = useLoaderData();
  const productCategories = ["CPU", "Motherboard", "Memory (RAM)", "Storage", "GPU", "PSU", "Computer Case", "Cooling System", "Input Devices", "Monitor", "Audio"];

  const [selectedProductCategory, setSelectedProductCategory] = useState(
    productCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    // console.log(event.target.value);
    setSelectedProductCategory(event.target.value);
  };


  // handle book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
     
    const name = form.name.value;
    // console.log(name);
    const imageURL = form.imageURL.value;
    // console.log(imageURL);

    const category = form.categoryName.value;
    // console.log(category);

    const price = form.price.value;
    // console.log(bookDescription);

    const description = form.description.value;
    // console.log(bookPDFURL);


    const updateProductObj = {
      name, imageURL, price, description, category
    }
    // console.log(updateProductObj)

    //update book data 
    fetch(`${import.meta.env.VITE_LocalHost}/product/${id}`,{
      method:"PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updateProductObj)
    })
    .then(res => res.json()).then(data => {
      alert("Product is Updated Sucessfully")
    })


  }
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Edit Product</h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[1480px] flex-col flex-wrap gap-4">

        {/* first row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="name" value="name Product" />
            </div>
            <TextInput
              id="name"
              name="name"
              type="text"
              placeholder="Book Name"
              required
              defaultValue={name}
            />
          </div>

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="price" value="price" />
            </div>
            <TextInput
              id="price"
              name="price"
              type="text"
              placeholder="price"
              required
              defaultValue={price}
            />
          </div>
        </div>

        {/* second row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            {/* imageURL */}
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Image URL"
              required
              defaultValue={imageURL}
    
            />
          </div>
          {/* Category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Product Category" />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedProductCategory}
              onChange={handleChangeSelectedValue}
            >
              {productCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* bookdescription */}

        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Description" />
          </div>
          <Textarea
            id="description"
            name="description"
            placeholder="Description"
            required
            className="full-rounded"
            rows={4}
            defaultValue={description}

          />
        </div>

        {/* book PDF Url */}
        {/* <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF Url" />
        </div>
        <TextInput id="bookPDFURL" type="text" name="bookPDFURL" placeholder="book PDF Url" defaultValue={bookPDFURL}  required />
      </div> */}

      <Button type="submit" className="mt-5">
        Update
      </Button>

      </form>
    </div>
  );
}

export default EditProduct