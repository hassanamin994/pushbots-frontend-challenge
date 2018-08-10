import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';

import authActions from '../actions/auth_actions';

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    onFormSubmit(e) {
        e.preventDefault();

        const { email, password } = this.state;

        if (email && password) {
            this.props.login(email, password)
        }

    }

    render() {
        const { auth, classes } = this.props;

        if (auth.authenticated && auth.access_token) {
            return <Redirect to="/" />
        }

        return (
            <div className={classes.container}>
                {this.renderContent()}
            </div>
        );
    }


    renderContent() {
        const { classes, auth } = this.props;

        return (
            <Card>
                <form
                    noValidate
                    className={classes.formContainer}
                    id="login-form"
                    onSubmit={this.onFormSubmit.bind(this)} >

                    <h2>Login</h2>

                    <TextField
                        type="email"
                        label="Email"
                        id="email"
                        className={classes.textField}
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                        required
                    />
                    <TextField
                        type="password"
                        label="Password"
                        id="password"
                        className={classes.textField}
                        value={this.state.password}
                        onChange={(e) => this.setState({ password: e.target.value })}
                        required
                    />
                    {auth.error &&
                        <span className={classes.errorMessageContainer + ' login-error'} >{auth.error}</span>
                    }

                    {this.renderSubmitButton()}
                </form>
            </Card>
        )
    }

    // Renders either the submit button or a spinner
    // depending on auth loading state
    renderSubmitButton() {
        const { auth, classes } = this.props;

        if (auth.loading) {
            return (
                <CircularProgress className={classes.loginButton} />
            )
        }

        return (
            <Button className={classes.loginButton} type="submit">Login</Button>
        )
    }


}


const styles = theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#eee'
    },
    formContainer: {
        width: 400,
        height: 400,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
        width: 250,
    },
    loginButton: {
        marginTop: 50
    },
    errorMessageContainer: {
        color: 'red',
        fontSize: '.8rem'
    }

})


Login.propTypes = {
    auth: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired
}

export default connect(
    state => ({ auth: state.auth }),
    authActions
)(
    withStyles(styles)(withRouter(Login))
)
