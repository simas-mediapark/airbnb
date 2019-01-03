import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import colors from '../styles/colors'
import InputField from '../components/form/InputField'
import NextArrowButton from '../components/buttons/NextArrowButton'
import Notification from '../components/form/Notification'
import TriangleButton from '../components/buttons/TriangleButton';
import Loader from '../components/form/Loader'
import user from '../data/user.json'
import { setLoggedInState } from '../redux/LogInState/LogInActions'
import { connect } from 'react-redux'

class LogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formValid: true,
            validEmail: false,
            email: '',
            password: '',
            validPassword: false,
            loadingVisible: false
        }

        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleCloseNotification = this.handleCloseNotification.bind(this)
        this.handleNextButton = this.handleNextButton.bind(this)
    }

    handleNextButton() {
        this.setState({ loadingVisible: true })
        setTimeout(() => {
            const { email, password } = this.state
            if (email === user.email && password === user.password) {
                setLoggedInState(true)
                this.setState({ formValid: true, loadingVisible: false },
                    () => setLoggedInState(true),
                    console.log(this.props.loggedInState))
            } else {
                this.setState({ formValid: false, loadingVisible: false },
                    () => setLoggedInState(false),
                    console.log(this.props.loggedInState))
            }
        }, 2000)
    }

    handleCloseNotification() {
        this.setState({ formValid: true })
    }

    handleEmailChange(email) {
        const emailCheckRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        this.setState({ email })
        if (!this.state.validEmail) {
            if (emailCheckRegex.test(email)) {
                this.setState({ validEmail: true })
            }
        } else {
            if (!emailCheckRegex.test(email)) {
                this.setState({ validEmail: false })
            }
        }
    }

    handlePasswordChange(password) {
        this.setState({ password })
        if (!this.state.validPassword) {
            if (password.length > 4) {
                this.setState({ validPassword: true })
            }
        } else if (password.length <= 4) {
            this.setState({ validPassword: false })
        }
    }

    toggleNextButtonState() {
        const { validEmail, validPassword } = this.state
        if (validEmail && validPassword) {
            return false
        }
        return true
    }

    render() {
        const { formValid, loadingVisible, validEmail, validPassword } = this.state
        const showNotification = formValid ? false : true
        const notificationMarginTop = showNotification ? 10 : 0
        return (
            <LinearGradient
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                style={{ flex: 1 }}
                colors={formValid ? ['#008388', '#104446'] : ['#d93900', '#9D3814', '#6F280F']}>
                <KeyboardAvoidingView
                    style={styles.wrapper}
                    behavior="padding"
                >
                    <View style={styles.scrollViewWrapper}>
                        <ScrollView
                            style={styles.scrollView}
                        >
                            <Text style={styles.logInHeader}>Log In</Text>
                            <InputField
                                labelText="EMAIL ADDRESS"
                                labelTextSize={14}
                                labelColor={colors.white}
                                textColor={colors.white}
                                borderBottomColor={colors.white}
                                inputType="email"
                                customStyle={{ marginBottom: 20 }}
                                onChangeText={this.handleEmailChange}
                                showCheckmark={validEmail}
                                autoFocus={true}
                                autoCapitalize={'none'}
                            />
                            <InputField
                                labelText="PASSWORD"
                                labelTextSize={14}
                                labelColor={colors.white}
                                textColor={colors.white}
                                borderBottomColor={colors.white}
                                inputType="password"
                                onChangeText={this.handlePasswordChange}
                                showCheckmark={validPassword}
                            />
                        </ScrollView>
                        <View style={[styles.arrowButton, this.state.formValid ? { zIndex: 10 } : {}]}>
                            {this.state.formValid ? (
                                <NextArrowButton
                                    handleNextButton={this.handleNextButton}
                                    disabled={this.toggleNextButtonState()}
                                />
                            ) : (
                                    <TriangleButton />
                                )}
                        </View>
                        <View style={[styles.notificationWrapper, { marginTop: notificationMarginTop }]}>
                            <Notification
                                showNotification={showNotification}
                                handleCloseNotification={this.handleCloseNotification}
                                type="Error"
                                firstLine="Those credentials don't look right."
                                secondLine="Please try again."
                            />
                        </View>
                    </View>
                    <Loader
                        visible={loadingVisible}
                        animationType="fade"
                    />
                </KeyboardAvoidingView>
            </LinearGradient>


        )
    }
}

LogIn.propTypes = {


}

const styles = StyleSheet.create({
    arrowButton: {
        alignItems: 'flex-end',
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    wrapper: {
        flex: 1,
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1
    },
    logInHeader: {
        fontSize: 34,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40
    },
    scrollView: {
        paddingLeft: 30,
        paddingRight: 30,
        flex: 1
    },
    notificationWrapper: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 9
    }
})

const mapStateToProps = state => ({
    loggedInState: state.logInState.loggedInState,
})

export default connect(mapStateToProps)(LogIn)