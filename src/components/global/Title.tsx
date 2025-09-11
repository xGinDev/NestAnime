import React from "react";

interface Props {
  title?: string;
  ep?: number;
}

const Title = ({ title, ep }: Props) => {
  return (
    <div
      className={`text-xl lg:text-2xl font-bold uppercase mb-4 text-[#eaeae0] border-l-4 border-[#6D1D7D] pl-2`}
    >
      <h2>
        {title}
        {ep && <span> - E{ep}</span>}
      </h2>
    </div>
  );
};

export default Title;
