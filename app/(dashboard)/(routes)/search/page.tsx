import { getCourses } from "@/actions/get-courses"
import { CoursesList } from "@/components/courses-list"
import { SearchInput } from "@/components/search-input"
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import { Categories } from "./_components/categories"


export default async function SearchPage(searchParams: {
  title?: string,
  categoryId?: string
}) {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc"
    }
  })

  const { userId } = auth()

  if (!userId) return redirect('/')

  const courses = await getCourses({ userId, ...searchParams })

  return (
    <>
      <div className="px-6 pt-6 block md:hidden md:mb-0 ">
        <SearchInput />
      </div>
      <div className="p-6 space-y-6">
        {/* categories */}
        <Categories
          items={categories}
        />

        {/* courses list */}
        <CoursesList items={courses} />
      </div>
    </>
  )
}