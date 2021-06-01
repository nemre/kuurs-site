import * as Components from '../components'
import * as Utils from '../utils'

export default function Home(props) {
  return (
    <html lang='tr' class='h-full'>
      <head>
        <title>Kuurs</title>
        <link rel='stylesheet' href='index.css' />
      </head>
      <body class='flex bg-purple-500 h-full'>
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
              <span class='flex-grow'>Bu akşam ne öğrenmek istersin?</span>
              <svg class='w-6 h-6 fill-current text-gray-300'>
                <path d={Utils.Icons.mic} />
              </svg>
            </div>
          </div>
        </div>
        <script src='index.js'></script>
      </body>
    </html>
  )
}
