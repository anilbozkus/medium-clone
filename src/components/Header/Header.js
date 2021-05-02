import React from 'react';
import Logo from '../../static/img/logo.svg'
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
    headerContainer: {
      height: 80,
      backgroundColor: '#FFC017',
      borderBottom: 'solid 1px rgba(41, 41, 41, 1)'
    },
    headerItem:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between',
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
    headerRight:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    buttonClass:{
        height: 38,
        borderRadius: '99em',
        boxShadow: 'none',
        fontWeight: 600
    },
    headerRightText:{
        marginRight:25
    }  
  }));

export default function Header(props){
    const classes = useStyles();
    return (
        <Grid container justify="center" className={classes.headerContainer}>
            <Grid item className={classes.headerItem}>
                <img src={Logo} alt="logo" style={{width:161}}/>
                <Grid item className={classes.headerRight}>
                    <Hidden xsDown>
                        <Typography variant="body2" className={classes.headerRightText}>
                            <Link to="/" style={{fontFamily:'HelveticaNeue'}}>
                            Our Story
                            </Link>
                        </Typography>
                        <Typography variant="body2" className={classes.headerRightText}>
                            <Link to="/" style={{fontFamily:'HelveticaNeue'}}>
                            Membership
                            </Link>
                        </Typography>
                        <Typography variant="body2" className={classes.headerRightText}>
                            <Link to="/" style={{fontFamily:'HelveticaNeue'}}>
                            Write
                            </Link>
                        </Typography>
                        <Typography variant="body2" className={classes.headerRightText}>
                            <Link to="/" style={{fontFamily:'HelveticaNeue'}}>
                            Sign In
                            </Link>
                        </Typography>
                    </Hidden>
                    <Button variant="contained" color="primary" className={classes.buttonClass}>
                        Get Started
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}