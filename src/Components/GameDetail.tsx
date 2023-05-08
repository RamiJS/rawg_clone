import { ReactNode } from "react";
import Platform from "../entities/Platform";

interface Details {
  title: string;
  children: ReactNode | number;
}

const GameDetail = ({ title, children }: Details) => {
  return (
    <div className="flex flex-col gap-2">
      <dt className="text-gray-400">{title}</dt>
      <dd>{children}</dd>
    </div>
  );
};

export default GameDetail;
