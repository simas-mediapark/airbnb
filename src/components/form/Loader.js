import React, { Component } from 'react'
import { View, StyleSheet, Image, Modal } from 'react-native'
import PropTypes from 'prop-types'
import colors from '../../styles/colors'

export class Loader extends Component {
    render() {
        const { animationType, visible } = this.props
        return (
            <Modal
                visible={visible}
                transparent={visible}
                animationType={animationType}
            >
                <View style={styles.wrapper}>
                    <View style={styles.loaderContainer}>
                        <Image
                            style={styles.loaderImage}
                            source={require('../../img/greenLoader.gif')}
                        />
                    </View>
                </View>
            </Modal>
        )
    }
}

Loader.propTypes = {
    animationType: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 9
    },
    loaderImage: {
        width: 70,
        height: 70,
        borderRadius: 15,
        position: 'relative',
        left: '50%',
        marginLeft: -35,
        top: '50%',
        marginTop: -35,
    },
    loaderContainer: {
        width: 90,
        height: 90,
        backgroundColor: colors.white,
        borderRadius: 15,
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginLeft: -45,
        marginTop: -45
    }
})

export default Loader
