import { SafeAreaView, Text, View } from "react-native";
import { defaultStyles } from "../../constants/Theme";
import { styles } from "../../styles/tabHome";

const progress = () => {
  return (
    <SafeAreaView style={[defaultStyles.container, styles.container]}>
      <View>
        <Text>Here lies kuafit</Text>
      </View>
      <View>
        <Text>Here lies kuafit</Text>
      </View>
    </SafeAreaView>
  );
};

export default progress;
