



const Filterer = (props) => {
  const { arr, criteria, ReturnElement } = props
  const finalArr = arr.filter(el => criteria(el))
  return (
    <>
      {finalArr.map((el, idx) => (
        <ReturnElement key={Math.random() * idx} el={el} />
      ))}
    </>
  )
}

export default Filterer