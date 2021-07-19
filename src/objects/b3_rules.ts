import React, { FC } from "react"

export interface AccordionProps {
  title: FC
  id: string
  body: FC
  key: string
}

export const b3Rules: AccordionProps[] = [
  {
    title: () => <>Warning</>,
    body: () => (
      <>
        <p>
          Mountain biking and trail running is inherently dangerous. Do so at
          your own risk.
        </p>
      </>
    ),
  },
]
