import React, { useEffect, useState } from "react";
import FavItems from "./FavItems";
import ProductCard from "./ProductCard";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "../Loader";
import FilteredComponent from "../FilteredComponent";
import Products from "./Products";

const AuctionContainer = ({ bidProducts, setBidProducts }) => {
  const tableHead = ["Items", "Current Bid", "Time Left", "Bid Now"];
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedFiltering, setSelectedFeltering] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchValue = () => {
    setSearchQuery(inputValue);
  };

  useEffect(() => {
    try {
      setIsLoading(true);
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const fadeIN = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  };

  const filteredProducts = products.filter((product) => {
    const { title } = product;
    const newProduct =
      title.toLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
      title.toLowerCase().includes(inputValue.toLocaleLowerCase());
    return newProduct;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (selectedFiltering === "A-Z") {
      return a.title.localeCompare(b.title);
    }
    if (selectedFiltering === "Z-A") {
      return b.title.localeCompare(a.title);
    }
    if (selectedFiltering === "Low-High") {
      return a.currentBidPrice - b.currentBidPrice;
    }
    if (selectedFiltering === "High-Low") {
      return b.currentBidPrice - a.currentBidPrice;
    }
  });

  return (
    <div className="w-full bg-background text-black py-10 ">
      <div className="w-10/12 mx-auto  space-y-1 ">
        <h2 className="text-foreground text-2xl font-semibold">
          Active Auction
        </h2>
        <p className="text-sm text-foreground">
          Discover and bid on extraordinary items
        </p>
        <FilteredComponent
          products={products}
          inputValue={inputValue}
          setInputValue={setInputValue}
          selectedFiltering={selectedFiltering}
          setSelectedFeltering={setSelectedFeltering}
          handleSearchValue={handleSearchValue}
        />
        <div className="flex  flex-col sm:flex-row gap-5 mt-5 ">
          <div className="basis-2/3  p-5 bg-muted rounded-2xl">
            {sortedProducts.length === 0 ? (
              <div className="flex h-full items-center justify-center text-foreground">
                <p>No Data found here</p>
              </div>
            ) : (
              <table className="rounded-lg w-full">
                <thead className="">
                  <tr className="text-foreground grid grid-cols-5 gap-3 py-3  px-3">
                    {tableHead.map((heading, index) => (
                      <th
                        key={index}
                        className={
                          index === 0
                            ? "col-span-2 text-left"
                            : "col-auto text-center"
                        }
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="">
                  {isLoading ? (
                    <tr>
                      <td>
                        <Loader />
                      </td>
                    </tr>
                  ) : (
                    <Products
                      sortedProducts={sortedProducts}
                      bidProducts={bidProducts}
                      setBidProducts={setBidProducts}
                      item={item}
                      container={container}
                      selectedFiltering={selectedFiltering}
                      searchQuery={searchQuery}
                    />
                  )}
                </tbody>
              </table>
            )}
          </div>
          <div className="bg-muted rounded-2xl px-3 py-5 basis-1/3 h-fit">
            <FavItems
              bidProducts={bidProducts}
              setBidProducts={setBidProducts}
              fadeIN={fadeIN}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionContainer;
