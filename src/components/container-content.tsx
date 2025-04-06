
export interface ContainerContentProps extends React.HTMLAttributes<HTMLDivElement> {
} 
const ContainerContent = ({ children,className, ...props }:ContainerContentProps) => {
  return (
    <div className={"container max-w-6xl h-full px-4 sm:px-4 xl:px-0 flex flex-col "+ className} {...props}>
      {children}
    </div>
  )
}

export default ContainerContent;