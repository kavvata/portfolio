import type { FunctionComponent, PropsWithChildren } from "react"

interface AnchorProps {
  href?: string
}


export const Anchor: FunctionComponent<PropsWithChildren<AnchorProps>> = ({ children, href = "#" }) => {
  return (
    <a href={href} className='text-zinc-100 font-bold hover:text-sky-200 transition-colors' >
      {children}
    </a >
  )
}

