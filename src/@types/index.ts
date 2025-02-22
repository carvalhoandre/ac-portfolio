import React from "react";

export type IDefaultProps = {
  testId?: string;
};

 type IComponent<T = Record<string, unknown>> = React.FC<IDefaultProps & T>;

 export  default IComponent;
