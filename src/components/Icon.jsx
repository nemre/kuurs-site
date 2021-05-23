function Icon(props) {
  return (
    <svg viewBox={props.viewBox} class={classNames(props.class, props.defaultClass)}>
      <path d={icons[props.name]} />
    </svg>
  )
}

Icon.defaultProps = {
  defaultClass: 'fill-current h-6 w-6',
  viewBox: '0 0 24 24'
}

export default Icon
