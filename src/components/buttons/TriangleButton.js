import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import colors from '../../styles/colors'

export default class TriangleButton extends Component {

    render() {
        const { disabled } = this.props
        const opacityStyle = disabled ? { backgroundColor: 'rgba(255,255,255,0.2)' } : { backgroundColor: 'rgba(255,255,255,0.6)' }
        return (
            <TouchableOpacity
                style={[opacityStyle, styles.button]}
                onPress={() => { }}
            >
                <Icon
                    name="exclamation-triangle"
                    color={colors.darkOrange}
                    size={32}
                    style={styles.icon}
                />
            </TouchableOpacity>
        )
    }
}

TriangleButton.propTypes = {
    disabled: PropTypes.bool,
}


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 60,
        height: 60
    },
    icon: {
        marginRight: -2,
        marginTop: -2
    }
})