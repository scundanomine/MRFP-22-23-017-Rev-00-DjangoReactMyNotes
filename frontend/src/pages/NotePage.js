import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const NotePage = () => {
  const param = useParams()
  let noteId = param.id
  let navigate = useNavigate()

  const [note, setNote] = useState([])

  useEffect(() => {
    getNote()
  }, [])

  let getNote = async () => {
    let response = await fetch(`/notes/${noteId}`);
    let data = await response.json()
    setNote(data)
  }

  let updateNote = async () => {
    fetch(`/notes/${noteId}/update/`, { 
      method: "PUT", 
      headers:{'Content-Type': "application/json"}, 
      body: JSON.stringify(note) 
    })
  }

  let handleSubmit = () => {
    updateNote()
    navigate('/')
  }

  return (
    <div className='note'>
      <div className="note-header">
        <h3>
          <i onClick={handleSubmit} class="fa fa-angle-left fa-5x" aria-hidden="true"></i>
        </h3>
      </div>
      <textarea onChange={(e) => {setNote({...note, 'body': e.target.value})} } defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage
