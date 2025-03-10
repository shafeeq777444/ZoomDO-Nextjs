'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="flex h-screen w-fit flex-col  justify-between   p-6 pt-28 text-white max-sm:hidden  lg:w-[264px]  rounded-2xl">
      <div className=" fixed flex flex-1 flex-col gap-6 bg-[#393760] h-screen p-6 pt-28 px-10 rounded-2xl">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex gap-4 text-white items-center p-4 rounded-lg justify-start',
                {
                  'bg-[#2E2C54]': isActive,
                }
              )}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={18}
                height={18}
              />
              <p className="text-sm font-semibold max-lg:hidden ">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;