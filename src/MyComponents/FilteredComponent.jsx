import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { ComboboxDemo } from "./ComboboxDemo";

const FilteredComponent = ({
  products,
  inputValue,
  setInputValue,
  setSelectedFeltering,
  selectedFiltering,
  handleSearchValue,
}) => {
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="flex items-center w-4/6 justify-between mt-5">
      <div className="w-2/3 flex items-center gap-3 text-foreground">
        <Input
          placeholder="Search products..."
          onChange={(e) => handleChange(e)}
        />
        <Button onKeyUp={handleSearchValue}>Search</Button>
      </div>
      <ComboboxDemo
        setSelectedFeltering={setSelectedFeltering}
        selectedFiltering={selectedFiltering}
      />
    </div>
  );
};

export default FilteredComponent;
