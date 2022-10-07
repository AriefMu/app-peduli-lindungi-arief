import * as React from 'react';
import {View,
  Text, 
  SafeAreaView, 
  StyleSheet,
  TextInput , 
  StatusBar, 
  Image,
  Button,
  Pressable,
  TouchableOpacity} from 'react-native';
  import {
    IconKemen,
    IconKomin,
    IconKpcpen,
    IconBumn,
    IconTop,
    IconMail,
    IconLock,
    Iconhqr,
    IconArw,
    IconSc
} from '../../assets';


export default HomeScreen = () => {
  
  return (
    <SafeAreaView style={styles.container}>
            
      <StatusBar
        barStyle="dark-content"
        animated={true}
        backgroundColor='#FFFFFF' />
        <View style={styles.vall}>
          <View style={styles.vhal}>
          <View style={styles.vtext}>
          <Text style={styles.text}>Entering A Public Space?</Text>
          <Text style={styles.smalltext}>Stay Alert To Stay Safe</Text>
          
          </View>
          <Image source={Iconhqr} style={styles.imageStyle}></Image>
          </View>
          <View style={styles.vhal2}>
            <Image source={IconArw} style={{margin:10,width:20,height:20}}></Image>
          <Text style={styles.text2}>Check-In-Preference</Text>
          <TouchableOpacity onPressOut={alert('You Tapped')}>
          <View style={styles.vbutton}>
            
            <Image source={IconSc} style={{marginHorizontal:10,width:21,height:20}}/>
            <Text style={{fontFamily:'Poppins-Bold',color:'#259AD5'}}>Check-In</Text>
            
          </View>
          </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container:{
      flex: 1,
      padding:15,
      alignContent:'center',
      backgroundColor:"#FFFFFF"
  },
  vhal:{
    flexDirection:'row',
    flex:0.65,
    backgroundColor:'#239BD8',
    borderTopStartRadius:15,
    borderTopEndRadius:15

  },
  vbutton:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    marginStart:50,
    marginTop:8,
    width:130,
    height:40,
    borderRadius:30,
    backgroundColor:'#EAF5F9',
  },
  vhal2:{
    flexDirection:'row',
    flex:0.35,
    backgroundColor:'#FFFFFF',
    borderBottomStartRadius:15,
    borderBottomEndRadius:15

  },
  text2:{
    fontFamily:'Poppins-Bold',
    marginTop:10,

  },
  vall:{
    
    backgroundColor:'white',
    borderColor:'grey',
    borderRadius:15,
    borderWidth:1,
    width:'100%',
    height:'25%'
  },
  HeaderText:{
      marginTop:10,
      fontSize:73,
      fontFamily:'Roboto-Light',
      color:'white'
  },
  vtext:{
    margin:20,
  },
  text: {
      fontFamily:'Poppins-Medium',
      fontSize:18,
      
      color:'white'

      
    },
    smalltext: {
      fontFamily:'Poppins-Light',
      fontSize:14,
      
      color:'white'

      
    },
  viewbt:{
      marginTop:50,
      justifyContent:'center',
      marginHorizontal:25,
      marginBottom:10
  },
  BodyText:{
      marginTop:10,
      fontSize:18,
      fontFamily:'Roboto-Bold',
      color:'white'
  },
  imgOption:{
      marginTop:10,
      flexDirection:'row',
      marginBottom:10,
      alignItems:'center',
      
      
  },
  logo:{
      marginTop:40,
      justifyContent:'center',
      alignItems:'center'
  },
  inputStyle:{
      flex: 1,
      height: 50,
      marginTop: 12,
      borderWidth: 1,
      paddingLeft:30,
      borderRadius:10,
      borderColor:'#695D91',
      fontSize:16,
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#695D91'
  },
  btnLoginStyle:{
      marginTop:20,
      fontFamily:'Poppins-Bold',fontSize:15
  },
  sectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#006175',
      height: 50,
      borderRadius: 10,
      margin: 10,
    },
    imageStyle: {
      marginTop:21.5,
      marginStart:23,
      height: 80,
      width: 90,
      resizeMode:'stretch'
     
      
    },
  smallTextCenter:{
      fontFamily:'Roboto-Light',
      fontSize:14,
      marginTop:50,
      color:'white',
      textAlign:'center'
  },
  loginOption:{
      justifyContent:'center',
      flexDirection:'row'
  },
  imgLoginIcon:{
    margin:10
  },
  footherText:{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:50
  },
  smallFootherText:{
      fontFamily:'Roboto-Light',
      fontSize:12,
      color:'white',
  },
  
  kpc:{
      width:100,
      height:35,
      marginEnd:10
    },
    komin:{
      width:39,
      height:43,
      marginEnd:10
    },
    kemen:{
      width:78,
      height:41,
      marginEnd:10
    },
    bumn:{
      width:77,
      height:36,
      marginEnd:10}
});