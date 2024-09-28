import React from "react";

type IDefaultProps = {
  testId?: string;
};

interface IComponent<T = {}> extends React.FC<IDefaultProps & T> {}

export default IComponent;
