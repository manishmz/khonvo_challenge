import React, { Fragment, useState } from "react";
import "./Collapsible.css";

const Collapsible = props => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Fragment>
      <div className="collapsible" onClick={handleClick}>
        {props.header}
        <span className="arrow">{isOpen ? "⯅" : "⯆"}</span>
      </div>
      <div className={isOpen ? "display-block" : "display-none"}>
        {props.children}
      </div>
    </Fragment>
  );
};

export default Collapsible;
