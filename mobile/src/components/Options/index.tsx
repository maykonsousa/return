import React from "react";
import { Text, View } from "react-native";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { Copyright } from "../Copyright";
import { Option } from "../Option";

import { styles } from "./styles";

export function Options() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe o seu Feedback</Text>
      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option key={key} title={value.title} image={value.image} />
        ))}
      </View>
      <Copyright />
    </View>
  );
}
