function Home(props) {
  return (
    <html lang={props.lang}>
      <head>
        <title>{props.title}</title>
        <link rel="stylesheet" href={props.stylesheetHref} />
      </head>
      <body>
        <h1>Home</h1>
      </body>
    </html>
  )
}

Home.defaultProps = {
  lang: 'tr',
  title: 'Kuurs',
  stylesheetHref: 'index.css'
}

export default Home
