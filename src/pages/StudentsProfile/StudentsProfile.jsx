import { useContext } from 'react'
import StudentsContext from '../../context/StudentsContext'
import StudentsList from '../../components/Students/StudentsList'
import { BottomBorderInput } from '../../components/Inputs/Inputs'
import styles from './studentsProfile.module.css'


const StudentsProfiles = () => {
  const { students, search, handleSearch } = useContext(StudentsContext)
  return (
    <div className={styles.page}>
      <div className={styles.main_card}>
        <BottomBorderInput
          extraClasses={styles.search_input}
          placeholder='Search By Name'
          name='name'
          value={search.name}
          handleChange={handleSearch} />
        <BottomBorderInput
          extraClasses={styles.search_input}
          placeholder='Search By Tag'
          name='tag'
          value={search.tag}
          handleChange={handleSearch} />
        <StudentsList
          search={search}
          students={students} />
      </div>
    </div >
  )
}

export default StudentsProfiles