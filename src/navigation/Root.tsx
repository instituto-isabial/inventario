import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import type { NavigatorScreenParams } from "@react-navigation/native";

import type { InventoryStackParamList } from "./Inventory/Inventory";
import Inventory from "./Inventory/Inventory";
import type { IncidentsStackParamList } from "./Incidents/Incidents";
import Incidents from "./Incidents/Incidents";
import type { UsersStackParamList } from "./Users/Users";
import Users from "./Users/Users";
import type { ProfileStackParamList } from "./Profile/Profile";
import Profile from "./Profile/Profile";
import LoginNavigator from "./Login/Login";
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

const IS_AUTHENTICATED = false;

export type TabsParamList = {
  InventoryTab: NavigatorScreenParams<InventoryStackParamList>;
  IncidentsTab: NavigatorScreenParams<IncidentsStackParamList>;
  UsersTab: NavigatorScreenParams<UsersStackParamList>;
  ProfileTab: NavigatorScreenParams<ProfileStackParamList>;
};

const Tab = createMaterialBottomTabNavigator<TabsParamList>();

const Root = () => {
  if (IS_AUTHENTICATED) {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="InventoryTab"
          component={Inventory}
          options={{
            tabBarIcon({ focused, color }) {
              return focused ? (
                <MaterialsFill color={color} />
              ) : (
                <MaterialsOut color={color} />
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
                <IncidenceFill color={color} />
              ) : (
                <IncidenceOut color={color} />
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
                <UsersFill color={color} />
              ) : (
                <UsersOut color={color} />
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
                <UserFill color={color} />
              ) : (
                <UserOut color={color} />
              );
            },
            title: "Perfil",
          }}
        />
      </Tab.Navigator>
    );
  } else {
    return <LoginNavigator />;
  }
};

export default Root;
