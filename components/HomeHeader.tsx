import { SafeAreaView, Text, View } from "react-native";
import { color, defaultStyles, fontFamily, size } from "../constants/Theme";
import { styles } from "../styles/tabHome";
import { FontAwesome, Feather, Ionicons } from "@expo/vector-icons";
import HorizontalCategory from "./HorizontalCategory";

type dataType = {
  categorySelect: (selected: string) => void;
  homeCategory: string[];
};

const HomeHeader = ({ categorySelect, homeCategory }: dataType) => {
  const selectedCategory = (name: string) => {
    categorySelect(name);
  };
  return (
    <SafeAreaView style={[defaultStyles.safeArea, {}]}>
      <View style={styles.container}>
        <View style={styles.welcomeContent}>
          <View style={styles.welcomeHeader}>
            <View style={styles.welcomeHeaderContainer}>
              <FontAwesome
                name="user-circle-o"
                size={size.xxLarge}
                color={color.secondary}
              />
              <View style={styles.welcomeText}>
                <Text style={styles.text}>Welcome</Text>
                <Text style={styles.text}>Benson Godfrey</Text>
              </View>
            </View>
            <View style={styles.welcomeHeaderContainer}>
              <Feather
                name="search"
                size={size.xxLarge}
                color={color.secondary}
              />
              <Ionicons
                name="notifications-outline"
                size={size.xxLarge}
                color={color.secondary}
              />
            </View>
          </View>
        </View>

        <HorizontalCategory
          selectedCategory={selectedCategory}
          homeCategory={homeCategory}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;
