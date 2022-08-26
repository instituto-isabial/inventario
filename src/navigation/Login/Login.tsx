import React from "react";
import type { StackScreenProps } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";

import { RecoveryPasswordHeader } from "./Headers";
import Login from "../../pages/Login/Login";
import RecoveryPassword from "../../pages/Login/RecoveryPassword";

export type LoginStackParamList = {
  Login: undefined;
  RecoveryPassword: undefined;
};

export type LoginProps = StackScreenProps<LoginStackParamList, "Login">;
export type RecoveryPasswordProps = StackScreenProps<
  LoginStackParamList,
  "RecoveryPassword"
>;

const LoginStack = createStackNavigator<LoginStackParamList>();

const LoginNavigator = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        options={{
          headerShown: false,
        }}
        component={Login}
      />
      <LoginStack.Screen
        name="RecoveryPassword"
        component={RecoveryPassword}
        options={{
          title: "Recuperar contraseña",
          header(props) {
            return <RecoveryPasswordHeader title={props.options.title ?? ""} />;
          },
        }}
      />
    </LoginStack.Navigator>
  );
};

export default LoginNavigator;
