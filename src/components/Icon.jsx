function Icon(props) {
  return (
    <svg class={classNames(props.class, props.defaultClass)}>
      <path fill={icons[props.name].fill} d={icons[props.name].path} />
    </svg>
  )
}

Icon.defaultProps = {
  defaultClass: 'fill-current h-6 w-6'
}

export default Icon
