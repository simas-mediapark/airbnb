import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Easing, Animated } from 'react-native'
import PropTypes from 'prop-types'
import colors from '../../styles/colors'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

class Notification extends Component {
    constructor(props) {
        super(props)
        this.state = {
            positionValue: new Animated.Value(60)
        }
        this.animateNotification = this.animateNotification.bind(this)
    }

    animateNotification(value) {
        const { positionValue } = this.state
        Animated.timing(
            positionValue, {
                toValue: value,
                duration: '400',
                velocity: 3,
                tension: 2,
                friction: 8,
                easing: Easing.easeOutBack,
                useNativeDriver: true
            }
        ).start()
    }

    closeNotification() {
        this.props.handleCloseNotification()
    }

    render() {
        const { type, firstLine, secondLine, showNotification } = this.props
        const { positionValue } = this.state
        showNotification ? this.animateNotification(0) : this.animateNotification(60)

        return (
            <Animated.View

                style={[{ transform: [{ translateY: positionValue }] }, styles.wrapper]}
            >
                <View style={styles.notificationContent}>
                    <Text style={styles.errorText}>{type}</Text>
                    <Text style={styles.errorMessage}>{firstLine + "\n" + secondLine}</Text>
                </View>
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={this.closeNotification.bind(this)}
                >
                    <Icon
                        name="times"
                        size={25}
                        color={colors.lightGray}
                    />
                </TouchableOpacity>
            </Animated.View>
        )
    }
}

Notification.propTypes = {
    showNotification: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    secondLine: PropTypes.string,
    firstLine: PropTypes.string,
    handleCloseNotification: PropTypes.func
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.white,
        width: '100%',
        height: 60,
        padding: 10
    },
    notificationContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    errorText: {
        color: colors.darkOrange,
        marginRight: 5,
        fontSize: 14,
        marginBottom: 2
    },
    errorMessage: {
        marginBottom: 2,
        fontSize: 14
    },
    closeButton: {
        position: 'absolute',
        right: 20,
        top: 10
    }
})

export default Notification
