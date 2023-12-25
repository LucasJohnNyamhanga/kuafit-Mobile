import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const  color = {
  primary: '#152022',
  secondary: '#fff',
  //shadeOfWhite: '#FDFFFF',
  shadeOfGray: '#ABABAB',
  black: 'black',
  grey: 'grey',
  start: '#1C2829',
  middle: '#1E292B',
  middleCenter: '#1B2525',
  middleBottom:'#18201F',
  end: '#1A2829',
  backgroundMirror: '#333F42',
  mainColor: '#16AA90',
  gold:'#FFD700'
};

export const size = {
  xSmall: wp(1),
  small: wp(3),
  medium: wp(4),
    large: wp(5),
    xLarge: wp(6),
  xxLarge: wp(7),
  xxxLarge:wp(8)
};

export const fontFamily = {
  MontRegural: 'MontRegural',
  MontMedium: 'MontMedium',
  MontBold: 'MontBold',
  FiraRegural: 'FiraRegural',
  FiraMedium: 'FiraMedium',
  FiraBold:'FiraBold',
}

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:wp(1)
  },
  inputField: {
    flex:1,
    height: wp(12),
    borderWidth: wp(1),
    borderColor: color.shadeOfGray,
    borderRadius: wp(2),
    backgroundColor: color.secondary,
    marginHorizontal: wp(3),
    fontSize: size.large,
    marginBottom:wp(5)
    
  },
  btn: {
    backgroundColor: color.primary,
    height: wp(50),
    borderRadius: wp(8),
    justifyContent: "center",
    alignItems:'center',
  },
  btnText: {
    color: color.secondary,
    fontSize: size.medium,
    fontFamily: fontFamily.MontMedium,
    
  },
  btnIcon: {
    position: 'absolute',
    left:wp(16)
  },

  backShadow: {
    elevation: wp(2),
    shadowColor: color.black,
    shadowOpacity: wp(0.12),
    shadowRadius: wp(8),
    backgroundColor:color.secondary,
    shadowOffset: {
      width: wp(1),
      height:wp(1)    }
  },

  safeArea: {
    paddingTop: wp(8),
    backgroundColor:color.primary
  }

})