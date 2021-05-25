function Sidebar(props) {
  return (
    <Col class={classNames(props.class, props.defaultClass)}>
      <span>x</span>
      <Col class="flex-grow overflow-y-auto">
        <span>x</span>
        <span>x</span>
        <span>x</span>
      </Col>
      <span>x</span>
    </Col>
  )
}

Sidebar.defaultProps = {
  defaultClass: 'p-2 items-center'
}

export default Sidebar
