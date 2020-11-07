import Image from 'next/image'

import { useTheme, makeStyles  } from '@material-ui/core/styles'
import { Avatar, Typography, Grid, Divider} from '@material-ui/core'
import { GitHub, LinkedIn, Twitter, Mail } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    text: {
        color: theme.palette.text.primary,
    },
    subtitle: {
        color: theme.palette.text.secondary,
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.text.primary,
        },
    },
    icons: {
      color: theme.palette.text.primary,
      display: "grid",
    },
    icon: {
        marginRight: "5px",
    },
    iconWrapper: {
        display: "flex",
        marginBottom: "5px",
        alignItems: "center",
    },
    pageLayout: {
        justifyContent: "center",
        marginTop: "100px",
        color: theme.palette.text.primary,
    },
    card: {
        display: "flex",
        border: "1px solid #333",
        borderRadius: "8px",
        padding: "32px",
    },
    avatar: {
        border: "1px solid #333",
        marginRight: "20px",
        borderRadius: "50%",
        width: "80px",
        height: "80px",
        overflow: "hidden",
    },
    divider: {
        background: "linear-gradient(#ec6192 4.44%,#ec4c34 21.45%,#ffbd2b 37.21%,#ebde56 54.63%,#57c754 70.8%,#53a1eb 84.07%) 0 100% transparent no-repeat",
        margin: "0px 20px 0px 20px",
    },
  }))

export function Card() {
    const classes = useStyles();
    return <Grid
        container
        alignItems="center"
        className={classes.pageLayout}
    >
        <div className={classes.card}>
            <div className={classes.avatar}>
                <Image alt="MK" src="/profile.jpg" priority width="80px" height="80px"/>
            </div>
            <div>
            <Typography variant="h5">Matus Kollarcik</Typography>
            
            <Typography variant="subtitle1" className={classes.subtitle}>Software developer | Team Leader</Typography>
            </div>
            <Divider light orientation="vertical" flexItem className={classes.divider}/>
            <div className={classes.icons}>
                <div className={classes.iconWrapper} >
                    <GitHub className={classes.icon}/>
                    <a href="https://github.com/guard12" target="_blank" className={classes.subtitle}>@guard12</a>
                </div>
                <div className={classes.iconWrapper}>
                    <LinkedIn className={classes.icon}/>
                    <a href="https://linkedin.com/in/matuskollarcik" target="_blank" className={classes.subtitle}>@matuskollarcik</a>
                </div>
                <div className={classes.iconWrapper}>
                    <Twitter className={classes.icon}/>
                    <a href="https://twitter.com/matuskollarcik" target="_blank" className={classes.subtitle}>@matuskollarcik</a>
                </div>
                <div className={classes.iconWrapper}>
                    <Mail className={classes.icon}/>
                    <a href="mailto:matus.kollarcik@gmail.com" className={classes.subtitle}>matus.kollarcik</a>
                </div>
            </div>
        </div>
    </Grid>
}