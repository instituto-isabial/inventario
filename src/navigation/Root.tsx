import React from "react";
import { StyleSheet, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import type { NavigatorScreenParams } from "@react-navigation/native";

import type { InventoryStackParamList } from "./Inventory";
import Inventory from "./Inventory";
import type { IncidentsStackParamList } from "./Incidents";
import Incidents from "./Incidents";
import type { UsersStackParamList } from "./Users";
import Users from "./Users";
import type { ProfileStackParamList } from "./Profile";
import Profile from "./Profile";
import {
  IncidenceFill,
  IncidenceOut,
  MaterialsFill,
  MaterialsOut,
  UserFill,
  UserOut,
  UsersFill,
  UsersOut,
} from "../components/icons";

export type TabsParamList = {
  InventoryTab: NavigatorScreenParams<InventoryStackParamList>;
  IncidentsTab: NavigatorScreenParams<IncidentsStackParamList>;
  UsersTab: NavigatorScreenParams<UsersStackParamList>;
  ProfileTab: NavigatorScreenParams<ProfileStackParamList>;
};

const Tab = createMaterialBottomTabNavigator<TabsParamList>();

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Root = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="InventoryTab"
        component={Inventory}
        options={{
          tabBarIcon({ focused, color }) {
            return focused ? (
              <View style={styles.icon}>
                <MaterialsFill color={color} />
              </View>
            ) : (
              <View style={styles.icon}>
                <MaterialsOut color={color} />
              </View>
            );
          },
          title: "Inventario",
        }}
      />
      <Tab.Screen
        name="IncidentsTab"
        component={Incidents}
        options={{
          tabBarIcon({ focused, color }) {
            return focused ? (
              <View style={styles.icon}>
                <IncidenceFill color={color} />
              </View>
            ) : (
              <View style={styles.icon}>
                <IncidenceOut color={color} />
              </View>
            );
          },
          title: "Incidencias",
        }}
      />
      <Tab.Screen
        name="UsersTab"
        component={Users}
        options={{
          tabBarIcon({ focused, color }) {
            return focused ? (
              <View style={styles.icon}>
                <UsersFill color={color} />
              </View>
            ) : (
              <View style={styles.icon}>
                <UsersOut color={color} />
              </View>
            );
          },
          title: "Gestión",
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={Profile}
        options={{
          tabBarIcon({ focused, color }) {
            return focused ? (
              <View style={styles.icon}>
                <UserFill color={color} />
              </View>
            ) : (
              <View style={styles.icon}>
                <UserOut color={color} />
              </View>
            );
          },
          title: "Perfil",
        }}
      />
    </Tab.Navigator>
  );
};

export default Root;
