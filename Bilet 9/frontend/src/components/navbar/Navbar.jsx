import React from "react";
import Navlist from "../navlist/Navlist";
import Wrapper from "../wrapper/Wrapper";
import Search from "../search/Search";

const Navbar = () => {
  return (
    <div className="navbar container">
      <Search />
      <Navlist />
      <Wrapper />
    </div>
  );
};

export default Navbar;
