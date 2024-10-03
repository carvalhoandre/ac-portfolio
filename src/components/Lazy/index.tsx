import { FC, Suspense } from "react";

import { ILazyProps } from "./types";

import { Loader } from "../Loader";

const Lazy: FC<ILazyProps> = ({ component: Component, children }) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component>{children}</Component>
    </Suspense>
  );
};

export { Lazy };
