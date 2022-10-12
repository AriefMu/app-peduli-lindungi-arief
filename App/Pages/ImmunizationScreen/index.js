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
    IconCov,
    IconCek,
    IconChi
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
export default ImmunizationScreen = ({navigation}) =>{
return(
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row'}}>
    <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
      <AntDesign name="arrowleft" size={24} color="#000000" style={{opacity:0.5}} />
      </TouchableOpacity>
        <Text style={styles.Up} >Vaccine and Immunization</Text>
      </View>
      <View style={{padding:15}}>
      <View style={{ overflow: 'hidden', paddingBottom: 2 }}>
       <View style={styles.Box}>
        <View style={styles.Bin}>
            <View style={styles.Imgcon}>
            <Image source={IconCov} style={{width: 58,height: 53}}></Image>
            </View>
            <View style={styles.TexCon}>
            <Text style={styles.TexHead}>COVID-19 Vaccine</Text>
            
            
            <Text style={styles.Texdet}>See your vaccine certificate{'\n'}here</Text>
            </View>
        </View>
        <View style={styles.Bin}>
        <View style={styles.Imgcon}>
            <Image source={IconCek} style={{width: 47,height: 45}}></Image>
            </View>
            <View style={styles.TexCon}>
            <Text style={styles.TexHead}>Chech-In Verification</Text>
            <Text style={styles.Texdet}>Covid-19 vaccine certificate{'\n'}verification in EU format</Text>
            </View>
        </View>
        <View style={styles.Bin}>
        <View style={styles.Imgcon}>
            <Image source={IconChi} style={{width: 48,height: 50}}></Image>
            </View>
            <View style={styles.TexCon1}>
            <Text style={styles.TexHead}>Child Immunization</Text>
            <Text style={styles.Texdet}>See your child's immunization{'\n'}record here</Text>
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
padding:15,
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
    borderBottomWidth:1,
    borderBottomColor:'#D2D2D2',
    flexWrap:'wrap',
    alignItems:'flex-start'

},
TexHead:{
    fontFamily:'Inter-Bold',
    fontSize: normalize(17)
},
Texdet:{
    fontFamily:'Inter-Regular',
    color:'#8A8A8A',
    fontSize:normalize(17),
    
    
},
Imgcon:{
    margin:15,
    justifyContent:'center',
    alignItems:'center',
    height: 63,
width: 63,

borderRadius: 1,
backgroundColor:'#FFC044',
borderRadius:15
},
Up:{
fontFamily:'Inter-SemiBold',
fontSize:normalize(18),
marginStart:15
},
Bin:{
    flex:1,
    flexDirection:'row',
    width:'100%',
    marginBottom:20,
    alignItems:'flex-start'
},
Box:{
    marginTop:40,
    borderRadius:30,
    borderWidth:2,
    borderColor:'#E8E8E8',
    backgroundColor: '#fff',
    width: '100%',
    height: '75%',
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