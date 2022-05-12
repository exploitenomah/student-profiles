
import StudentCard from './StudentCard'
import Filterer from '../Filterer'


const StudentsList = (props) => {
  const { students, search } = props
  const studentsFilter = (student) => {
    const name = search.name.trim().toLowerCase()
    const tag = search.tag.trim().toLowerCase()
    const studentTags = student.tags.join(' ').toLowerCase()
    const studentName = student.name.toLowerCase()
    if (tag.length > 0 && name.length > 0) {
      return (
        studentName.includes(name) && studentTags.includes(tag))
    } else if (name.length > 0 && tag.length === 0) {
      return (studentName.includes(name))
    } else if (name.length === 0 && tag.length > 0) {
      return (studentTags.includes(tag))
    } else {
      return true
    }
  }
  return (
    <ul>
      <Filterer
        arr={students}
        ReturnElement={StudentCard}
        elementKey='id'
        criteria={studentsFilter}
      />
    </ul >
  )
}

export default StudentsList