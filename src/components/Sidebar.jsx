function Sidebar(props) {
  return (
    <Col class={classNames(props.class, props.defaultClass)}>
      <IconAnchor icon="slack" />
      <Col class="flex-grow overflow-y-auto">
        {props.courses.map((course) => {
          return <a href={course.url}>{course.name}</a>
        })}
      </Col>
      <IconAnchor href="settings" icon="settings" />
    </Col>
  )
}

Sidebar.defaultProps = {
  defaultClass: 'p-2 items-center'
}

export default Sidebar
