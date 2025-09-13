interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const Container = ({children, className}:ContainerProps) => {
    return (
        <div className={`${className} mx-auto max-w-4xl`}>
            {children}
        </div>
    )
}