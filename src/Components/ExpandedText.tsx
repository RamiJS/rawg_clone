import { useState } from "react";

interface Props {
  children: string;
}

const ExpandedText = ({ children }: Props) => {
  const Maximum = 300;
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  if (children.length <= Maximum) return <p>{children}</p>;

  return (
    <>
      <p>
        {expanded ? children : children.slice(0, Maximum) + "..."}
        <button
          className="px-4 rounded-full text-sm ml-3 bg-blue-800 text-white"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      </p>
    </>
  );
};

export default ExpandedText;
