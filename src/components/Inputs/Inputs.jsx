
import styles from './inputs.module.css'

export const BottomBorderInput = (props) => {

  const {
    handleChange,
    value,
    name,
    extraClasses,
    placeholder } = props

  return (
    <input
      placeholder={placeholder}
      className={`${styles.bottom_border_input} ${extraClasses}`
      }
      name={name}
      onChange={(e) => handleChange(e)} value={value} />
  )
}