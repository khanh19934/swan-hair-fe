import React from "react";

interface IProps {
  title: string;
  buttonClassName?: string;
  titleClassName?: string;
}

const GenericButtonComponent: React.FC<IProps> = ({
  title = "",
  buttonClassName = "",
  titleClassName = ""
}) => {
  return (
    <div className={buttonClassName}>
      <p className={titleClassName}>{title}</p>
    </div>
  );
};

export default GenericButtonComponent;
