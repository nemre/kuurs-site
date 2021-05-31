import classNames from 'classnames'

export default function Avatar(props) {
  return <img class={classNames(props.class, 'w-6 h-6 rounded-2xl')} src={props.src} />
}
