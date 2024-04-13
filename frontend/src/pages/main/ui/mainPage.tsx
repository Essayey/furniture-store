import { CategorySelect } from "@/widgets/categorySelect";
import { memo } from "react";

export const MainPage = memo(() => {
  return (
    <div className="p-4">
      <CategorySelect />
    </div>
  );
});
