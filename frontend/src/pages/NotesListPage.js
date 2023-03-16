import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'

const NotesListPage = () => {
    const [notes, setNotes] = useState([])

    useEffect(()=> {
        getNotes()
    }, [])

    let getNotes = async () => {
        let response = await fetch("/notes/");
        let data = await response.json()
        setNotes(data)
    }

  return (
    <div>
       {notes.map((note, i) => (
        <ListItem key={i} note={note} />
       ))}
    </div>
  )
}

export default NotesListPage
