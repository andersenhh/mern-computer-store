import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_LocalHost}/all-products`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  // delete product
  const handleDelete = (id) => {
    // console.log(id);
    fetch(`${import.meta.env.VITE_LocalHost}/product/${id}`,{
      method: "DELETE",
    }).then(res => res.json()).then(data => {
      alert("Product is Deleted")
    
      // setAllProducts(data);
    })
      
    
  }

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Products</h2>

      {/* table for product data */}
      <Table className="lg:w-[1180px]">
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Product Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allProducts.map((product,index) => <Table.Body className="divide-y" key={product._id}>     <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
           {index + 1}
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{product.name}</Table.Cell>
          <Table.Cell>{product.category}</Table.Cell>
          <Table.Cell>{product.price}</Table.Cell>
          <Table.Cell>
            <Link
              className="font-medium mr-5 text-cyan-600 hover:underline dark:text-cyan-500"
              to={`/admin/dashboard/edit-products/${product._id}`}
            >
              Edit
            </Link>
            <button onClick={() => handleDelete(product._id)}className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600">Delete</button>
          </Table.Cell>
        </Table.Row>
        </Table.Body> )
        }
      </Table>
    </div>
  );
};

export default ManageProducts;
