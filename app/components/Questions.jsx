'use client'

import Button from '../components/Button'

import { useState } from 'react'

export default function Questions({ questions, index }) {
  const [hide, setHide] = useState(false)

  const handleHide = () => {
    console.log('runing')
    setHide((prevState) => !prevState)
  }
  return (
    <div key={questions.index}>
      <h1>{questions.question}</h1>

      {hide && <p>{questions.answer}</p>}

      <Button onClick={handleHide}>click me</Button>
    </div>
  )
}
