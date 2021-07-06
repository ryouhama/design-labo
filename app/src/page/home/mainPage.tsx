import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { AppLayout } from 'component/layout/appLayout'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      border: '1px solid #333'
    }
  })
)

export const MainPage = () => {
  const classes = useStyles()
  return (
    <AppLayout>
      <div className={classes.main}>Home</div>
    </AppLayout>
  )
}
