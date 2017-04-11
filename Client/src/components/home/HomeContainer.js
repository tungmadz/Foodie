import React,{Component} from 'react'
import{
    View,StyleSheet,Text,Image
}from 'react-native'
import HomeButton from './HomeButton'

export default class HomeContainer extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <View style={styles.view}>
                <Text style={styles.text}>
                    Welcome to Foodie !
                </Text>
                <Image
                style={styles.image}
                source = {require('../../images/restaurant.jpg')} />
                <HomeButton goToMenu={this.goToMenu}/>
            </View>
        )
    }
    openAbout = () =>{
        alert("About button pressed!")
    }
    goToMenu = () =>{
        this.props.navigator.push({
            name: 'Menu',
            title: 'Menu',
            openAbout: this.openAbout
        });
    }
}

const styles = StyleSheet.create({
    text: {
        marginTop: 100,
        fontSize: 20,
        fontFamily: 'Roboto',
        color: 'black',
    },
    image: {
        width: 300,
        height: 300,
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})
