import React, { Component } from 'react'
import colors from '../styles/colors'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import RoundedButton from '../components/buttons/RoundedButton'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'


export class LoggedOut extends Component {

    onFacebookPress() {
        alert('facebook button pressed')
    }

    onCreatePress() {
        alert('create account pressed')
    }

    onMorePress() {
        alert('more options press')
    }

    render() {
        return (
            <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                style={{ flex: 1 }}
                colors={['#008388', '#104446']}>
                <View style={styles.wrapper}>
                    <View style={styles.welcomeWrapper}>
                        <Image
                            source={require('../img/airbnb-logo.png')}
                            style={styles.logo}
                        />
                        <Text style={styles.welcomeText}>Welcome to Airbnb.</Text>
                        <RoundedButton
                            textColor={colors.green01}
                            text="Continue with Facebook"
                            icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon} />}
                            background={colors.white}
                            handleOnPress={this.onFacebookPress}
                        />

                        <RoundedButton
                            textColor={colors.white}
                            text="Create Account"
                            handleOnPress={this.onCreatePress}
                        />

                        <TouchableOpacity
                            onPress={this.onMorePress}
                            style={styles.moreOptionsButton}>
                            <Text style={styles.moreOptionsButtonText}>More options</Text>
                        </TouchableOpacity>

                        <View style={styles.termAndConditions}>
                            <Text style={styles.termText}>By tapping Continue, Create Account or More</Text>
                            <Text style={styles.termText}> Options,</Text>
                            <Text style={styles.termText}>I agree to Airbnb's </Text>
                            <TouchableOpacity style={styles.linkButton}>
                                <Text style={styles.termText}>Terms of Service</Text>
                            </TouchableOpacity>
                            <Text style={styles.termText}>, </Text>
                            <TouchableOpacity style={styles.linkButton}>
                                <Text style={styles.termText}>Payments Terms of Service</Text>
                            </TouchableOpacity>
                            <Text style={styles.termText}>, </Text>
                            <TouchableOpacity style={styles.linkButton}>
                                <Text style={styles.termText}>Privacy Policy</Text>
                            </TouchableOpacity>
                            <Text style={styles.termText}>, and</Text>
                            <TouchableOpacity style={styles.linkButton}>
                                <Text style={styles.termText}>Nondiscrimination Policy</Text>
                            </TouchableOpacity>
                            <Text style={styles.termText}>.</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    welcomeWrapper: {
        flex: 1,
        marginTop: 30,
        padding: 20
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 50,
        marginBottom: 40
    },
    welcomeText: {
        fontSize: 30,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40
    },
    facebookButtonIcon: {
        color: colors.green01,
        position: 'relative',
        left: 20,
        zIndex: 8
    },
    moreOptionsButton: {
        marginTop: 15,
    },
    moreOptionsButtonText: {
        color: colors.white,
        fontSize: 16
    },
    termAndConditions: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30
    },
    termText: {
        color: colors.white,
        fontSize: 13,
        fontWeight: '600'
    },
    linkButton: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
    }
})

export default LoggedOut
