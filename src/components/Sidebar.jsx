function Sidebar(props) {
  return (
    <Col class={classNames(props.class, props.defaultClass)}>
      <IconAnchor icon="kuurs" class="m-2" />
      <Col class="flex-grow overflow-y-auto mx-2">
        {props.courses.map((course) => {
          return (
            <a class="flex flex-col items-center hover:bg-purple-400 rounded-2xl p-2 no-underline text-white" href={course.url}>
              <Icon class="bg-white rounded-2xl p-2" name={course.slug} />
              <span style="width: 64px; text-align:center; line-height: 1.5rem;" class="truncate font-medium">
                {course.name}
              </span>
            </a>
          )
        })}
      </Col>
      <IconAnchor href="settings" icon="settings" class="m-2" />
    </Col>
  )
}

Sidebar.defaultProps = {
  defaultClass: 'items-center'
}

export default Sidebar
