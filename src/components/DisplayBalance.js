import React from "react";
import { Statistic } from "semantic-ui-react";

export default function DisplayBalance({title, value, color = "black", size = "tiny", textAlign = "right"}) {
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label style={{ textAlign: {textAlign} }}>{title}</Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  );
}
