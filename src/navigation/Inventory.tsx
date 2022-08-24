import React from "react";
import type { StackScreenProps } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";

import Inventory from "../pages/Inventory/Inventory";
import Material from "../pages/Inventory/Material";
import MaterialAdd from "../pages/Inventory/MaterialAdd";
import MaterialEdit from "../pages/Inventory/MaterialEdit";

export type InventoryStackParamList = {
  Inventory: undefined;
  Material: undefined;
  MaterialAdd: undefined;
  MaterialEdit: undefined;
};

export type InventoryProps = StackScreenProps<
  InventoryStackParamList,
  "Inventory"
>;
export type MaterialProps = StackScreenProps<
  InventoryStackParamList,
  "Material"
>;
export type MaterialAddProps = StackScreenProps<
  InventoryStackParamList,
  "MaterialAdd"
>;
export type MaterialEditProps = StackScreenProps<
  InventoryStackParamList,
  "MaterialEdit"
>;

const InventoryStack = createStackNavigator<InventoryStackParamList>();

const InventoryNavigator = () => {
  return (
    <InventoryStack.Navigator>
      <InventoryStack.Screen
        name="Inventory"
        options={{ title: "Inventario" }}
        component={Inventory}
      />
      <InventoryStack.Screen
        name="Material"
        component={Material}
        options={{ title: "Detalles del material" }}
      />
      <InventoryStack.Screen
        name="MaterialAdd"
        component={MaterialAdd}
        options={{ title: "Añadir material" }}
      />
      <InventoryStack.Screen
        name="MaterialEdit"
        component={MaterialEdit}
        options={{ title: "Editar material" }}
      />
    </InventoryStack.Navigator>
  );
};

export default InventoryNavigator;
