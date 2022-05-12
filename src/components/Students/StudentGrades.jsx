
import styles from './students.module.css'

const StudentGrades = (props) => {
  const { grades } = props
  return (
    <dl className={styles.student_details_list}>
      {grades.map((score, idx) => (
        <div key={score + idx} className={styles.student_details_item}>
          <dt
            className={styles.student_details_item_key}>{`test ${idx + 1}`}:
          </dt>
          <dd>{score}%</dd>
        </div>
      ))
      }
    </dl >
  )
}

export default StudentGrades