import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomBar from "../components/bottom/BottomBar";
import AllScreens from "./AllScreens";

const Tab = createBottomTabNavigator();

const TabsScreens = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomBar {...props} />}>
      <Tab.Screen name="MainStack" component={AllScreens} />
    </Tab.Navigator>
  );
};

export default TabsScreens;
