import * as Components from '../components'

export default function Home(props) {
  return (
    <html lang="tr" class="h-full">
      <head>
        <title>Kuurs</title>
        <link rel="stylesheet" href="index.css" />
      </head>
      <body class="h-full flex m-0 bg-purple-500 font-sans">
        <Components.Sidebar courses={props.courses} />
        <div class="flex-grow bg-white rounded-l-2xl" />
        <script src="index.js"></script>
      </body>
    </html>
  )
}
