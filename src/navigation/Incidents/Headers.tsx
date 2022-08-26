import React from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { Search } from "../../components/icons";

interface HeaderProps {
  title: string;
}

export const IncidentsHeader = ({ title }: HeaderProps) => (
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

export const IncidentHeader = ({ title }: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export const IncidentAddHeader = ({ title }: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};
