import style from './index.css'

export default function (props) {
  return (
    <div class={style.header}>
      {props.pages.map((page) => (
        <a href={page.url}>
          <svg>
            <path d={page.icon} fill={'#' + page.color} />
          </svg>
          <span>{page.name}</span>
        </a>
      ))}
    </div>
  )
}
