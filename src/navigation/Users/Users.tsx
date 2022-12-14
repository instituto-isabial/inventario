import React from "react";
import type { StackScreenProps } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";

import {
  UserAddHeader,
  UserEditHeader,
  UserHeader,
  UsersHeader,
} from "./Headers";
import Users from "../../pages/Users/Users";
import User from "../../pages/Users/User";
import UserAdd from "../../pages/Users/UserAdd";
import UserEdit from "../../pages/Users/UserEdit";

export type UsersStackParamList = {
  Users: undefined;
  User: undefined;
  UserAdd: undefined;
  UserEdit: undefined;
};

export type UsersProps = StackScreenProps<UsersStackParamList, "Users">;
export type UserProps = StackScreenProps<UsersStackParamList, "User">;
export type UserAddProps = StackScreenProps<UsersStackParamList, "UserAdd">;
export type UserEditProps = StackScreenProps<UsersStackParamList, "UserEdit">;

const UsersStack = createStackNavigator<UsersStackParamList>();

const UsersNavigator = () => {
  return (
    <UsersStack.Navigator>
      <UsersStack.Screen
        name="Users"
        options={{
          title: "Gestión de usuarios",
          header(props) {
            return <UsersHeader title={props.options.title ?? ""} />;
          },
        }}
        component={Users}
      />
      <UsersStack.Screen
        name="User"
        component={User}
        options={{
          title: "Detalles",
          header(props) {
            return <UserHeader title={props.options.title ?? ""} />;
          },
        }}
      />
      <UsersStack.Screen
        name="UserAdd"
        component={UserAdd}
        options={{
          title: "Añadir usuario",
          header(props) {
            return <UserAddHeader title={props.options.title ?? ""} />;
          },
        }}
      />
      <UsersStack.Screen
        name="UserEdit"
        component={UserEdit}
        options={{
          title: "Editar usuario",
          header(props) {
            return <UserEditHeader title={props.options.title ?? ""} />;
          },
        }}
      />
    </UsersStack.Navigator>
  );
};

export default UsersNavigator;
