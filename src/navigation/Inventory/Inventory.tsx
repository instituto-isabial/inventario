import React from "react";
import type { StackScreenProps } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";

import {
  InventoryHeader,
  MaterialHeader,
  MaterialAddHeader,
  MaterialEditHeader,
} from "./Headers";
import Inventory from "../../pages/Inventory/Inventory";
import Material from "../../pages/Inventory/Material";
import MaterialAdd from "../../pages/Inventory/MaterialAdd";
import MaterialEdit from "../../pages/Inventory/MaterialEdit";

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
        options={{
          title: "Inventario",
          header(props) {
            return <InventoryHeader title={props.options.title ?? ""} />;
          },
        }}
        component={Inventory}
      />
      <InventoryStack.Screen
        name="Material"
        component={Material}
        options={{
          title: "Material",
          header(props) {
            return <MaterialHeader title={props.options.title ?? ""} />;
          },
        }}
      />
      <InventoryStack.Screen
        name="MaterialAdd"
        component={MaterialAdd}
        options={{
          title: "Añadir material",
          header(props) {
            return <MaterialAddHeader title={props.options.title ?? ""} />;
          },
        }}
      />
      <InventoryStack.Screen
        name="MaterialEdit"
        component={MaterialEdit}
        options={{
          title: "Editar material",
          header(props) {
            return <MaterialEditHeader title={props.options.title ?? ""} />;
          },
        }}
      />
    </InventoryStack.Navigator>
  );
};

export default InventoryNavigator;
