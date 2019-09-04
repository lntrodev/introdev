/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type SpeakerCardProps = {
  name: string
  children: React.ReactNode
  bg: string
  imageSrc: string
}

const SpeakerCard = ({ name, children, bg, imageSrc }: SpeakerCardProps) => (
  <div
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
    <img
      sx={{
        maxWidth: `100%`,
      }}
      src={imageSrc}
      alt={name}
    />
    <div
      sx={{
        letterSpacing: `wide`,
        pt: 2,
        fontSize: [2, 3],
        fontWeight: `medium`,
        lineHeight: 1,
      }}
    >
      {name}
    </div>
    <div sx={{ opacity: 0.75, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{children}</div>
  </div>
)

export default SpeakerCard
