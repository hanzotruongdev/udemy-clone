import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";





export interface ICoursesPageProps {
}

export default async function CoursesPage(props: ICoursesPageProps) {

  const { userId } = auth()

  if (!userId) {
    return redirect("/")
  }

  const courses = await db.course.findMany({
    where: {
      userId
    },
    orderBy: {
      createAt: "desc"
    }
  })

  return (
    <div className="p-6">

      <DataTable columns={columns} data={courses} />
    </div>
  );
}
