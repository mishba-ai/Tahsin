import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface TabcommunityProps extends SvgProps {
  stroke?: string;
}

const Tabcommunity =  ({ stroke = "#000", ...props }: TabcommunityProps )=> (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path
      strokeLinecap="round"
      d="M5 6.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-4.5 7h9v-.542A4.51 4.51 0 0 0 4.796 8.5 4.51 4.51 0 0 0 .5 12.958v.542Zm8.5-7a2.5 2.5 0 0 0 0-5m2.5 12h2v-.542A4.51 4.51 0 0 0 10 8.609"
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
export default Tabcommunity
