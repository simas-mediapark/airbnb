import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import colors from '../../styles/colors'

export default class NextArrowButton extends Component {

    render() {
        const { disabled, handleNextButton } = this.props
        const opacity = disabled ? 0.2 : 0.6
        return (
            <TouchableOpacity
                style={[{ opacity }, styles.button]}
                onPress={handleNextButton}
                disabled={disabled}
            >
                <Icon
                    name="angle-right"
                    color={colors.green01}
                    size={32}
                    style={styles.icon}
                />
            </TouchableOpacity>
        )
    }
}

NextArrowButton.propTypes = {
    disabled: PropTypes.bool,
    handleNextButton: PropTypes.func.isRequired
}


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 60,
        backgroundColor: colors.white,
        height: 60
    },
    icon: {
        marginRight: -2,
        marginTop: -2
    }
})