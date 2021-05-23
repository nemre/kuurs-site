function IconButton(props) {
  return (
    <div class={classNames(props.class, props.defaultClass)}>
      <Icon name={props.icon} />
    </div>
  )
}

IconButton.defaultProps = {
  defaultClass: 'p-2 rounded-2xl bg-red-500 cursor-pointer'
}

export default IconButton
