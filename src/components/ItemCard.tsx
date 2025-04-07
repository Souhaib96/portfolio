import * as React from "react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Testimonial } from "@/type";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";

interface ItemCardProps extends React.HTMLAttributes<HTMLHeadingElement> {
    testimonial?: Testimonial;
    isModifiable?: boolean;
    }



export function ItemCard({ testimonial, isModifiable,className, ...props }: ItemCardProps) {
  
  const onModify = () => {
    redirect(`/testimonies/modify/${testimonial?.id}`);
  }
  return (
    <Card className={`p-4 bg-card/10 hover:bg-card/20 text-white border-0 ${className}`} {...props} >
      <CardHeader className=" text-primary m-0 p-0 flex flex-row justify-between gap-4">
        <CardTitle className="text-2xl font-semibold">{testimonial?.name}</CardTitle>
        { isModifiable &&
          <Button onClick={onModify}>
            Modifier
          </Button>
        }
      </CardHeader>
      <CardContent className="mb-0 p-0">
        {testimonial?.content}
      </CardContent>
    </Card>
  )
}

export default ItemCard


