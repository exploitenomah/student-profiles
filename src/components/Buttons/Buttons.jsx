
import styles from './buttons.module.css'

export const IconButton = (props) => {

  const { Icon, onClick, extraClasses } = props

  return (
    <button
      className={`${styles.icon_button} ${extraClasses}`}
      onClick={() => onClick()}>
      <Icon />
    </button>
  )
}