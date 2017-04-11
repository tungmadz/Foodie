import React,{Component} from 'react'
import {
Navigator, StyleSheet,TouchableOpacity,Text,View
} from 'react-native'

import MenuContainer from './menu/MenuContainer'
import HomeContainer from './home/HomeContainer'

export default class Router extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <Navigator
            initialRoute = {{name: 'Home', title: 'Home'}}
            renderScene = {this.renderScene}
            navigationBar ={
                <Navigator.NavigationBar
                    style = {styles.navigationBar}
                    routeMapper = {NavigationBarRouteMapper}/>
            }
            />
        );
    }
    renderScene(route,navigator){
        if(route.name == 'Home'){
            return(
                <HomeContainer
                    navigator = {navigator}
                    {...route.passProps}
                />
            )
        }
        if(route.name == 'Menu'){
            return(
                <MenuContainer
                    navigator = {navigator}
                    {...route.passProps}
                />
            )
        }
    }
}

var NavigationBarRouteMapper = {
    LeftButton(route,navigator,index,navState){
        if(index > 0){
            return(
                <TouchableOpacity
                    onPress = {() => {if(index > 0) {navigator.pop() } }}>
                    <Text style={styles.leftButton}>
                        Back
                    </Text>
                </TouchableOpacity>
            )
        }
        else { return null}
    },
    RightButton(route,navigator,index,navState){
        if(route.openAbout)
            return(
                <TouchableOpacity
                    onPress = {() => route.openAbout() }>
                    <Text style={styles.rightButton}>
                        {route.rightText || 'About'}
                    </Text>
                </TouchableOpacity>
            )
    },
    Title(route,navigator,index,navState){
        return(
            <Text style={ styles.title}>
                {route.title}
            </Text>
        )
    }
};

const styles = StyleSheet.create({
    navigationBar: {
        flex: 1,
        flexDirection:'row',
        backgroundColor : 'deepskyblue',

    },
    leftButton: {
        color: 'white',
        margin: 10,
        fontSize: 20,
    },
    rightButton: {
        color: 'white',
        margin: 10,
        fontSize: 20,
    },
    title: {
        padding: 10,
        color: 'white',
        fontSize: 20,
        marginLeft:80,
    },

})
