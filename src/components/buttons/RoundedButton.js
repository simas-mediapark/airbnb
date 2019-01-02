import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import colors from '../../styles/colors'

export default class RoundedButton extends Component {
    render() {
        const { text, textColor, background, icon, handleOnPress } = this.props
        const backgroundColor = background || 'transparent'
        const color = textColor || colors.black
        return (
            <TouchableOpacity
                onPress={handleOnPress}
                style={[styles.wrapper, { backgroundColor }]}>
                <View style={styles.buttonTextWrapper}>
                    {icon}
                    <Text style={[styles.buttonText, { color }]}>
                        {text}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

RoundedButton.propTypes = {
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    icon: PropTypes.object,
    handleOnPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        padding: 15,
        marginBottom: 15,
        alignItems: 'center',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: colors.white
    },
    buttonTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    buttonText: {
        fontSize: 17,
        width: '100%',
        textAlign: 'center'
    }
})