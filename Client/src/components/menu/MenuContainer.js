import React, { Component } from 'react'
import {
   View,ListView,StyleSheet,Text,Image,TouchableOpacity,TouchableHighlight
} from 'react-native'

var Quantity = require('react-quantity-textinput');
export default class MenuContainer extends Component {
    constructor(props) {
       super(props);
       var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       this.state = {
          order:{
            name:"pizza",
            number:"3"
            },
          ds :[
              {'id':0,'name':'Pizza','cost':'$5','description':'From Italy with love','quantity':0,
              'src':'http://www.zeppspizza.com/wp-content/uploads/2013/08/Spinach-Feta-Pizza-square-100x100.jpg'},
              {'id':1,'name':'Noodle','cost':'$4','description':'From VietNam with love','quantity':0,
              'src':'https://yt3.ggpht.com/-5CBvrU6WvCE/AAAAAAAAAAI/AAAAAAAAAAA/axF5AIs45fQ/s100-c-k-no-mo-rj-c0xffffff/photo.jpg'},
              {'id':2,'name':'Bread','cost':'$2','description':'From France with love','quantity':0,
              'src':'http://img.thrfun.com/img/141/412/banana_bread_ts2.jpg'},
              {'id':3,'name':'Rice','cost':'$3','description':'From ThaiLand with love','quantity':0,
              'src':'https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_auto,f_auto,fl_progressive,g_faces,h_100,q_auto/24380_sfs-chinese-style-fried-brown-rice-12'},
          ],
          dataSource :ds,
       };
   }

   componentDidMount(){
   this.setState({
     dataSource:this.state.dataSource.cloneWithRows(this.state.ds),
   })

 }

    render(){
        return (

             <ListView
                style = {styles.listContainer}
                dataSource = {this.state.dataSource}
                renderRow = {this._renderRow.bind(this)}
             />

        );
    }

    _renderRow(rowData){
        return(
            <TouchableHighlight onPress={() => this._handlePressList(rowData)}>
            <View style={styles.view}>
                <View>
                    <Image
                    style={styles.image}
                    source = {{uri:rowData.src}} />
                </View>
                <View>
                    <Text style = {styles.name}>
                       {rowData.name}
                    </Text>
                    <Text style = {styles.description}>
                       {rowData.description}
                    </Text>
                </View>
                <View style={styles.quantityInput}>
                    <Text style = {styles.cost}>
                         {rowData.cost}
                    </Text>

                    <Quantity onChangeText={(text) => this._handleChange(rowData,text)}>
                    </Quantity>
                </View>
           </View>
           </TouchableHighlight>
       );
   }
   _handleChange(rowData,text){
       var str=this.state.ds;
       str[rowData.id].quantity=parseInt(text);
       JSON.stringify(this.state.ds);
        this.setState({ds:str})

   }
   _handlePressList(rowData){
       alert(JSON.stringify(this.state.ds[rowData.id].quantity))
   }

};

const styles = StyleSheet.create ({
   listContainer: {
      marginTop: 50,
      flexDirection:'column',
   },
   view: {
      flex:1,
      flexDirection:'row',
      height:150,
      borderBottomWidth:1,
      borderColor: 'grey',
      backgroundColor:'azure',
      justifyContent: 'space-between',
   },
   image: {
       top:25,
       left:5,
       width: 100,
       height: 100,
       borderRadius:5,
   },
   name: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop:20
  },
  description:{
      fontSize: 16,
      color: 'grey',
      maxWidth:150
  },
  cost:{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'red',
      right:5,
      bottom:10
  },
  quantityInput: {
      flexDirection:'column',
      alignItems:'flex-end',
      paddingTop:30
  }

})
