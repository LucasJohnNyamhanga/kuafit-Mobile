import { StyleSheet } from "react-native";
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
  xSmall: 10,
  small: 12,
  medium: 16,
    large: 20,
    xLarge: 24,
  xxLarge: 32,
  xxxLarge:42
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
    marginTop:20
  },
  inputField: {
    height: 44,
    borderWidth: 1,
    borderColor: color.shadeOfGray,
    borderRadius: 8,
    padding: 10,
    backgroundColor: color.secondary,
    
  },
  btn: {
    backgroundColor: color.primary,
    height: 50,
    borderRadius: 8,
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
    left:16
  },

  backShadow: {
    elevation: 2,
    shadowColor: color.black,
    shadowOpacity: 0.12,
    shadowRadius: 8,
    backgroundColor:color.secondary,
    shadowOffset: {
      width: 1,
      height:1
    }
  },

  safeArea: {
    paddingTop: 25,
    backgroundColor:color.primary
  }

})