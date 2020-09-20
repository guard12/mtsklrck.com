import { useTheme, makeStyles  } from '@material-ui/core/styles'
import { Avatar, Typography, Grid, Divider} from '@material-ui/core'
import { GitHub, LinkedIn, Twitter } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    text: {
        color: theme.palette.text.primary,
    },
    subtitle: {
        color: theme.palette.text.secondary,
    },
    icons: {
      color: theme.palette.text.primary,
      display: "grid",
    },
    icon: {
        marginRight: "5px",
    },
    card: {
        justifyContent: "center",
        marginTop: "100px",
        color: theme.palette.text.primary,
    },
  }))

export function Card() {
    const classes = useStyles();
    return <Grid
        container
        alignItems="center"
        className={classes.card}
    >
        <div style={{ display: "flex" }}>
            <Avatar alt="MK" src="/images/profile.jpg" style={{ width: "80px", height: "80px", border: "1px solid #333", marginRight: "20px"}}/>
            <div>
            <Typography variant="h5">Matus Kollarcik</Typography>
            
            <Typography variant="subtitle1" className={classes.subtitle}>Software developer</Typography>
            </div>
            <Divider light orientation="vertical" flexItem style={{ backgroundColor: "#fff", margin: "0px 20px 0px 20px" }}/>
            <div className={classes.icons}>
                <div style={{display: "flex"}}><GitHub className={classes.icon}/> <span className={classes.subtitle}>@guard12</span></div>
                <div style={{display: "flex"}}><LinkedIn className={classes.icon}/><span className={classes.subtitle}>@matuskollarcik</span></div>
                <div style={{display: "flex"}}><Twitter className={classes.icon}/><span className={classes.subtitle}>@matuskollarcik</span></div>
            </div>
        </div>
    </Grid>
}