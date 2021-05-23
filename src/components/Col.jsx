function Col(props) {
  return (
    <div class={classNames(props.class, props.defaultClass)}>
      {props.children}
    </div>
  )
}

Col.defaultProps = {
  defaultClass: 'flex flex-col'
}

export default Col
