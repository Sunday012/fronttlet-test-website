import React from 'react'
import { Logo } from './logo'
import Link from 'next/link'
import Button from './button'
import Image from 'next/image'

const NavLinks = [
    {href: "/", text: "About"},
    {href: "/", text: "SIP"},
    {href: "/", text: "Studio"},
    {href: "/", text: "SEEQ"},
    {href: "/", text: "Platforms"},
    {href: "/", text: "Initiatives"},
    {href: "/", text: "More"},
]

export default function Navbar() {
  return (
    <div className='bg-[#F9F9F9] flex items-center justify-center h-[98px]'>
        <div className='flex items-center justify-between w-[90%]'>
            <div className="flex items-center justify-center gap-[24px]">
             <Logo />
             <div className="space-x-[24px] hidden lg:flex">
                {
                    NavLinks.map((link, id) => (
                     <Link key={id} href={link.href}>
                      {link.text}
                     </Link>
                    ))
                }
             </div>
            </div>
            <div className='gap-[12px] hidden md:flex'>
              <Button color='blue'>
                SINC With Us
              </Button>
              <Button color="grey">
               Apply to SIP 1.0
              </Button>
            </div>
            <div className="flex md:hidden">
              <Image
              src="/hamburger.svg"
              alt='ham'
              width={24}
              height={24}
              />
            </div>
        </div>
    </div>
  )
}
