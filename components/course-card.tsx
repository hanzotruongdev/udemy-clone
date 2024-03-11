import { formatPrice } from "@/lib/format";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CourseProgress } from "./course-progress";
import IconBadge from "./icon-badge";


export interface ICourseCardProps {
  id: string,
  title: string,
  imageUrl: string,
  chaptersLength: number,
  progress: number | null,
  price: number,
  category: string
}

export function CourseCard({ id, title, imageUrl, chaptersLength, progress, price, category }: ICourseCardProps) {
  console.log("progress: ", progress)
  return (
    <Link href={`/courses/${id}`}>
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="relative w-full aspect-video rounded-sm overflow-hidden">
          <Image
            src={imageUrl}
            fill
            alt={title}
            className="object-cover"
          />
        </div>

        <div className="flex flex-col pt-2">
          <div className="text-g md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
            {title}
          </div>
          <p className="text-sx text-muted-foreground">
            {category}
          </p>
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-ss">
            <div className="flex items-center gap-x-1 text-slate-500">
              <IconBadge size={"sm"} icon={BookOpen} />
              <span>
                {chaptersLength} {chaptersLength === 1 ? "Chapter" : "Chapters"}
              </span>
            </div>
          </div>

          {progress !== null ? (
            <CourseProgress
              size="sm"
              variant={progress === 100 ? "success" : "default"}
              value={progress}
            />
          ) : (
            <p className="text-md md:text-sm font-medium text-slate=700">
              {formatPrice(price)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
