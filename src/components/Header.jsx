import * as Utils from '../utils'

export default function Header(props) {
  return (
    <div class='flex p-4 space-x-2 font-bold'>
      <a href='/' class='rounded-2xl flex text-red-500 p-2 bg-black bg-opacity-0 hover:bg-opacity-5 space-x-2'>
        <svg class='w-6 h-6 fill-current'>
          <path d={Utils.Icons.video} />
        </svg>
        <span>Kurslar</span>
      </a>
      <a href='sorular' class='rounded-2xl flex p-2 bg-black bg-opacity-0 hover:bg-opacity-5 space-x-2'>
        <svg class='w-6 h-6 fill-current text-blue-500'>
          <path d={Utils.Icons.helpCircle} />
        </svg>
        <span>Sorular</span>
      </a>
      <a href='makaleler' class='rounded-2xl flex p-2 bg-black bg-opacity-0 hover:bg-opacity-5 space-x-2'>
        <svg class='w-6 h-6 fill-current text-yellow-500'>
          <path d={Utils.Icons.fileText} />
        </svg>
        <span>Makaleler</span>
      </a>
      <a href='araclar' class='rounded-2xl flex p-2 bg-black bg-opacity-0 hover:bg-opacity-5 space-x-2'>
        <svg class='w-6 h-6 fill-current text-green-500'>
          <path d={Utils.Icons.briefCase} />
        </svg>
        <span>Araçlar</span>
      </a>
      <a href='siralama' class='rounded-2xl flex p-2 bg-black bg-opacity-0 hover:bg-opacity-5 space-x-2'>
        <svg class='w-6 h-6 fill-current text-pink-500'>
          <path d={Utils.Icons.barChart2} />
        </svg>
        <span>Sıralama</span>
      </a>
      <a href='blog' class='rounded-2xl flex p-2 bg-black bg-opacity-0 hover:bg-opacity-5 space-x-2'>
        <svg class='w-6 h-6 fill-current text-purple-500'>
          <path d={Utils.Icons.compass} />
        </svg>
        <span>Blog</span>
      </a>
      <a style='margin-left: auto' href='#' class='w-10 h-10'>
        <img class='rounded-2xl' src='user.png' />
      </a>
    </div>
  )
}
