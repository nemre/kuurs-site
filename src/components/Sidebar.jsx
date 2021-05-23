function Sidebar(props) {
  return (
    <Col class={classNames(props.class, props.defaultClass)}>
      <span>iconButton</span>
      <Col class="flex-grow overflow-y-auto bg-white">
        <span>courseButton</span>
        <span>courseButton</span>
      </Col>
      <span>iconButton</span>
    </Col>
  )
}

Sidebar.defaultProps = {
  defaultClass: 'p-2'
}

export default Sidebar
