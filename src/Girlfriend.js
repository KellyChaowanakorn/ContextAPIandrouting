export const Girlfriend = (props) => {
  return (
    <div>{props.name} {props.isSingle && <div> Wow she is single</div>}</div>
  )
}