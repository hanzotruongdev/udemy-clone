"use client"

import { isTeacher } from '@/lib/teacher';
import { UserButton, useAuth } from '@clerk/nextjs';
import { LogOut } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { SearchInput } from './search-input';
import { Button } from './ui/button';

export interface INavbarRoutesProps {
}

export function NavbarRoutes(props: INavbarRoutesProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { userId } = useAuth()

  const isTecherPage = pathname?.startsWith("/teacher")
  const isCoursePage = pathname?.startsWith("/courses")
  const isSearchPage = pathname === "/search"


  return (
    <>
      {
        isSearchPage && (
          <div className='hidden md:block'>
            {/* Search input */}
            <SearchInput

            />
          </div>
        )
      }
      <div className='flex gap-x-2 ml-auto'>
        {isTecherPage || isCoursePage ? (
          <Button
            onClick={() => router.push('/')}
            size={"sm"}
            variant={"ghost"}
          >
            <LogOut className='h-4 w-6 mr-2' />
            Exit
          </Button>
        ) : isTeacher(userId) ? (
          <Button
            onClick={() => router.push("/teacher/courses")}
            size={"sm"}
            variant={"ghost"}
          >
            Teacher mode
          </Button>
        ) : null}
        <UserButton
          afterSignOutUrl='/'
        />
      </div>
    </>
  );
}
