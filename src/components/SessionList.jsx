import React, { useContext } from 'react'
import { SessionContext } from '../context/SessionContext'
import SessionCard from './SessionCard'

const SessionList = () => {
  const {session} = useContext(SessionContext)
  return (
    <div className='pt-20 px-8 py-2 bg-zinc-800 w-full h-screen text-white flex flex-col gap-4'>
      <h2 className='font-semibold text-2xl '>Study Sessions</h2>

      {session.length === 0 && <p>No sessions yet</p>}

      <div className='grid grid-cols-[4fr_4fr] gap-5'>
        {session.map((session) => (
        <SessionCard key={session.id} session={session} />
      ))}
      </div>
    </div>
  )
}

export default SessionList