import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const NotePage = () => {
    const param = useParams()
    let noteId = param.id

    const [note, setNote] = useState([])

    useEffect(()=> {
      getNote()
  }, [])

    let getNote = async () => {
      let response = await fetch(`/notes/${noteId}`);
      let data = await response.json()
      setNote(data)
    }

  return (
    <div>
       {note.body}
    </div>
  )
}

export default NotePage
