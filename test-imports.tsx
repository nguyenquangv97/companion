import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
// Unused import
import { useMemo } from 'react'

const TestImports = () => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    console.log('test')
  }, [])

  return (
    <div>
      <Link href="/test">Test Link</Link>
      <p>{count}</p>
    </div>
  )
}

export default TestImports