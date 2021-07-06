import { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      border: '1px solid #333',
      padding: '20px',
      height: '100px'
    }
  })
)

export const Header: FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.header}>Header</div>
  )
}
