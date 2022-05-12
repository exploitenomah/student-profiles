

import styles from './students.module.css'

const StudentTags = (props) => {

  const { tags } = props

  return (
    <ul
      className={`
       ${styles.student_details_list}
       ${styles.student_details_tags}`}>
      {tags.map(tag => (
        <li
          className={styles.student_details_tag}
          key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  )
}

export default StudentTags