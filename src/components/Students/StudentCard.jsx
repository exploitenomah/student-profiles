import { useState, useContext } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import StudentsContext from '../../context/StudentsContext'
import StudentGrades from './StudentGrades'
import StudentTags from './StudentTags'
import { IconButton } from '../Buttons/Buttons'
import { BottomBorderInput } from '../Inputs/Inputs'
import styles from './students.module.css'




const StudentCard = (props) => {

  const [showGrades, setShowGrades] = useState(false)
  const [tagInput, setTagInput] = useState('')
  const { handleAddTag } = useContext(StudentsContext)
  const { el } = props
  const {
    id,
    grades,
    name,
    pic,
    email,
    company,
    skill,
    tags
  } = el
  const average = (grades
    .reduce((acc, grade) => +grade + acc, 0)) / grades.length
  const handleTagInputChange = (e) => {
    setTagInput(e.target.value)
  }
  const handleTagInputSubmit = (e) => {
    e.preventDefault()
    handleAddTag(id, tagInput)
    setTagInput('')
  }

  return (
    <li className={styles.student_card}>
      <figure className={styles.student}>
        <img className={styles.student_image} src={pic} alt={`${name}`} />
        <figcaption className={styles.student_details}>
          <p className={styles.student_name}>{name}</p>
          <dl className={styles.student_details_list}>
            <div className={styles.student_details_item}>
              <dt className={styles.student_details_item_key}>email:</dt>
              <dd>{email}</dd>
            </div>
            <div className={styles.student_details_item}>
              <dt className={styles.student_details_item_key}>company:</dt>
              <dd>{company}</dd>
            </div>
            <div className={styles.student_details_item}>
              <dt className={styles.student_details_item_key}>skill:</dt>
              <dd>{skill}</dd>
            </div>
            <div className={styles.student_details_item}>
              <dt className={styles.student_details_item_key}>average:</dt>
              <dd>{`${average}%`}</dd>
            </div>
          </dl>
          {<StudentTags tags={tags} />}
          <form onSubmit={(e) => handleTagInputSubmit(e)}>
            <BottomBorderInput
              extraClasses={styles.student_tag_input}
              name='add tag'
              placeholder='Add A Tag'
              handleChange={handleTagInputChange}
              value={tagInput} />
          </form>
          {
            showGrades &&
            <StudentGrades grades={grades} />
          }

        </figcaption >
      </figure >
      <IconButton
        extraClasses={styles.toggle_show_grades}
        Icon={showGrades ? FaMinus : FaPlus}
        onClick={() => setShowGrades(prev => !prev)} />
    </li >
  )
}

export default StudentCard