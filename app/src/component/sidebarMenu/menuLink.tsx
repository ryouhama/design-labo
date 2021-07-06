import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

type Props = {
  href: string
  name: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sliderList: {
      padding: '2px',
      listStyle: 'none',
      border: '1px solid #333'
    },
    textLink: {
      border: '1px solid #333'
    },
    text: {
      color: '#007bff'
    },
    pageLink: {
      border: '1px solid #333',
      '&:hover': {
        background: '#d3d3d3'
      }
    },
    linkPage: {
      color: '#808080',
      textDecoration: 'none'
    }
  })
)

export const MenuLink: FC<Props> = (props: Props) => {
  const { href, name } = props
  const classes = useStyles()
  const location = useLocation()

  const renderText = () => {
    return (
      <div className={classes.textLink}>
        <div className={classes.text}>
          {name}
        </div>
      </div>
    )
  }

  const renderLink = () => {
    return (
      <div className={classes.pageLink}>
        <Link className={classes.linkPage} to={href}>
          {name}
        </Link>
      </div>
    )
  }

  return (
    <li className={classes.sliderList}>
      {location.pathname === href ? renderText() : renderLink()}
    </li>
  )
}
