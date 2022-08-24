import React from "react";
import type { StackScreenProps } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";

import Profile from "../pages/Profile/Profile";
import ProfileEdit from "../pages/Profile/ProfileEdit";
import ChangePassword from "../pages/Profile/ChangePassword";

export type ProfileStackParamList = {
  Profile: undefined;
  ProfileEdit: undefined;
  ChangePassword: undefined;
};

export type ProfileProps = StackScreenProps<ProfileStackParamList, "Profile">;
export type ProfileEditProps = StackScreenProps<
  ProfileStackParamList,
  "ProfileEdit"
>;
export type ChangePasswordProps = StackScreenProps<
  ProfileStackParamList,
  "ChangePassword"
>;

const ProfileStack = createStackNavigator<ProfileStackParamList>();

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        options={{ title: "Perfil" }}
        component={Profile}
      />
      <ProfileStack.Screen
        name="ProfileEdit"
        options={{ title: "Editar perfil" }}
        component={ProfileEdit}
      />
      <ProfileStack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ title: "Cambiar contraseña" }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
