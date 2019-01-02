import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Animated, Easing } from 'react-native'
import PropTypes from 'prop-types'
import colors from '../../styles/colors'
import Icon from 'react-native-vector-icons/dist/FontAwesome'


class InputField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            secureInput: props.inputType === 'text' || props.inputType === 'email' ? false : true,
            scaleCheckmarkValue: new Animated.Value(0)
        }
    }

    toggleShowPassword() {
        this.setState({ secureInput: !this.state.secureInput })
    }

    scaleCheckmark(value) {
        Animated.timing(
            this.state.scaleCheckmarkValue,
            {
                toValue: value,
                duration: 400,
                easing: Easing.easeOutBack,
                useNativeDriver: true
            }
        ).start()
    }

    render() {
        const {
            labelText,
            labelTextSize,
            labelColor,
            textColor,
            borderBottomColor,
            inputType,
            onChangeText,
            customStyle,
            showCheckmark,
            autoCapitalize,
            autoFocus
        } = this.props
        const { secureInput, scaleCheckmarkValue } = this.state
        const fontSize = labelTextSize || 14
        const color = labelColor || colors.white
        const inputColor = textColor || colors.white
        const borderBottom = borderBottomColor || 'transparent'
        const keyboardType = inputType === 'email' ? 'email-address' : 'default'
        const iconScale = scaleCheckmarkValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1.6, 1]
        })
        const scaleValue = showCheckmark ? 1 : 0
        this.scaleCheckmark(scaleValue)

        return (
            <View style={[styles.wrapper, customStyle]}>
                <Text style={[styles.label, { fontSize, color }]}>{labelText}</Text>
                {inputType === 'password' ? (
                    <TouchableOpacity
                        style={styles.showButton}
                        onPress={this.toggleShowPassword.bind(this)}>
                        <Text style={styles.showButtonText}>{secureInput ? 'Show' : 'Hide'}</Text>
                    </TouchableOpacity>
                ) : null}
                <Animated.View style={[{ transform: [{ scale: iconScale }] }, styles.checkmarkWrapper]}>
                    <Icon
                        name="check"
                        color={colors.white}
                        size={20}
                    />
                </Animated.View>
                <TextInput
                    style={[styles.inputField, { color: inputColor, borderBottomColor: borderBottom, }]}
                    secureTextEntry={secureInput}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    autoFocus={autoFocus}
                    autoCapitalize={autoCapitalize}
                    autoCorrect={false}
                />
            </View>
        )
    }
}

InputField.propTypes = {
    labelText: PropTypes.string.isRequired,
    labelTextSize: PropTypes.number,
    labelColor: PropTypes.string,
    textColor: PropTypes.string,
    borderBottomColor: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    customStyle: PropTypes.object,
    onChangeText: PropTypes.func,
    showCheckmark: PropTypes.bool.isRequired,
    autoFocus: PropTypes.bool,
    autoCapitalize: PropTypes.string
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    label: {
        fontWeight: '700',
        marginBottom: 10,
    },
    inputField: {
        paddingBottom: 3,
        paddingTop: 10,
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
    },
    showButton: {
        position: 'absolute',
        right: 0
    },
    showButtonText: {
        color: colors.white,
        fontWeight: '700'
    },
    checkmarkWrapper: {
        position: 'absolute',
        right: 0,
        bottom: 12
    }
})

export default InputField
