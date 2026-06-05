import { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  staggerIndex = null,
  staggerDelay = 100,
  as: Component = 'div',
  ...rest
}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const el = ref.current
    if (el) {
      observer.observe(el)
    }

    return () => {
      if (el) {
        observer.unobserve(el)
      }
    }
  }, [threshold])

  const finalDelay = staggerIndex !== null ? staggerIndex * staggerDelay : delay

  let baseStyle = 'opacity-0'
  let revealedStyle = 'opacity-100'

  switch (animation) {
    case 'fade-up':
      baseStyle = 'opacity-0 translate-y-8'
      revealedStyle = 'opacity-100 translate-y-0'
      break
    case 'fade-down':
      baseStyle = 'opacity-0 -translate-y-8'
      revealedStyle = 'opacity-100 translate-y-0'
      break
    case 'fade-left':
      baseStyle = 'opacity-0 translate-x-8'
      revealedStyle = 'opacity-100 translate-x-0'
      break
    case 'fade-right':
      baseStyle = 'opacity-0 -translate-x-8'
      revealedStyle = 'opacity-100 translate-x-0'
      break
    case 'zoom-in':
      baseStyle = 'opacity-0 scale-95'
      revealedStyle = 'opacity-100 scale-100'
      break
    case 'zoom-out':
      baseStyle = 'opacity-0 scale-105'
      revealedStyle = 'opacity-100 scale-100'
      break
    case 'fade-in':
    default:
      baseStyle = 'opacity-0'
      revealedStyle = 'opacity-100'
      break
  }

  const style = {
    ...rest.style,
    transitionDuration: `${duration}ms`,
    transitionDelay: `${finalDelay}ms`
  }

  return (
    <Component
      ref={ref}
      className={`transition-all ease-out ${isIntersecting ? revealedStyle : baseStyle} ${className}`}
      {...rest}
      style={style}
    >
      {children}
    </Component>
  )
}
