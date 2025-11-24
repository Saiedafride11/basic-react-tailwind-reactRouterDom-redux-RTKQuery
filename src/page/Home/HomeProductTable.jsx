import { FileText, Printer, Sheet } from "lucide-react";
import { useState } from "react";

const productItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 2,
    name: "Gaming Mouse",
    price: 29.99,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 74.5,
    category: "Footwear",
    inStock: false,
  },
  {
    id: 4,
    name: "Office Chair",
    price: 120.0,
    category: "Furniture",
    inStock: true,
  },
  {
    id: 5,
    name: "Smart Watch",
    price: 89.0,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 6,
    name: "Backpack",
    price: 25.0,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 45.99,
    category: "Electronics",
    inStock: false,
  },
  {
    id: 8,
    name: "Water Bottle",
    price: 9.99,
    category: "Daily Use",
    inStock: true,
  },
  {
    id: 9,
    name: "Keyboard",
    price: 34.99,
    category: "Electronics",
    inStock: true,
  },

  // New 21 items
  {
    id: 10,
    name: "LED Desk Lamp",
    price: 18.99,
    category: "Home Decor",
    inStock: true,
  },
  {
    id: 11,
    name: "Yoga Mat",
    price: 22.5,
    category: "Fitness",
    inStock: false,
  },
  {
    id: 12,
    name: "Cotton T-Shirt",
    price: 12.99,
    category: "Clothing",
    inStock: true,
  },
  {
    id: 13,
    name: "Laptop Stand",
    price: 27.99,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 14,
    name: "Sunglasses",
    price: 19.99,
    category: "Accessories",
    inStock: false,
  },
  {
    id: 15,
    name: "Electric Kettle",
    price: 32.0,
    category: "Kitchen",
    inStock: true,
  },
  {
    id: 16,
    name: "Notebook",
    price: 3.99,
    category: "Stationery",
    inStock: true,
  },
  {
    id: 17,
    name: "Ballpoint Pens",
    price: 4.5,
    category: "Stationery",
    inStock: true,
  },
  {
    id: 18,
    name: "Mobile Tripod",
    price: 14.49,
    category: "Photography",
    inStock: true,
  },
  {
    id: 19,
    name: "Table Clock",
    price: 16.0,
    category: "Home Decor",
    inStock: false,
  },
  {
    id: 20,
    name: "Hand Cream",
    price: 6.5,
    category: "Personal Care",
    inStock: true,
  },
  {
    id: 21,
    name: "Perfume Spray",
    price: 24.99,
    category: "Personal Care",
    inStock: true,
  },
  {
    id: 22,
    name: "Face Wash",
    price: 7.99,
    category: "Personal Care",
    inStock: false,
  },
  {
    id: 23,
    name: "Portable Fan",
    price: 11.99,
    category: "Daily Use",
    inStock: true,
  },
  {
    id: 24,
    name: "Winter Jacket",
    price: 59.0,
    category: "Clothing",
    inStock: false,
  },
  {
    id: 25,
    name: "Microwave Oven",
    price: 160.0,
    category: "Kitchen",
    inStock: true,
  },
  {
    id: 26,
    name: "Rice Cooker",
    price: 48.0,
    category: "Kitchen",
    inStock: true,
  },
  {
    id: 27,
    name: "Basketball",
    price: 21.99,
    category: "Sports",
    inStock: false,
  },
  { id: 28, name: "Football", price: 17.49, category: "Sports", inStock: true },
  {
    id: 29,
    name: "Car Phone Holder",
    price: 8.99,
    category: "Automotive",
    inStock: true,
  },
  {
    id: 30,
    name: "Tire Pressure Gauge",
    price: 6.0,
    category: "Automotive",
    inStock: false,
  },
];

const HomeProductTable = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStock, setSelectedStock] = useState("all");
  const [products, setProducts] = useState(productItems);

  //= Search Product ==========
  const matchedProducts =
    selectedCategory !== "all"
      ? products?.filter((product) => product.category === selectedCategory)
      : selectedStock !== "all"
      ? products?.filter((product) =>
          selectedStock === "yes" ? product.inStock : !product.inStock
        )
      : products?.filter((product) =>
          product.name
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase())
        );

  //= Category Item ==========
  const categories = [...new Set(products?.map((item) => item.category))];

  //= Single Select ==========
  const handleSingleSelect = (id) => {
    const matchedId = selectedItems.includes(id);
    if (matchedId) {
      const removeId = selectedItems.filter((selectedId) => selectedId !== id);
      setSelectedItems(removeId);
    } else {
      setSelectedItems((prev) => [...prev, id]);
    }
  };

  //= Multiple Select ==========
  const handleMultipleSelect = () => {
    if (selectedItems?.length === products?.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(products?.map((pd) => pd.id));
    }
  };

  return (
    <div className="mb-5">
      <div className="shadow-xl p-2 mb-5 grid grid-cols-4 gap-4 items-center">
        <div className="flex column flex-col">
          <label className="text-start">Product Search</label>
          <input
            type="search"
            placeholder="search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setSelectedItems([]);
              setSelectedCategory("all");
              setSelectedStock("all");
            }}
            className="border p-2 outline-0 rounded-lg"
          />
        </div>

        <div className="flex column flex-col">
          <label className="text-start">Product Category</label>
          <div className="border p-2 outline-0 rounded-lg">
            <select
              className="w-full outline-0 cursor-pointer"
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSelectedStock("all");
                setSelectedItems([]);
                setSearchText("");
              }}
            >
              <option value="all">All</option>
              {categories?.map((category) => (
                <option value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex column flex-col">
          <label className="text-start">Product inStock</label>
          <div className="border p-2 outline-0 rounded-lg">
            <select
              className="w-full outline-0 cursor-pointer"
              onChange={(e) => {
                setSelectedStock(e.target.value);
                setSelectedCategory("all");
                setSelectedItems([]);
                setSearchText("");
              }}
            >
              <option value="all">All</option>
              <option value="yes">Active</option>
              <option value="no">DeActive</option>
            </select>
          </div>
        </div>
        <div className="flex column flex-col">
          <label className="text-start">Settings</label>
          <div className="border p-2 outline-0 rounded-lg flex items-center justify-end gap-2">
            <div className="cursor-pointer">
              <FileText size={20} />
            </div>
            <div className="cursor-pointer">
              <Sheet size={20} />
            </div>
            <div className="cursor-pointer" onClick={() => window.print()}>
              <Printer size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="shadow-2xl p-2">
        <table className="w-full">
          <thead className="border-b-1 border-gray-200">
            <tr>
              <th>
                <div className="flex items-center gap-2 ms-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    id="AllSl"
                    onChange={handleMultipleSelect}
                    checked={selectedItems.length === products.length}
                  />
                  <label htmlFor="AllSl" className="cursor-pointer">
                    {" "}
                    Sl.
                  </label>
                </div>
              </th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Instock</th>
            </tr>
          </thead>

          <tbody>
            {matchedProducts?.length === 0 ? (
              <tr className="text-start">No data found!</tr>
            ) : (
              matchedProducts?.map((product, index) => (
                <tr>
                  <td className={index === 0 ? "pt-3" : ""}>
                    <div className="flex items-center gap-2 ms-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="cursor-pointer"
                        id={"Sl" + index + 1}
                        checked={selectedItems.includes(product?.id)}
                        onChange={() => handleSingleSelect(product.id)}
                      />
                      <label
                        htmlFor={"Sl" + index + 1}
                        className="cursor-pointer"
                      >
                        {index + 1}
                      </label>
                    </div>
                  </td>
                  <td className={index === 0 ? "pt-3" : ""}>{product?.name}</td>
                  <td className={index === 0 ? "pt-3" : ""}>
                    {product?.price}
                  </td>
                  <td className={index === 0 ? "pt-3" : ""}>
                    {product?.category}
                  </td>
                  <td
                    className={`
                      ${product?.inStock ? "text-green-600" : "text-red-600"}
                      ${index === 0 ? "pt-3" : ""}
                    `}
                  >
                    {product?.inStock ? "Active" : "DeActive"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeProductTable;
