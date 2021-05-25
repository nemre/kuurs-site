function IconAnchor(props) {
  return (
    <a href={props.href} class={classNames(props.class, props.defaultClass)}>
      <Icon name={props.icon} />
    </a>
  )
}

IconAnchor.defaultProps = {
  href: '/',
  defaultClass: 'p-2 flex rounded-2xl hover:bg-purple-400 text-white'
}

export default IconAnchor
