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
        <div class="flex-grow bg-white rounded-l-2xl flex flex-col">
          <Components.Header />
          <div class="overflow-y-auto">
            <div style="font-size: 24px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt ante at quam tincidunt fermentum. Sed euismod tortor blandit, commodo mi vitae, pulvinar eros. Proin eu convallis ligula, nec sollicitudin purus. Vestibulum dolor tellus, sagittis vitae quam vel, convallis ullamcorper ligula. Ut porttitor neque et tellus vestibulum condimentum. Curabitur id est metus. Vivamus orci dolor, bibendum sed aliquam id, pellentesque nec mauris. Ut dignissim quam non odio molestie bibendum. Vestibulum sit amet nibh facilisis, aliquam eros quis, aliquet ligula. Proin ac metus malesuada turpis tristique egestas. Cras nec semper turpis. In fringilla, felis vel tincidunt semper, dui erat egestas lorem, in faucibus velit elit ac nisl. Sed convallis dictum neque. Maecenas vehicula gravida tellus facilisis sodales. Quisque gravida eros a mi porta auctor. Cras accumsan massa sed lorem facilisis dignissim. Phasellus blandit nisl ligula. Donec risus nunc, sollicitudin vel viverra laoreet, rutrum sed orci. Aenean posuere felis lectus, non ullamcorper dui sodales a. Quisque placerat massa libero, non porta ligula fermentum nec. Donec libero lorem, blandit sed hendrerit eget, gravida et massa. Donec cursus eget ligula sit amet posuere. Sed eget cursus massa. Aliquam sodales enim a nibh sodales, in efficitur tellus porta. Duis eget nulla non risus bibendum sodales vitae sed magna. Vivamus magna lacus, sagittis condimentum porttitor eget, feugiat a eros. Aenean est lacus, eleifend at sollicitudin sit amet, aliquet placerat purus. Ut lacinia ex in lacus condimentum dictum. Donec at facilisis odio. Proin orci massa, vestibulum eu laoreet accumsan, bibendum vitae dui. Nulla dapibus mi blandit, tristique libero quis, bibendum justo. Aenean at ex non tellus congue tincidunt congue eu neque. Proin et lorem ac ipsum maximus rhoncus. Suspendisse augue tellus, vulputate a neque nec, vehicula tincidunt nisi. Phasellus dapibus, tortor maximus condimentum mollis, tortor diam accumsan tellus, a egestas leo turpis eu dolor. Sed lacinia lectus et urna imperdiet tincidunt. Nullam sit amet felis facilisis, imperdiet neque nec, hendrerit urna. Donec sit amet nunc sit amet dolor molestie congue. Suspendisse dui odio, fermentum in consectetur id, volutpat ac erat. Nam ut mi interdum lectus euismod suscipit at sed magna. Suspendisse pharetra ex sed risus auctor pretium. Mauris dapibus sapien ac magna tempus tempus. Praesent finibus at lorem at tristique. Duis a risus arcu. Mauris pharetra elementum dapibus. Curabitur dictum dapibus turpis, eget egestas ipsum rhoncus eu. Integer sem risus, euismod quis iaculis eu, facilisis non tellus. Maecenas pretium elementum accumsan. Maecenas pellentesque dictum purus. Fusce commodo vel quam id elementum.</div>
          </div>
        </div>
        <script src="index.js"></script>
      </body>
    </html>
  )
}
