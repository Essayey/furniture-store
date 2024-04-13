import { Link } from "react-router-dom";
import { headerItems } from "../model/headerItems";
import { IconFlavor } from "@/shared/assets";
import { Input, Select, SelectTrigger, SelectValue } from "@/shared/ui";
import { MapPin, SearchIcon } from "lucide-react";

export const Header = () => {
  return (
    <header>
      <nav className="p-4">
        <ul className="flex justify-between">
          <div className="flex gap-20">
            {headerItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.itemName}</Link>
              </li>
            ))}
          </div>

          <div className="flex gap-20">
            <li className="flex gap-1">
              <MapPin />
              <div>Калуга</div>
            </li>
            <li>8(999)888-77-66</li>
          </div>
        </ul>
      </nav>
      <div className="flex gap-16">
        <div className="h-28 w-[776px] bg-accentTertiary rounded-r-[32px] flex items-center p-4 justify-between text-white">
          <div className="flex items-center">
            <IconFlavor />
            <div className=" text-center">
              <div className="text-5xl font-philosopher">Roomika</div>
              <div>Мебельная компания</div>
            </div>
          </div>
          <Select>
            <SelectTrigger className="flex p-6 justify-between w-[280px] text-2xl h-[74px] border-none focus:ring-0 rounded-xl bg-accentQuaternary">
              <SelectValue placeholder="Каталог" />
            </SelectTrigger>
          </Select>
        </div>
        <div className="relative ">
          <Input
            placeholder="Поиск по сайту"
            className="pl-18 w-[601px] text-3xl h-[115px] rounded-[32px]"
          />
          <SearchIcon width={42} height={42} className="absolute -translate-y-20 right-8" />
        </div>
      </div>
    </header>
  );
};
