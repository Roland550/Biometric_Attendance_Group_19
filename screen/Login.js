import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import styles from "../components/admin/styles";
import Screenstyles from "./screenStyle";

export default function Login({ navigation }) {
  return (
    <SafeAreaView>
      <View style={Screenstyles.Image_login_box}>
        <Image
          source={require("../assets/img/cover.png")}
          style={Screenstyles.Image_login}
        />
      </View>

      <View style={Screenstyles.inputbox}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          label="Search"
          placeholder="Enter name"
          style={styles.inputText}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          label="Search"
          placeholder="Enter matricule"
          style={styles.inputText}
        />
        <Pressable style={Screenstyles.forgot_pass}>
          <Text style={Screenstyles.forgot_pass_text}>Forgot password?</Text>
        </Pressable>

        <Pressable
          style={Screenstyles.btnBox}
          onPress={() => {
            navigation.navigate("AdminDashboard");
          }}
        >
          <Text style={Screenstyles.btn}>Login</Text>
        </Pressable>

        <Text style={Screenstyles.or}>Or</Text>

        <Pressable style={Screenstyles.login_with} onPress={() => {
            navigation.navigate("Lecturer dash");
          }}>
          <Image
            source={require("../assets/img/google.png")}
            style={Screenstyles.oo}
          />
          <Text style={Screenstyles.login_with_text}>Continue with Google</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
