function Sidebar(props) {
  return <Col class={classNames(props.class, props.defaultClass)}>sol</Col>
}

Sidebar.defaultProps = {
  defaultClass: 'p-2'
}

export default Sidebar
