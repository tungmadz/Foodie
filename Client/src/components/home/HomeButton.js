import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
}from 'react-native'

export default HomeButton = (props) =>{
    return(
        <View style = {styles.container}>
            <TouchableOpacity
            style = {styles.button}
            onPress = {props.goToMenu}>
            <Text>
                Go To Menu
            </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        borderWidth: 1,
        padding: 10,
        borderColor: 'black'
    }
})
