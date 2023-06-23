"use client"



import React, { useEffect,useState } from 'react'
import { HiArrowLeft } from "react-icons/hi";

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const NotePage = () => {
  const [note, setNote] = useState();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    getNote();
  }, [pathname]);


  const getNote = async () => {
    const response = await fetch(`http://127.0.0.1:8000/${pathname}`)
    const data = await response.json();
    setNote(data);
    console.log(data);

  }


  const updateNote = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/${pathname}/update/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      });
  
      if (!response.ok) {
        throw new Error('Error updating note');
      }
  
      console.log('Note updated successfully');
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = () => {
    updateNote()

  }

  return (
      <>

          <div key={note?.id} className='note'>
            <div className='note-header'></div>
              <h3 className=''>
                <Link href="/">
                <HiArrowLeft onClick={handleSubmit}  />
                </Link>
                <button onClick={handleSubmit}>Save</button>
              </h3>

         <textarea
         onChange={(e) => {setNote({...note, 'body' :e.target.value})}}
         defaultValue={note?.body}></textarea>
          </div>
      </>
  )
}

export default NotePage