function Home(props) {
  return (
    <html lang="tr" class="h-full">
      <head>
        <title>Kuurs</title>
        <link rel="stylesheet" href="index.css" />
      </head>
      <body class={classNames(props.class, props.defaultClass)}>
        <Sidebar
          courses={[
            { name: 'figma', url: 'figma-dersleri' },
            { name: 'svelte', url: 'svelte-dersleri' }
          ]}
        />
        <Col class="flex-grow rounded-l-2xl bg-white" />
        <script src="index.js"></script>
      </body>
    </html>
  )
}

Home.defaultProps = {
  defaultClass: 'm-0 flex h-full bg-purple-500'
}

export default Home
