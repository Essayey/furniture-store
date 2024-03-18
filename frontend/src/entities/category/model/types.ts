export type Property = {
  id:number,
  name:string,
  options: string[],
  description:string,
  optional:boolean
}
export type Category = {
  id: number;
  parentId: number;
  name: string;
  description: string;
  childCategories: Category[];
  properties:
};
