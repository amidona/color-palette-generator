import React from "react";
import CssOptionsList from "./CssOptionsList";
import SelectedCssOption from "./SelectedCssOption";

const CssOptions = (props) => (
  <div>
    <h2>CSS Color Options</h2>
    <div className="color-options-row"></div>
    <CssOptionsList selectColor={props.selectColor} />
    <SelectedCssOption
      palette={props.palette}
      selectedColor={props.selectedColor}
      addToPalette={props.addToPalette}
    />
  </div>
);

export default CssOptions;
