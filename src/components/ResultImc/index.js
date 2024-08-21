import React from "react";
import { View, Text, Share, TouchableOpacity } from "react-native";
import styles from "./style";

export default function ResultImc(props) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Meu IMC hoje é: " + props.resultImc,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.resultImc}>
      <Text style={styles.information}>{props.messageResultImc}</Text>
      <Text style={styles.numberImc}>{props.resultImc}</Text>
      <View style={styles.boxSharedButton}>
        <TouchableOpacity onPress={onShare} style={styles.shared}>
          <Text style={styles.sharedText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
