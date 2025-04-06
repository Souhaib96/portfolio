import * as React from "react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ItemCardProps extends React.HTMLAttributes<HTMLHeadingElement> {
    title: string
    description: string,
    }



export function ItemCard({ title, description, className, ...props }: ItemCardProps) {
  return (
    <Card className={`p-4 bg-card/10 hover:bg-card/20 text-white border-0 ${className}`} {...props} >
      <CardHeader className=" text-primary m-0 p-0">
        <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="mb-0 p-0">
        {description}
      </CardContent>
    </Card>
  )
}

export default ItemCard


