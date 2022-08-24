import React from "react";
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

const Root = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="InventoryTab"
        component={Inventory}
        options={{
          tabBarIcon({ focused }) {
            return focused ? <MaterialsFill /> : <MaterialsOut />;
          },
          title: "Inventario",
        }}
      />
      <Tab.Screen
        name="IncidentsTab"
        component={Incidents}
        options={{
          tabBarIcon({ focused }) {
            return focused ? <IncidenceFill /> : <IncidenceOut />;
          },
          title: "Incidencias",
        }}
      />
      <Tab.Screen
        name="UsersTab"
        component={Users}
        options={{
          tabBarIcon({ focused }) {
            return focused ? <UsersFill /> : <UsersOut />;
          },
          title: "Gestión",
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={Profile}
        options={{
          tabBarIcon({ focused }) {
            return focused ? <UserFill /> : <UserOut />;
          },
          title: "Perfil",
        }}
      />
    </Tab.Navigator>
  );
};

export default Root;
