// import Paper from '@material-ui/core/Paper'
import { FC, ReactChild } from 'react'
import Grid from '@material-ui/core/Grid'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { SidebarMenu } from 'component/sidebarMenu/index'
import { Header } from 'component/header/index'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      border: '1px solid #333'
    },
    control: {
      padding: theme.spacing(2),
      flexGrow: 1,
      border: '1px solid #333',
      height: '600px'
    }
  })
)

interface Props {
  children: ReactChild
}

export const AppLayout: FC<Props> = (props: Props) => {
  const { children } = props
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header/>
      </Grid>
      <Grid item xs={12}>
        <Grid container className={classes.control} spacing={2}>
          <Grid item xs={3}>
            <SidebarMenu/>
          </Grid>
          <Grid item xs={9}>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
