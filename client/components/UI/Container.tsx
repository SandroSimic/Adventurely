interface ContainerProps {
  children: React.ReactNode;
  padding?: string;
  maxWidth?: string;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  padding = "px-5",
  maxWidth = "max-w-[90rem]",
  className = "",
}) => {
  return (
    <div className={`w-full mx-auto ${maxWidth} ${padding} ${className}`}>
      {children}
    </div>
  );
};
