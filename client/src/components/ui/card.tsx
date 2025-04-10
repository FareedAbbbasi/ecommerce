import React from 'react'

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card = ({children, className=""}: CardProps) => {
  return (
    <div className={`w-full max-w-[170px] h-auto min-h-[145px] rounded-[4px] border p-4 shadow-sm ${className}`}>
        {children}
    </div>
  )
}

export default Card