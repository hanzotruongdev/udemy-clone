import { getProgress } from '@/actions/get-progress';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import * as React from 'react';
import { CourseNavbar } from './_components/course-navbar';
import CourseSidebar from './_components/course-sidebar';

export interface ICourseLayoutProps {
  children: React.ReactNode,
  params: {
    courseId: string
  }
}

export default async function CourseLayout({ children, params }: ICourseLayoutProps) {

  const { userId } = auth()

  if (!userId) redirect('/')

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
        include: {
          userProgress: {
            where: {
              userId,
            }
          }
        },
        orderBy: {
          position: "asc"
        }
      },
    },
  });


  if (!course) return redirect("/")

  const progressCount = await getProgress(userId, course.id)



  return (
    <div className='h-full'>
      <div className='h-[80px] md:pl-80 fixed inset-y-0 w-full z-50'>
        <CourseNavbar
          course={course}
          progressCount={progressCount}

        />
      </div>
      {/* side bar */}
      <div className='hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50'>
        {/* course sidebar */}
        <CourseSidebar
          course={course}
          progressCount={progressCount} />
      </div>
      {/* main */}
      <main className='md:pl-80 pt-[80px] h-full'>
        {children}
      </main>
    </div>
  );
}
