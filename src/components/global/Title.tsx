import React from "react";

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <div className="text-2xl font-bold uppercase mb-4 text-[#eaeae0] border-l-4 border-[#6D1D7D] pl-2">
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
