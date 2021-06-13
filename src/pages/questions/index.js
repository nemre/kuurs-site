import Layout from '../../components/layout/index.js'

export default function (props) {
  return (
    <Layout sidebarItems={props.sidebarItems} pages={props.pages}>
      Questions
    </Layout>
  )
}
