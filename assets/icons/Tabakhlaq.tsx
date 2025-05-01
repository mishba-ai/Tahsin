import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface TabakhlaqProps extends SvgProps {
  stroke?: string;
}

const Tabakhlaq =  ({ stroke = "#000", ...props }: TabakhlaqProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path
      d="M0 0h24v24H0z"
      style={{
        stroke: "none",
        strokeWidth: 2,
        strokeDasharray: "none",
        strokeLinecap: "round",
        strokeDashoffset: 0,
        strokeLinejoin: "round",
        strokeMiterlimit: 4,
        fill: 'none',
        fillRule: "nonzero",
        opacity: 1,
      }}
    />
    <Path
      strokeLinecap="round"
      d="M19.5 12.572 12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"
      style={{
        stroke: stroke,
        strokeWidth: 2,
        strokeDasharray: "none",
        strokeLinecap: "round",
        strokeDashoffset: 0,
        strokeLinejoin: "round",
        strokeMiterlimit: 4,
        fill: 'none',
        fillRule: "nonzero",
        opacity: 1,
      }}
    />
    <Path
      strokeLinecap="round"
      d="M12 6 8.707 9.293a1 1 0 0 0 0 1.414l.543.543c.69.69 1.81.69 2.5 0l1-1a3.182 3.182 0 0 1 4.5 0l2.25 2.25m-7 3 2 2M15 13l2 2"
      style={{
        stroke: stroke,
        strokeWidth: 2,
        strokeDasharray: "none",
        strokeLinecap: "round",
        strokeDashoffset: 0,
        strokeLinejoin: "round",
        strokeMiterlimit: 4,
        fill: stroke,
        fillRule: "nonzero",
        opacity: 1,
      }}
    />
  </Svg>
)
export default Tabakhlaq
