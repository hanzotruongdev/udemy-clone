import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export interface ICourseIdPageProps {
  params: {
    courseId: string
  }
}

export default async function CourseIdPage({ params }: ICourseIdPageProps) {

  const { userId } = auth()

  if (!userId) return redirect("/")


  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
        orderBy: {
          position: "asc"
        }
      }
    }
  })

  if (!course) return redirect("/");

  return redirect(`/courses/${course.id}/chapters/${course.chapters[0].id}`)

  return (
    <div>
      Course ID
    </div>
  );
}
