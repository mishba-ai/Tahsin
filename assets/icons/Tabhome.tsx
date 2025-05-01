import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

interface TabHomeProps extends SvgProps {
  stroke?: string;
}

const Tabhome = ({ stroke = "#000", ...props }: TabHomeProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path
      d="m16 2.594-.719.687-13 13L3.72 17.72 5 16.437V28h9V18h4v10h9V16.437l1.281 1.282 1.438-1.438-13-13Zm0 2.844 9 9V26h-5V16h-8v10H7V14.437Z"
      style={{
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeDashoffset: 0,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        fill: stroke, // Using the stroke prop for fill color
        fillRule: "nonzero",
        opacity: 1,
      }}
      transform="matrix(.73 0 0 .73 .32 .831)"
    />
  </Svg>
);

export default Tabhome;