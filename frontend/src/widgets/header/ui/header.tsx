import { Link } from "react-router-dom";
import { headerItems } from "../model/headerItems";
import { HeartIcon, IconFlavor, LogoutIcon, ShoppingIcon } from "@/shared/assets";
import { Input, Select, SelectTrigger, SelectValue } from "@/shared/ui";
import { MapPin, SearchIcon } from "lucide-react";
import { Routes } from "@/shared/consts";

export const Header = () => {
  return (
    <header>
      <nav className="p-4 pr-16">
        <ul className="flex justify-between text-xl">
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
      <div className="flex gap-20 items-center">
        <div className="h-20 w-[776px]  bg-accentTertiary rounded-r-[32px] flex items-center p-4 justify-between text-white">
          <div className="flex items-center">
            <IconFlavor />
            <Link to={Routes.main} className=" text-center">
              <div className="text-4xl font-philosopher">Roomika</div>
              <div>Мебельная компания</div>
            </Link>
          </div>
          <Select>
            <SelectTrigger className="flex p-6 justify-between w-[280px] text-2xl h-[48px] border-none focus:ring-0 rounded-xl bg-accentQuaternary">
              <SelectValue placeholder="Каталог" />
            </SelectTrigger>
          </Select>
        </div>
        <div className="relative ">
          <Input
            placeholder="Поиск по сайту"
            className="px-20 w-[601px] text-2xl h-[80px] rounded-[32px]"
          />
          <SearchIcon width={32} height={32} className="absolute -translate-y-14 right-16" />
        </div>
        <Link to={Routes.cart}>
          <ShoppingIcon width={50} height={50} />
        </Link>
        <Link to={Routes.cart}>
          <HeartIcon width={50} height={50} />
        </Link>

        <LogoutIcon className="cursor-pointer" width={50} height={50} />
      </div>
    </header>
  );
};
