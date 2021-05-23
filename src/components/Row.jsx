function Row(props) {
  return (
    <div class={classNames(props.class, props.defaultClass)}>
      {props.children}
    </div>
  )
}

Row.defaultProps = {
  defaultClass: 'flex'
}

export default Row
