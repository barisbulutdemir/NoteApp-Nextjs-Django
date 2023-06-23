import React from 'react'
import Link from 'next/link'

const ListItem = ({ note }) => {
  return (
    <div>
      <Link href={`/notes/${note.id}`}>
        <div className='notes-list-item'>
        <h3>{note.body}</h3>
        </div>
        </Link>
    </div>
  )
}

export default ListItem