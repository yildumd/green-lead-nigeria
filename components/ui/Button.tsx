import { forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
} & Omit<HTMLMotionProps<"button">, "ref" | "children" | "className">

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className = '', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 transform hover:scale-105'
    
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl',
      secondary: 'bg-secondary text-white hover:bg-secondary/90',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }
    
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button