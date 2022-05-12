


import {
  createContext,
  useState,
  useEffect
} from 'react'
import { fetchData } from '../utils/fetch.util'

const StudentsContext = createContext({ students: [] })

export const StudentsProvider = ({ children }) => {

  const [students, setStudents] =
    useState(JSON.parse(sessionStorage.getItem('students')) || [])

  const [search, setSearch] = useState({
    name: '',
    tag: ''
  })

  const handleAddTag = (id, newTag) => {
    const updStudents = students.map(student => {
      if (student.id === id) {
        return {
          ...student,
          tags: !student.tags.includes(newTag)
            ? [...student.tags, newTag] : student.tags
        }
      } else return student
    })
    sessionStorage.setItem('students', JSON.stringify(updStudents))
    setStudents(updStudents)
  }

  const handleSearch = (e) => {
    setSearch((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(process.env.REACT_APP_STUDENTS_URL)
      const students = data.students?.map(student => ({
        ...student,
        name: `${student.firstName} ${student.lastName}`,
        tags: []
      }))
      sessionStorage.setItem('students', JSON.stringify(students))
      setStudents(students)
    }
    students.length === 0 && getData()
  }, [students.length])

  const value = {
    students,
    search,
    handleSearch,
    handleAddTag
  }

  return (
    <StudentsContext.Provider value={value}>
      {children}
    </StudentsContext.Provider >
  )
}

export default StudentsContext