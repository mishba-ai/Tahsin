import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface TabjournalProps extends SvgProps {
  stroke?: string;
}

const Tabjournal =  ({ stroke = "#000", ...props }: TabjournalProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path
      d="M12 2C8.698 2 6 4.698 6 8v33.418C6 44.592 8.832 47 12 47v-2c-2.158 0-4-1.622-4-3.582C8 39.458 9.8 38 12 38h32V2H12zm0 2h22v32H12a6.41 6.41 0 0 0-4 1.418V8c0-2.22 1.78-4 4-4zm24 0h6v32h-6V4zM14 40v9a1 1 0 0 0 1.6.8l3.4-2.55 3.4 2.55A1 1 0 0 0 24 49v-9h-2v7l-2.4-1.8a1 1 0 0 0-1.2 0L16 47v-7h-2zm12 5v2h18v-2H26z"
      style={{
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeDashoffset: 0,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        fill: stroke,
        fillRule: "nonzero",
        opacity: 1,
      }}
      transform="matrix(.42 0 0 .42 1.5 1.08)"
    />
  </Svg>
)
export default Tabjournal
