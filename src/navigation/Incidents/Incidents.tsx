import React from "react";
import type { StackScreenProps } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";

import { IncidentAddHeader, IncidentHeader, IncidentsHeader } from "./Headers";
import Incidents from "../../pages/Incidents/Incidents";
import Incident from "../../pages/Incidents/Incident";
import IncidentAdd from "../../pages/Incidents/IncidentAdd";

export type IncidentsStackParamList = {
  Incidents: undefined;
  Incident: undefined;
  IncidentAdd: undefined;
  MaterialEdit: undefined;
};

export type IncidentsProps = StackScreenProps<
  IncidentsStackParamList,
  "Incidents"
>;
export type IncidentProps = StackScreenProps<
  IncidentsStackParamList,
  "Incident"
>;
export type IncidentAddProps = StackScreenProps<
  IncidentsStackParamList,
  "IncidentAdd"
>;

const IncidentsStack = createStackNavigator<IncidentsStackParamList>();

const IncidentsNavigator = () => {
  return (
    <IncidentsStack.Navigator>
      <IncidentsStack.Screen
        name="Incidents"
        options={{
          title: "Incidencias",
          header(props) {
            return <IncidentsHeader title={props.options.title ?? ""} />;
          },
        }}
        component={Incidents}
      />
      <IncidentsStack.Screen
        name="Incident"
        component={Incident}
        options={{
          title: "Detalles de la incidencia",
          header(props) {
            return <IncidentHeader title={props.options.title ?? ""} />;
          },
        }}
      />
      <IncidentsStack.Screen
        name="IncidentAdd"
        component={IncidentAdd}
        options={{
          title: "Notificar incidencia",
          header(props) {
            return <IncidentAddHeader title={props.options.title ?? ""} />;
          },
        }}
      />
    </IncidentsStack.Navigator>
  );
};

export default IncidentsNavigator;
