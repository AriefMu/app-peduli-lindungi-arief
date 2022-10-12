import * as React from 'react';
import {
    View,
    Text, 
    SafeAreaView, 
    StyleSheet,
     
    Image,
    TouchableOpacity,Dimensions, Platform, PixelRatio
} from 'react-native';
import {
    
    IconBg,
    IconCre,
    IconMy
} from '../../assets';
import {
    PrimaryButton
} from '../../Componets';
import { AntDesign } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');
  
  // based on iphone 5s's scale
  const scale = SCREEN_WIDTH / 430;
  
  export function normalize(size) {
    const newSize = size * scale 
    if (Platform.OS === 'android') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
  }
export default EhacScreen = ({navigation}) =>{
return(
    <SafeAreaView style={styles.container}>
        
    <View>
      <View style={{height:'25%',backgroundColor:'red'}}>
      <Image source={IconBg} style={{position:'absolute',width:'100%',height:'100%',resizeMode:'stretch'}}></Image>
      <View style={{flexDirection:'row',padding:15}}>
    <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
      <AntDesign name="arrowleft" size={24} color="#000000" style={{opacity:0.5}} />
      </TouchableOpacity>
      
        <Text style={styles.Up} >Ehac</Text>
        </View>
      </View>
      <View style={{padding:15}}>
      <View style={{ overflow: 'hidden', paddingBottom: 2 ,paddingHorizontal:15}}>
       <View style={styles.Box}>
        <View style={styles.Bin}>
            <View style={styles.Imgcon}>
            <Image source={IconCre} style={{width: 49,height: 48}}></Image>
            </View>
            <View style={styles.TexCon}>
            <Text style={styles.TexHead}>Create e-HAC</Text>
            <Text style={styles.Texdet}>Electronic Health Alert card</Text>
            </View>
        </View>
        <View style={styles.Bin}>
        <View style={styles.Imgcon1}>
            <Image source={IconMy} style={{width: 55,height: 39}}></Image>
            </View>
            <View style={styles.TexCon1}>
            <Text style={styles.TexHead}>My e-HAC</Text>
            <Text style={styles.Texdet}>Check your history eHAC{"\n"}here</Text>
            </View>
        </View>
        </View> 
        </View>
        </View>
       
      
    </View>
    </SafeAreaView>
);
};
const styles = StyleSheet.create({
container:{
    flex:1,

backgroundColor:'white'
},
TexCon1:{
    width:'80%',
    height:'100%',
    marginVertical:15,
    
},
TexCon:{
    width:'80%',
    height:'100%',
    marginVertical:15,
    borderBottomRightRadius:30,
    borderBottomWidth:1,
    borderBottomColor:'#D2D2D2'
},
TexHead:{
    fontFamily:'Inter-Bold',
    fontSize:normalize(18)
},
Texdet:{
    fontFamily:'Inter-Regular',
    color:'#8A8A8A',
    fontSize:normalize(18)
    
},
Imgcon:{
    margin:15,
    justifyContent:'center',
    alignItems:'center',
    height: 63,
width: 63,


backgroundColor:'#44A86A',
borderRadius:10
},
Imgcon1:{
    margin:15,
    justifyContent:'center',
    alignItems:'center',
    height: 63,
width: 63,


backgroundColor:'#F49A5C',
borderRadius:10
},
Up:{
fontFamily:'Inter-SemiBold',
fontSize:18,
marginStart:15
},
Bin:{
    flex:1,
    flexDirection:'row',
    width:'100%',
    marginBottom:20
    
},
Box:{
    marginTop:25,
    borderRadius:25,
    
    borderWidth:2,
    borderColor:'#E8E8E8',
    backgroundColor: '#fff',
    width: '100%',
    height: '68%',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,

elevation: 3,
    
    
}
});