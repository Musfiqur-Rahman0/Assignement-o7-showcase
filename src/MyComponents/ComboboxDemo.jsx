("use client");

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const frameworks = [
  {
    value: "Low-High",
    label: "low-high",
  },
  {
    value: "High-Low",
    label: "high-low",
  },
  {
    value: "A-Z",
    label: "a-z",
  },
  {
    value: "Z-A",
    label: "z-a",
  },
];

export function ComboboxDemo({ selectedFiltering, setSelectedFeltering }) {
  const [open, setOpen] = React.useState(false);

  console.log(selectedFiltering);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between text-foreground"
        >
          {selectedFiltering
            ? frameworks.find(
                (framework) => framework.value === selectedFiltering
              )?.value
            : "Filter by"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setSelectedFeltering(
                      currentValue === selectedFiltering ? "" : currentValue
                    );
                    setOpen(false);
                  }}
                  className="text-foreground"
                >
                  {framework.value}
                  <Check
                    className={cn(
                      "ml-auto",
                      selectedFiltering === framework.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
