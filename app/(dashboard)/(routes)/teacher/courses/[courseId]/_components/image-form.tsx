"use client"

import FileUpload from "@/components/file-upload"
import { Button } from "@/components/ui/button"
import { Course } from "@prisma/client"
import axios from "axios"
import { Edit, ImageIcon, PlusCircle } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"
import * as z from "zod"

export interface IImageFormProps {
  initialData: Course,
  courseId: string
}

const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Image is required"
  })
})

export function ImageForm(props: IImageFormProps) {

  const router = useRouter()


  const [isEditing, setIsEditing] = useState(false)

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/courses/${props.courseId}`, values)
      toast.success("Course updated")
      toggleEdit()
      router.refresh()
    } catch (error) {
      toast.error("Something wrong")
    }
  }

  const toggleEdit = () => setIsEditing((pre) => !pre)

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course image
        <Button
          onClick={toggleEdit}
          variant={"ghost"}>
          {
            isEditing && (
              <>Cancel</>
            )
          }
          {
            !isEditing && !props.initialData.imageUrl && (
              <>
                <PlusCircle className="w-4 h-4 mr-2" />
                Add image
              </>
            )
          }
          {
            !isEditing && props.initialData.imageUrl && (
              <>
                <Edit className="h-4 w-4 mr-2" />
                Edit image
              </>
            )
          }

        </Button>
      </div>

      {!isEditing &&
        (!props.initialData.imageUrl ? (
          <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
            <ImageIcon className="w-10 h-10 text-slate-500" />
          </div>
        ) : (
          <div className="relative aspect-video mt-2">
            <Image
              src={props.initialData.imageUrl || ""}
              alt="Upload"
              fill
              className="object-cover rounded-md"
            />
          </div>
        ))}

      {
        isEditing && (
          <div>
            <FileUpload
              endpoint="courseImage"
              onChange={(url) => {
                if (url) {
                  onSubmit({ imageUrl: url })
                }
              }}
            />

            <div className="text-sm text-muted-foreground mt-4">
              16:9 aspect ratio recommended
            </div>
          </div>
        )
      }
    </div>
  );
}
