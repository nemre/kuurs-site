import * as Utils from '../utils'

export default function Sidebar(props) {
  return (
    <div class='flex flex-col items-center justify-between text-white p-2'>
      <a href='#' class='bg-white bg-opacity-0 hover:bg-opacity-10 p-2 rounded-2xl m-2'>
        <svg class='w-6 h-6 fill-current'>
          <path d={Utils.Icons.kuurs} />
        </svg>
      </a>
      <div style='height: 480px' class='overflow-y-auto text-center'>
        {props.courses.map((course) => {
          return (
            <a href={course.url} class='flex flex-col bg-white items-center bg-opacity-0 hover:bg-opacity-10 p-2 rounded-2xl'>
              <svg class='w-10 h-10 p-2 rounded-2xl fill-current' style={'background-color:' + course.color}>
                <path d={Utils.Icons[course.slug]} />
              </svg>
              <span class='truncate w-14'>{course.name}</span>
            </a>
          )
        })}
      </div>
      <a href='#' class='bg-white bg-opacity-0 hover:bg-opacity-10 p-2 rounded-2xl m-2'>
        <svg class='w-6 h-6 fill-current'>
          <path d={Utils.Icons.edit} />
        </svg>
      </a>
    </div>
  )
}
