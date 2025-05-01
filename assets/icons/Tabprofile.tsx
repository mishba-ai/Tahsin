import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"

interface TabprofileProps extends SvgProps {
  stroke?: string;
}

const Tabprofile = ({ stroke = "#000", ...props }: TabprofileProps)  => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Circle
      r={3.25}
      style={{
        stroke: stroke,
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "round",
        strokeDashoffset: 0,
        strokeLinejoin: "round",
        strokeMiterlimit: 4,
        fill: "none",
        fillRule: "nonzero",
        opacity: 1,
      }}
      transform="matrix(1.43 0 0 1.43 12 7.353)"
    />
    <Path
      strokeLinecap="round"
      d="M13.18 13.5a6.49 6.49 0 0 0-12.36 0Z"
      style={{
        stroke: stroke,
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "round",
        strokeDashoffset: 0,
        strokeLinejoin: "round",
        strokeMiterlimit: 4,
        fill: "none",
        fillRule: "nonzero",
        opacity: 1,
      }}
      transform="matrix(1.43 0 0 1.43 1.99 1.99)"
    />
  </Svg>
)
export default Tabprofile
