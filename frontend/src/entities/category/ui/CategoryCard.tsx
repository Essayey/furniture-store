import { Card, CardContent } from "@/shared/ui";
type CategoryCardProps = {
  name: string;
  description: string;
  onClick: (category: number) => void;
  id: number;
};
export const CategoryCard = (props: CategoryCardProps) => {
  const { description, name, onClick, id } = props;
  console.log(name);
  return (
    <Card className=" h-64 select-none">
      <CardContent
        onClick={() => onClick(id)}
        className="w-full h-full flex flex-col justify-center items-center cursor-pointer hover:bg-slate-300"
      >
        <div>{name}</div>
        <div>{description}</div>
      </CardContent>
    </Card>
  );
};
