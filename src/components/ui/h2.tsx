export interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const H2 = ({ className, ...props }: H2Props) => {
  return <h2 className={`text-5xl font-bold text-center ${className}`} {...props} />
}

export default H2;
