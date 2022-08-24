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
          title: "Inventario",
        }}
      />
      <Tab.Screen
        name="IncidentsTab"
        component={Incidents}
        options={{
          title: "Incidencias",
        }}
      />
      <Tab.Screen
        name="UsersTab"
        component={Users}
        options={{
          title: "Gestión",
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={Profile}
        options={{
          title: "Perfil",
        }}
      />
    </Tab.Navigator>
  );
};

export default Root;
