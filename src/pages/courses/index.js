import Layout from '../../components/layout/index.js'

export default function (props) {
  return (
    <Layout courses={props.courses} pages={props.pages}>
      Courses
    </Layout>
  )
}
