function Icon(props) {
  return <div class={classNames(props.class, props.defaultClass)} />
}

Icon.defaultProps = {
  defaultClass: 'h-6 w-6 rounded-2xl bg-pink-500'
}

export default Icon
