import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type LogoProps = {
  color? : string
}

export const Logo = ({color} : LogoProps) => {
  return (
    <Link href="/">
      {color === 'white' ? (
        <Image 
        src="/white-logo.svg"
        alt='logo'
        width={114}
        height={64}
      />
      ) : (
      <Image 
       src="/sinc-logo.svg"
       alt='logo'
       width={114}
       height={64}
       />
      )}
    </Link>
  )
}
