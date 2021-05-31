import * as Utils from '../utils'

export default function Header(props) {
  return (
    <div class='flex'>
      <a href='#' class='flex text-red-500'>
        <svg class='w-6 h-6 fill-current'>
          <path d={Utils.Icons.video} />
        </svg>
        <span>Kurslar</span>
      </a>
      <a href='#' class='flex'>
        <svg class='w-6 h-6 fill-current'>
          <path d={Utils.Icons.helpCircle} />
        </svg>
        <span>Sorular</span>
      </a>
    </div>
  )
}
