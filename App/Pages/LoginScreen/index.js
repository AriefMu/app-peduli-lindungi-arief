import * as React from 'react';
import {
    View,
    Text, 
    SafeAreaView, 
    StyleSheet,
    TextInput , 
    StatusBar, 
    Image,
    TouchableOpacity
} from 'react-native';
import {
    IconKemen,
    IconKomin,
    IconKpcpen,
    IconBumn,
    IconTop,
    IconMail,
    IconLock
} from '../../assets';
import {
    PrimaryButton
} from '../../Componets'


export default LoginScreen =  ({navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
            
                <StatusBar
                    barStyle="dark-content"
                    animated={true}
                    backgroundColor='#FFFFFF' />
                <View style={styles.logo}>
                <Image source={IconTop}></Image>
                </View>
                <View style={styles.sectionStyle}>
                <Image source={IconMail}style={styles.imageStyle}/>
                <TextInput 
                    style={{flex: 1}}
                    placeholder="youremail@domain.com" underlineColorAndroid="transparent"
                />
                </View>
                <View style={styles.sectionStyle}>
                <Image source={IconLock}style={styles.imageStyle}/>
                <TextInput  style={{flex: 1}}  placeholder="Password" underlineColorAndroid="transparent"/>

                </View>

                <PrimaryButton customeStyle={styles.btnLoginStyle} title="Login"/>

                <View style={styles.viewbt}>
      <View>
      <Text style={styles.text}>Bekerjasama Dengan :</Text>
      </View>
      <View style={styles.imgOption}>
        <Image source={IconKpcpen}style={styles.kpc}></Image>
        <Image source={IconKomin}style={styles.komin}></Image>
        <Image source={IconKemen}style={styles.kemen}></Image>
        <Image source={IconBumn}style={styles.bumn}></Image>

      </View>
      </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:15,
        alignContent:'center',
        backgroundColor:"#FFFFFF"
    },
    HeaderText:{
        marginTop:10,
        fontSize:73,
        fontFamily:'Roboto-Light',
        color:'white'
    },
    text: {
        fontFamily:'Lato-Regular',
        fontSize:12,
        marginTop:10
        
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
        padding: 10,
        margin: 10,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
      },
    smallText:{
        fontFamily:'Roboto-Light',
        fontSize:14,
        marginTop:12,
        color:'white',
        textAlign:'right'
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
    smallFootherTextRight:{
        fontFamily:'Roboto-Light',
        fontSize:12,
        color:'white',
        marginLeft:5,
        textDecorationLine:'underline'
    },
    footherTextTwo:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20
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