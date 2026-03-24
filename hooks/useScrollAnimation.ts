'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export const useScrollAnimation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return { ref, inView }
}