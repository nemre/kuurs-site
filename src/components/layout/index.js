import Header from '../../components/header/index.js'
import Sidebar from '../../components/sidebar/index.js'
import style from './index.css'

export default function (props) {
  return (
    <html class={style.layout} lang="tr">
      <head>
        <link href="index.css" rel="stylesheet" />
        <title>Kuurs</title>
        <meta content="initial-scale=1, width=device-width" name="viewport" />
      </head>
      <body>
        <Sidebar items={props.courses} />
        <div>
          <Header pages={props.pages} />
          <div>{props.children}</div>
        </div>
      </body>
    </html>
  )
}
