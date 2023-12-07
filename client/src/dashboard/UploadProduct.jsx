import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";

const UploadProduct = () => {
  const productCategories = ["CPU", "Motherboard", "Memory (RAM)", "Storage", "GPU", "PSU", "Computer Case", "Cooling System", "Input Devices", "Monitor", "Audio"];

  const [selectedProductCategory, setSelectedProductCategory] = useState(
    productCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    // console.log(event.target.value);
    setSelectedProductCategory(event.target.value);
  };


  // handle product submission
  const handleProductSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
     
    const name = form.name.value;
    // console.log(name);
    const imageURL = form.imageURL.value;
    // console.log(imageURL);

    const category = form.categoryName.value;
    // console.log(category);

    const price = form.price.value;
    // console.log(price);

    const description = form.description.value;
    // console.log(description);

    const productObj = {
      name, imageURL, price, description, category
    }
    console.log(productObj)

    //send data to db

    fetch(`${import.meta.env.VITE_LocalHost}/upload-product`, {
      method:"POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(productObj)
    }).then(res => res.json()).then(data => {
      alert("Product Uploaded Sucessfully")
      form.reset();
    })
  }
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload A Product</h2>
      <form onSubmit={handleProductSubmit} className="flex lg:w-[1580px] flex-col flex-wrap gap-4">

        {/* first row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Product Name" />
            </div>
            <TextInput
              id="name"
              name="name"
              type="text"
              placeholder="name"
              required
            />
          </div>

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput
              id="price"
              name="price"
              type="text"
              placeholder="price"
              required
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

        {/* product description */}

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
          />
        </div>

      <Button type="submit" className="mt-5">
        Upload
      </Button>

      </form>
    </div>
  );
};

export default UploadProduct;
