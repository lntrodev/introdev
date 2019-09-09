/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

type IconProps = {
  rotation: string
}

const Icon = ({ rotation }: IconProps) => (
  <svg
    viewBox="0 0 830 1024"
    aria-labelledby="clsi-ant-double-right-title"
    id="si-ant-double-right"
    width="15"
    height="15"
    sx={{
      alignSelf: 'flex-start',
      display: 'flex',
      marginTop: '.3rem',
      transform: `rotateZ(${rotation}deg)`,
      transformOrigin: 'center',
      transition: 'transform .5s ease-in-out'
    }}
  >
    <path
      fill="#fff"
      d="M266 9q-10 10-10 23t10 23l482 457-482 457q-10 10-10 23t10 23q10 9 24
9t24-9l506-480q10-10 10-23t-10-23L314 9q-10-9-24-9t-24 9zM10 9Q0 19 0 32t10
23l482 457L10 969Q0 979 0 992t10 23q10 9 24 9t24-9l506-480q10-10 10-23t-10-23L58
9Q48 0 34 0T10 9z"
    ></path>
  </svg>
)

export default Icon
