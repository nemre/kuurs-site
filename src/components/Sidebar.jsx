function Sidebar(props) {
  return (
    <Col class={classNames(props.class, props.defaultClass)}>
      <IconButton icon="slack" />
      <Col class="flex-grow overflow-y-auto bg-white">
        <Icon class="h-10 w-10" />
        <Icon class="h-10 w-10" />
        <Icon class="h-10 w-10" />
      </Col>
      <IconButton icon="settings" />
    </Col>
  )
}

Sidebar.defaultProps = {
  defaultClass: 'p-2 items-center'
}

export default Sidebar
