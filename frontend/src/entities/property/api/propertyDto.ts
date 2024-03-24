import { Property } from "..";

export type AllPropertiesDtoResponse = Property[];
export type AllPropertiesDtoRequest = void;

export type PropertyByIdDtoResponse = Property;
export type PropertyByIdDtoRequest = { id: number };

export type FindAllPropertiesByCategoryIdDtoResponse = Property[];
export type FindAllPropertiesByCategoryIdRequest = { id: number | null };

export type CreatePropertyDtoResponse = Property;
export type CreatePropertyDtoRequest = Pick<
  Property,
  "name" | "options" | "description" | "optional"
>;

export type PathPropertyByIdDtoResponse = Property;
export type PathPropertyByIdDtoRequest = Partial<Property>;

export type DeletePropertyByIdDtoResponse = void;
export type DeletePropertyByIdDtoRequest = { id: number };
