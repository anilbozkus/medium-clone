import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Background from '../../../static/img/banner-img.png'
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    bannerContainer: {
        backgroundColor: '#FFC017',
        borderBottom: 'solid 1px rgba(41, 41, 41, 1)'
    },
    bannerItem:{
        backgroundImage: `url(${Background})`,
        backgroundPosition:'right',
        backgroundRepeat:'no-repeat',
        backgroundSize: '417px 363px',
        backgroundPositionY: 'top',
        maxWidth:1330,
        width:'100%',
        [theme.breakpoints.down('xl')]: {
            margin: '0 64px',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '0 48px',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '0 24px',
        },
    },
    buttonClass:{
        height: 38,
        borderRadius: '99em',
        boxShadow: 'none',
        fontWeight: 600,
        marginTop:25,
        marginBottom:50,
        padding: '8px 20px'
    },
}));

export default function Banner(props){
    const classes = useStyles();

    return (
        <Grid container justify="center" className={classes.bannerContainer}>
            <Grid container className={classes.bannerItem}>
                <Grid item>
                    <Typography variant="h1" style={{marginTop:33}}>
                        Where good ideas <br /> find you
                    </Typography>
                    <Typography variant="body1" style={{marginTop:50}}>
                        Read and share new perspectives on just about any topic. Everyone’s <br /> welcome. <a href="./" style={{textDecoration:'underline', cursor:'pointer', fontSize:18, fontWeight:400}}>Learn more.</a>
                    </Typography>
                    <Button variant="outlined" color="primary" className={classes.buttonClass}>
                        Get Started
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}