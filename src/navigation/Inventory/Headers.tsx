import React from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import {
  DeleteForever,
  Edit,
  IncidenceFill,
  Search,
} from "../../components/icons";

interface HeaderProps {
  title: string;
}

export const InventoryHeader = ({ title }: HeaderProps) => (
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

export const MaterialHeader = ({ title }: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={title} />
      <Appbar.Action
        animated={false}
        icon={(props) => (
          <IncidenceFill color={props.color} size={props.size} />
        )}
        onPress={() => {
          // TODO: navigate to add incident
        }}
      />
      <Appbar.Action
        animated={false}
        icon={(props) => <Edit color={props.color} size={props.size} />}
        onPress={() => navigation.navigate("MaterialEdit")}
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

export const MaterialAddHeader = ({ title }: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export const MaterialEditHeader = ({ title }: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};
