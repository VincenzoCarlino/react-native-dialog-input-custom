import { Dimensions, Platform, PixelRatio } from 'react-native';
const dimen = Dimensions.get('window');

const helpers = {
  isIphoneXorAbove: function () {
    return (
      Platform.OS === 'ios' &&
      !Platform.isPad &&
      !Platform.isTVOS &&
      ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))
    );
  },
  widthPercentageToDP: function (widthPercent) {
    {
      const screenWidth = Dimensions.get('window').width;
      // Convert string input to decimal number
      const elemWidth = parseFloat(widthPercent);
      return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
    };
  },
  heightPercentageToDP: function (heightPercent) {
    const screenHeight = Dimensions.get('window').height;
    // Convert string input to decimal number
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
  },
  orientation: function (){
      return dimen.height > dimen.width ? "Portrait" : "Landscape"
  }
}

export default helpers;

