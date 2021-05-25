function Sidebar(props) {
  return (
    <Col class={classNames(props.class, props.defaultClass)}>
      <IconAnchor icon="slack" />
      <Col class="flex-grow overflow-y-auto">
        <span>x</span>
        <span>x</span>
        <span>x</span>
      </Col>
      <IconAnchor href="settings" icon="settings" />
    </Col>
  )
}

Sidebar.defaultProps = {
  defaultClass: 'p-2 items-center'
}

export default Sidebar
