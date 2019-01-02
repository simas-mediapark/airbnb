import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import colors from '../styles/colors'
import PropTypes from 'prop-types'
import InputField from '../components/form/InputField'
import Notification from '../components/form/Notification'
import NextArrowButton from '../components/buttons/NextArrowButton'
import Loader from '../components/form/Loader'

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValid: true,
            loadingVisible: false,
            validEmail: false,
            email: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.goToNextStep = this.goToNextStep.bind(this)
        this.handleCloseNotification = this.handleCloseNotification.bind(this)
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

    goToNextStep() {
        this.setState({ loadingVisible: true })
        setTimeout(() => {
            if (this.state.email === 'wrong@gmail.com') {
                this.setState({ loadingVisible: false, formValid: false })
            } else {
                this.setState({ loadingVisible: false, formValid: true })
            }
        }, 2000)
    }

    render() {
        const { loadingVisible, validEmail, formValid } = this.state
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
                            <Text style={styles.forgotPasswordHeading}>Forgot your password?</Text>
                            <Text style={styles.forgotPasswordSubHeading}>Enter your email to find your account.</Text>
                            <InputField
                                customStyle={{ marginBottom: 20 }}
                                textColor={colors.white}
                                labelText="EMAIL ADDRESS"
                                labelTextSize={14}
                                labelColor={colors.white}
                                borderBottomColor={colors.white}
                                inputType="email"
                                onChangeText={this.handleEmailChange}
                                showCheckmark={validEmail}
                                autoFocus={true}
                                autoCapitalize="none"
                            />
                        </ScrollView>
                        <View style={[styles.nextArrowButton, formValid ? { zIndex: 10 } : {}]}>
                            <NextArrowButton
                                handleNextButton={this.goToNextStep}
                                disabled={!validEmail}
                            />
                        </View>
                        <View style={[styles.notificationWrapper, { marginTop: notificationMarginTop }]}>
                            <Notification
                                showNotification={showNotification}
                                handleCloseNotification={this.handleCloseNotification}
                                type="Error"
                                firstLine="No account exists for the requested"
                                secondLine="email address."
                            />
                        </View>
                    </View>
                    <Loader
                        visible={loadingVisible}
                        animationType="fade"
                    />
                </KeyboardAvoidingView>
            </LinearGradient>
        );
    }
}

ForgotPassword.propTypes = {

}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1
    },
    scrollView: {
        paddingLeft: 30,
        paddingRight: 30,
        flex: 1
    },
    forgotPasswordHeading: {
        fontSize: 28,
        color: colors.white,
        fontWeight: '300'
    },
    forgotPasswordSubHeading: {
        color: colors.white,
        fontWeight: '600',
        fontSize: 15,
        marginTop: 10,
        marginBottom: 60
    },
    nextArrowButton: {
        alignItems: 'flex-end',
        bottom: 20,
        right: 20
    },
    notificationWrapper: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 9
    }
})


