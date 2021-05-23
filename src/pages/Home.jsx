function Home(props) {
  return (
    <html lang={props.lang}>
      <head>
        <title>{props.title}</title>
        <link rel="stylesheet" href={props.stylesheetHref} />
      </head>
      <body>
        <h1 class={classNames(styles.test)}>Home</h1>
        <script src={props.scriptHref}></script>
      </body>
    </html>
  )
}

Home.defaultProps = {
  lang: 'tr',
  title: 'Kuurs',
  stylesheetHref: 'index.css',
  scriptHref: 'index.js'
}

export default Home
