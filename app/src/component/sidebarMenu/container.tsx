import { FC } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { MenuLink } from './menuLink'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sidebar: {
      listStyle: 'none',
      border: '1px solid #333',
      position: 'sticky',
      padding: '4px'
    }
  })
)

const pageList = [
  { url: '/', name: 'ホーム' },
  { url: 'demo#1', name: 'デモ1' },
  { url: 'demo#2', name: 'デモ2' },
  { url: 'demo#3', name: 'デモ3' }
]

export const SidebarMenu: FC = () => {
  const classes = useStyles()

  return (
    <nav className={classes.sidebar}>
      <ul>
        {pageList.map(
          (page, i) => <MenuLink key={i} href={page.url} name={page.name}/>
        )}
      </ul>
    </nav>
  )
}
