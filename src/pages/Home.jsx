import * as Components from '../components'
import * as Utils from '../utils'

export default function Home(props) {
  return (
    <html lang='tr' class='h-full'>
      <head>
        <title>Kuurs</title>
        <link rel='stylesheet' href='index.css' />
        <link rel='stylesheet' href='tailwind.css' />
      </head>
      <body class='h-full flex flex-col'>
        <span id='alert' class='flex bg-red-500 text-white p-2 font-medium justify-between'>
          <svg class='w-6 h-6 fill-current text-white'>
            <path d={Utils.Icons.alertTriangle} />
          </svg>
          <span>Kuurs geliştirme aşamasında olduğu için kararsız sonuçlara neden olabilir.</span>
          <div class='flex space-x-2 items-center justify-center'>
            <span class='text-red-200' id='exitTimer'>
              9s
            </span>
            <svg id='exitAlert' class='cursor-pointer w-6 h-6 fill-current text-white'>
              <path d={Utils.Icons.x} />
            </svg>
          </div>
        </span>
        <div class='flex-grow flex bg-purple-500'>
          <Components.Sidebar courses={props.courses} />
          <div class='bg-white flex-grow rounded-l-2xl'>
            <Components.Header />
            <div class='bg-gray-100 rounded-t-2xl p-10 pb-14'>
              <h1 class='text-4xl font-bold'>
                Tamamen <bold class='text-purple-500'>Ücretsiz</bold> ve Özgür
                <br />
                Kurs Deneyimini Burada Yaşayın!
              </h1>
              <div class='flex space-x-4 bg-white shadow-xl p-4 font-bold rounded-2xl mt-8' style='width: 600px'>
                <svg class='w-6 h-6 fill-current text-gray-300'>
                  <path d={Utils.Icons.search} />
                </svg>
                <span class='flex-grow text-gray-600 font-medium'>Bu akşam ne öğrenmek istersin?</span>
                <svg class='w-6 h-6 fill-current text-gray-300'>
                  <path d={Utils.Icons.mic} />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <script src='index.js'></script>
      </body>
    </html>
  )
}
