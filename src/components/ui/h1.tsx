export interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const H1 = ({ className, ...props }: H1Props) => {
  return <h2 className={`text-6xl font-bold text-center ${className}`} {...props} />
}

export default H1;
