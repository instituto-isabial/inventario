import React from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { DeleteForever, Edit, Search } from "../../components/icons";

interface HeaderProps {
  title: string;
}

export const UsersHeader = ({ title }: HeaderProps) => (
  <Appbar.Header>
    <Appbar.Content title={title} />
    <Appbar.Action
      animated={false}
      icon={(props) => <Search color={props.color} size={props.size} />}
      onPress={() => {
        // TODO: searchbar
      }}
    />
  </Appbar.Header>
);

export const UserHeader = ({ title }: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={title} />
      <Appbar.Action
        animated={false}
        icon={(props) => <Edit color={props.color} size={props.size} />}
        onPress={() => navigation.navigate("UserEdit")}
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

export const UserAddHeader = ({ title }: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export const UserEditHeader = ({ title }: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};
