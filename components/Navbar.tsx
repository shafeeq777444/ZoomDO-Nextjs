import Image from 'next/image';
import Link from 'next/link';
// import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';
import { SignedIn, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
   
      <nav className="flex fixed z-50 w-screen bg-[#393760]  px-6 py-4 lg:px-10 gap-2 m-4 rounded-2xl">
        <div className="flex-between gap-5">
        <MobileNav />
      
      
        </div>
      
        <Link href="/" className="flex items-center justify-between w-full">
          <div className=' flex items-center gap-4 '>
            <Image
              src="/icons/logo.png"
              width={40}
              height={22}
              alt="yoom logo"
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-[#DFDFE5] max-sm:hidden">
              ZoomDO
            </p>
          </div>
        <div className=''>
          <SignedIn>
              <UserButton afterSignOutUrl="/sign-in" />
              {/* check uses or working afterSignoutUrl */}
            </SignedIn>
        </div>
        </Link>
      
      
      
      </nav>
   
  );
};

export default Navbar;