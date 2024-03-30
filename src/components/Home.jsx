import React from 'react'
import NoteInput from './noteInput'
import NoteDisplay from './noteDisplay'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center p-2'>
      <NoteInput />
      <NoteDisplay />
    </div>
  )
}

export default Home