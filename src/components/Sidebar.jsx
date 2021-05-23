function Sidebar(props) {
  return (
    <Col class={classNames(props.class, props.defaultClass)}>
      <IconButton />
      <Col class="flex-grow overflow-y-auto bg-white">
        <span>courseButton</span>
        <span>courseButton</span>
      </Col>
      <IconButton />
    </Col>
  )
}

Sidebar.defaultProps = {
  defaultClass: 'p-2 items-center'
}

export default Sidebar
