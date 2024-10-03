import { ComponentType, LazyExoticComponent, ReactNode } from "react";

export interface ILazyProps {
  component: LazyExoticComponent<ComponentType<any>>;
  children?: ReactNode;
}
