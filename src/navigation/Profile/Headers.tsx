import React from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { DeleteForever, Edit, Password } from "../../components/icons";

interface HeaderProps {
  title: string;
}

export const ProfileHeader = ({ title }: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <Appbar.Header>
      <Appbar.Content title={title} />
      <Appbar.Action
        animated={false}
        icon={(props) => <Password color={props.color} size={props.size} />}
        onPress={() => navigation.navigate("ChangePassword")}
      />
      <Appbar.Action
        animated={false}
        icon={(props) => <Edit color={props.color} size={props.size} />}
        onPress={() => navigation.navigate("ProfileEdit")}
      />
      <Appbar.Action
        animated={false}
        icon={(props) => (
          <DeleteForever color={props.color} size={props.size} />
        )}
        onPress={() => {
          // TODO: delete dialog
        }}
      />
    </Appbar.Header>
  );
};

export const ProfileEditHeader = ({ title }: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export const ChangePasswordHeader = ({ title }: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};
