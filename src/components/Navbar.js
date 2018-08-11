import React from 'react';
import { connect } from 'react-redux';
import { AppBar, Toolbar, IconButton, Typography, Button, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import People from '@material-ui/icons/People'
import Apps from '@material-ui/icons/Apps'
import {Icon} from 'react-fa';
import PropTypes from 'prop-types';

class Navbar extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>

                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Dashboard
                        </Typography>

                        <IconButton className={classes.appsButton} color="inherit" aria-label="Menu">
                            <People /><span className={classes.counts} >{this.props.apps.counts.devices}</span>
                        </IconButton>
                        <IconButton className={classes.appsButton} color="inherit" aria-label="Menu">
                            <Apps /><span className={classes.counts}>{this.props.apps.counts.totalApps}</span>
                        </IconButton>
                        <Button color="inherit">{this.props.user.name}</Button>

                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    appsButton: {
        fontSize: '.9rem',
        marginTop: -7
    },
    counts: {
        display: 'inline-block',
        marginLeft: 5,
        paddingTop: 2
    }
};

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(
    state => ({ apps: state.apps, user: state.auth.user })
)(withStyles(styles)(Navbar));