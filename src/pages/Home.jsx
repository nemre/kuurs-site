import * as Components from '../components'
import * as Utils from '../utils'

export default function Home(props) {
  return (
    <html lang='tr' class='h-full'>
      <head>
        <title>Kuurs</title>
        <link rel='stylesheet' href='index.css' />
      </head>
      <body class='flex bg-purple-500 h-full font-medium'>
        <Components.Sidebar courses={props.courses} />
        <div class='bg-white flex-grow rounded-l-2xl'>
          <Components.Header />
        </div>
        <script src='index.js'></script>
      </body>
    </html>
  )
}
