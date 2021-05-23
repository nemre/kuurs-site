function Home(props) {
  return (
    <html lang={props.lang}>
      <head>
        <title>{props.title}</title>
        <link rel="stylesheet" href={props.stylesheetHref} />
      </head>
      <body class={classNames(props.class, props.defaultClass)}>
        <Sidebar />
        <Col class="flex-grow rounded-l-2xl bg-white" />
        <script src={props.scriptHref}></script>
      </body>
    </html>
  )
}

Home.defaultProps = {
  lang: 'tr',
  title: 'Kuurs',
  stylesheetHref: 'index.css',
  scriptHref: 'index.js',
  defaultClass: 'flex h-full bg-purple-500 m-0'
}

export default Home
