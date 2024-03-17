import { AppDispatch, RootState } from "@/app/providers";
import { useSelector, type TypedUseSelectorHook, useDispatch } from "react-redux";

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
