function Icon(props) {
  return (
    <svg class={classNames(props.class, props.defaultClass)}>
      <path d={icons[props.name]} />
    </svg>
  )
}

Icon.defaultProps = {
  defaultClass: 'fill-current h-6 w-6'
}

export default Icon
