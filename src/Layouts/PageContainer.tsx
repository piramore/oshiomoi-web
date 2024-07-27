import React, { ReactNode } from "react";

interface IProps {
  children?: ReactNode | ReactNode[];
}

export default function PageContainer({ children }: IProps) {
  return <div className="p-3">{children}</div>;
}
