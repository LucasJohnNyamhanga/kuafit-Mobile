import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { color, defaultStyles, fontFamily, size } from "../constants/Theme";
import { styles } from "../styles/tabHome";
import { FontAwesome, Feather, Ionicons } from "@expo/vector-icons";
import HorizontalCategory from "./HorizontalCategory";
import { bodyListType } from "../app/Types/types";
import HorizontalMealPlan from "./HorizontalMealPlan";

type dataType = {
  categorySelect: (selected: string) => void;
  homeCategory: bodyListType[];
  loading: boolean;
};

const HomeHeader = ({ categorySelect, homeCategory, loading }: dataType) => {
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
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.search}>
            <Text style={styles.searchText}>Search Excercise, Muscle...</Text>
            <Feather
              style={styles.icon}
              name="search"
              size={size.xLarge}
              color={color.gold}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.catText}>Your Packages</Text>
        <HorizontalMealPlan />
        <Text style={styles.catText}>Get Fit</Text>
        <HorizontalCategory
          loading={loading}
          selectedCategory={selectedCategory}
          homeCategory={homeCategory}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;
