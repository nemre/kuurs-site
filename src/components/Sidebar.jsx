import * as Components from '.'

export default function Sidebar(props) {
  return (
    <div class='flex flex-col justify-between p-2'>
      <a href='/' class='p-2 rounded-2xl text-white flex m-2 hover:bg-purple-400'>
        <Components.Icon name='kuurs' />
      </a>
      <div style='height: 480px' class='overflow-y-auto font-medium'>
        {props.courses.map((course) => {
          return (
            <a class='rounded-2xl hover:bg-purple-400 flex flex-col text-white no-underline p-2' href={course.url}>
              <Components.Icon backgroundColor={course.color} class='p-2 rounded-2xl' name={course.slug} />
              <span class='leading-6 w-10 truncate text-center'>{course.name}</span>
            </a>
          )
        })}
      </div>
      <a href='/' class='p-2 rounded-2xl text-white flex m-2 hover:bg-purple-400'>
        <Components.Icon name='edit' />
      </a>
    </div>
  )
}
