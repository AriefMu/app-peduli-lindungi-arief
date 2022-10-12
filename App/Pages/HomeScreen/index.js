import * as React from 'react';
import {View,
  Text, 
  SafeAreaView, 
  StyleSheet,
  StatusBar, 
  Image,
  TouchableOpacity,Dimensions, Platform, PixelRatio,Alert,
ScrollView} from 'react-native';
import Modal from "react-native-modal";
  import {
    Iconhqr,
    IconArw,
    IconTrav,
    IconEhc,
    IconFac,
    IconHos,
    IconRes,
    IconStac,
    IconTele,
    IconVac
} from '../../assets';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AwesomeAlert from 'react-native-awesome-alerts';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 430;
const createTwoButtonAlert = () =>
    Alert.alert(
      "Info",
      "Module Dalam Penembangan",
      [
        { text: "OK", onPress: () => console.log("OK pressed") }
      ]
    );
export function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'android') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

const onPress=()=>{
  alert('asdf')
}

export default HomeScreen = ({navigation}) => {
const CekButton=()=>{
  return(
    <View style={{  alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
   position:'absolute',
   marginTop:5,
marginRight:10,
   right:0,
    top:0,
    bottom:0,
    width:130,
    height:40,
    borderRadius:30,
    backgroundColor:'#EAF5F9',
    }}>
            
            <MaterialCommunityIcons name="flip-vertical" size={22} color="#239BD88A" style={{margin:10}}/>
            <Text style={{fontFamily:'Poppins-Bold',color:'#259AD5'}}>Check-In</Text>
            
          </View>
  )
}  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView removeClippedSubviews nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
        
      <StatusBar
        barStyle="dark-content"
        animated={true}
        backgroundColor='#FFFFFF' />
        
        <View style={styles.container1}>
          <View style={styles.vup}>
          <EvilIcons name="user" size={45} color="#adacac" />
            <Text style={{fontFamily:'Poppins-SemiBold',fontSize:normalize(16),marginStart:10,alignSelf:'flex-start',alignSelf:'center'}}>Hi, </Text>
            <Text style={{fontFamily:'Poppins-SemiBold',fontSize:normalize(16),textDecorationLine:'underline',textDecorationColor:'#000',alignSelf:'center'}}>Arief Muhammad</Text>
            <MaterialIcons name="notifications-none" size={30} color="#adacac" style={{alignSelf:'flex-start',position:'absolute',right:0,top:0,bottom:0}}/>
          </View>
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
          <TouchableOpacity onPress={createTwoButtonAlert} style={{position:'absolute',right:0,top:0,bottom:0}}>
          <CekButton/>
          </TouchableOpacity>
          </View>
        </View>
        </View>
        <View style={{marginVertical:15,width:'100%',height:15,backgroundColor:'#DFDFDF'}}>

        </View>
        
          <View style={{flex:1}}>
          
          <View style={styles.btsy}>
          <TouchableOpacity onPress={()=>navigation.navigate('ImmunizationScreen')}>
          <View style={{alignItems:'center'}}>
          <View style={[styles.Img,{backgroundColor:'#FFBF43'}]}>
          <Image source={IconVac} style={{width:normalize(73),height:normalize(74),borderRadius:15}}></Image>
          </View>
          
          <Text style={styles.textk}>Vaccine And</Text>
          <Text style={styles.textk}>Immunization</Text>
          
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={createTwoButtonAlert}>
          <View style={{alignItems:'center',marginTop:30}}>
          <View style={[styles.Img,{backgroundColor:'#1E9E61'}]}>
          <Image source={IconTrav} style={{width:normalize(64),height:normalize(72),resizeMode:'stretch',borderRadius:15}}></Image>
          </View>
          <Text style={styles.textk}>Travel</Text>
          <Text style={styles.textk}>Regulations</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={createTwoButtonAlert}>
          <View style={{alignItems:'center',marginTop:30}}>
          <View style={[styles.Img,{backgroundColor:'#D7574C'}]}>  
          <Image source={IconStac} style={{width:normalize(65),height:normalize(66),resizeMode:'stretch',borderRadius:15}}></Image>
          </View>
          <Text style={styles.textk}>Covid-19</Text>
          <Text style={styles.textk}>Statistic</Text>
          </View>
          </TouchableOpacity>
          </View>
          <View style={styles.btsy1}>
          <TouchableOpacity onPress={()=>navigation.navigate('CovidTestScreen')}>
          <View style={{alignItems:'center'}}>
          <View style={[styles.Img,{backgroundColor:'#D34539'}]}>  
          <Image source={IconRes} style={{width:normalize(72),height:normalize(71),resizeMode:'stretch',borderRadius:15}}></Image>
          </View>
          <Text style={styles.textk}>Covid-19 Test</Text>
          <Text style={styles.textk}>Result</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={createTwoButtonAlert}>
          <View style={{alignItems:'center',marginTop:30}}>
          <View style={[styles.Img,{backgroundColor:'#FFC557'}]}>  
          <Image source={IconTele} style={{width:normalize(62),height:normalize(62),resizeMode:'stretch',borderRadius:15}}></Image>
          </View>
          <Text style={styles.textk}>Telemedicine</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={createTwoButtonAlert}>
          <View style={{alignItems:'center',marginTop:50}}>
          <View style={[styles.Img,{backgroundColor:'#FFC557'}]}>  
          <Image source={IconHos} style={{width:normalize(69),height:normalize(69),resizeMode:'stretch',borderRadius:15}}></Image>
          </View>
          <Text style={styles.textk}>Find Hospital</Text>
          <Text style={styles.textk}>Bed</Text>
          </View>
          </TouchableOpacity>
          </View>
          
          <View style={styles.btsy2}>
          <TouchableOpacity onPress={()=>navigation.navigate('EhacScreen')}>
          <View style={{alignItems:'center'}}>
          <View style={[styles.Img,{backgroundColor:'#1E9E61'}]}>  
          <Image source={IconEhc} style={{width:normalize(68),height:normalize(69),resizeMode:'stretch',borderRadius:15}}></Image>
          </View>
          <Text style={styles.textk}>EHAC</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={createTwoButtonAlert}>
          <View style={{alignItems:'center',marginTop:50}}>
          <View style={[styles.Img,{backgroundColor:'#1E9E61'}]}>  
          <Image source={IconFac} style={{width:normalize(68),height:(68),resizeMode:'stretch',borderRadius:15}}></Image>
          </View>
          <Text style={styles.textk}>Healthcare</Text>
          <Text style={styles.textk}>Facility</Text>
          </View>
          </TouchableOpacity>
          </View>
          </View>
        
          </ScrollView>
        </SafeAreaView >
        
    
  );
};
const styles = StyleSheet.create({
  btsy:{
    
    margin:15,
    marginStart:25,
    position:'absolute',
    left:0,top:0,bottom:0
  },
  Img:{
    justifyContent:'center',
    alignItems:'center',
    width:normalize(79),
    height:normalize(83),
    borderRadius:15,
    marginBottom:10
  },
  btsy1:{
    margin:15,
   
    alignSelf:'center',
   
   alignContent:'stretch'
  },
  btsy2:{
    marginEnd:25,
    margin:15,
    position:'absolute',
    right:0,top:0,bottom:0
  },
  container:{
      flex: 1,
      
      alignContent:'center',
      backgroundColor:"#FFFFFF"
  },
  vup:{
    flexDirection:'row',
    
   
   

  },
  container1:{
   height:230,
   padding:15,
    alignContent:'center',
    backgroundColor:"#FFFFFF"
},
  vhal:{
    flexDirection:'row',
    height:'65%',
   
    backgroundColor:'#239BD8',
    borderTopStartRadius:15,
    borderTopEndRadius:15

  },
  
  vhal2:{
    
    flexDirection:'row',
    height:'35%',
    paddingVertical:5,    borderBottomStartRadius:15,
    borderBottomEndRadius:15,
    
  },
  text2:{
    fontFamily:'Poppins-Bold',
    marginTop:10,
    fontSize:normalize(15)

  },
  vall:{
    marginTop:20,
    backgroundColor:'white',
    borderColor:'grey',
    borderRadius:15,
    borderWidth:1,
    width:'100%',
    height:150
  },
  
  vtext:{
    margin:20,
  },
  textk: {
    fontFamily:'Poppins-Medium',
    fontSize:normalize(12)

    
  },
  text: {
      fontFamily:'Poppins-Medium',
      fontSize:normalize(18),
      
      color:'white'

      
    },
    smalltext: {
      fontFamily:'Poppins-Light',
      fontSize:normalize(14),
      
      color:'white'

      
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
      fontSize:normalize(16),
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#695D91'
  },
  btnLoginStyle:{
      marginTop:20,
      fontFamily:'Poppins-Bold',fontSize:normalize(15)
  },
  
    imageStyle: {
      marginTop:15,
      position:'absolute',
      right:0,
      bottom:0,
      top:1.5,
      height: 80,
      width: 90,
      resizeMode:'stretch'
     
      
    },
  smallTextCenter:{
      fontFamily:'Roboto-Light',
      fontSize:normalize(14),
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
  }

});