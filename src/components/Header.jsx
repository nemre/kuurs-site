import * as Components from '.'

export default function Header(props) {
  return (
    <div style='padding: 8px; display: flex;' class='font-bold leading-6'>
      <a href='/' class='m-2 no-underline p-2 rounded-2xl text-red-500 flex hover:bg-gray-100'>
        <Components.Icon name='video' />
        <span class='ml-2'>Kurslar</span>
      </a>
      <a href='/sorular' class='m-2 no-underline p-2 rounded-2xl text-black flex hover:bg-gray-100'>
        <Components.Icon name='helpCircle' class='text-yellow-500' />
        <span class='ml-2'>Sorular</span>
      </a>
      <a href='/makaleler' class='m-2 no-underline p-2 rounded-2xl text-black flex hover:bg-gray-100'>
        <Components.Icon name='fileText' class='text-green-500' />
        <span class='ml-2'>Makaleler</span>
      </a>
      <a href='/araclar' class='m-2 no-underline p-2 rounded-2xl text-black flex hover:bg-gray-100'>
        <Components.Icon name='briefCase' class='text-blue-500' />
        <span class='ml-2'>Araçlar</span>
      </a>
      <a href='/siralama' class='m-2 no-underline p-2 rounded-2xl text-black flex hover:bg-gray-100'>
        <Components.Icon name='barChart2' class='text-pink-500' />
        <span class='ml-2'>Sıralama</span>
      </a>
      <a href='/blog' class='m-2 no-underline p-2 rounded-2xl text-black flex hover:bg-gray-100'>
        <Components.Icon name='compass' class='text-purple-500' />
        <span class='ml-2'>Blog</span>
      </a>
      <a href='/kullanicilar/emre' style='margin-left: auto; padding-right: 16px' class='m-2 no-underline p-2 rounded-2xl text-black flex bg-gray-100 hover:bg-gray-200'>
        <Components.Avatar src='emreonal.jpg' />
        <span class='ml-2'>Emre</span>
      </a>
    </div>
  )
}
