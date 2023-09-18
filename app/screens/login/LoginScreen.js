import {
  Button,
  Checkbox,
  Icon,
  Input,
  Pressable,
  Text,
  View,
} from "native-base";
import React, { useContext, useState } from "react";
import { TouchableOpacity, StyleSheet, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
import { contact_login_icon, logo_icon } from "./loginSvgs";
import { StatusBar } from "expo-status-bar";
import { DataContext } from "../../context/DataContext";
import { loginCustomer } from "../../sdk/login/login";
import { useMutation } from "react-query";

const Login = ({ navigation }) => {
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = useState(false);
  const { setData } = useContext(DataContext);

  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  console.log("info", { email, password });
  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await loginCustomer({
        email,
        password,
      });
      console.log("res", response);
      if (response?.status === 200) {
        setData((prevData) => ({
          ...prevData,
          userInfo: response?.data,
        }));
        setEmail("");
        setPassword("");
        setLoading(false);
        navigation.navigate("AppScreens");
      } else {
        setLoading(false);
        Alert.alert("Wrong credentials");
      }
    } catch (error) {
      console.log("error", error);
      setLoading(false);
      Alert.alert(error?.detail || error?.error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.logo}>
        <SvgXml xml={logo_icon} />
      </View>
      <View style={styles.formContainer}>
        <View>
          <Text
            mb="5px"
            fontSize="16"
            fontWeight="700"
            color="#525252"
            fontFamily="Inter-Regular"
          >
            Email address
          </Text>
          <Input
            w={{
              base: "100%",
              md: "100%",
            }}
            borderRadius="12"
            keyboardType="email-address"
            value={email}
            onChangeText={handleEmailChange}
            height="46px"
            backgroundColor="#ffffff"
            mb="4"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            InputRightElement={
              <Pressable>
                <View mr="2">
                  <SvgXml xml={contact_login_icon} />
                </View>
              </Pressable>
            }
            placeholder="Enter email address"
          />
        </View>
        <View>
          <Text
            mb="5px"
            fontSize="16"
            fontWeight="700"
            color="#525252"
            fontFamily="Inter-Regular"
          >
            Password
          </Text>
          <Input
            w={{
              base: "100%",
              md: "100%",
            }}
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            borderRadius="12"
            value={password}
            onChangeText={handlePasswordChange}
            height="46px"
            backgroundColor="#ffffff"
            mb="4"
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                />
              </Pressable>
            }
            placeholder="Enter password"
          />
        </View>

        <View
          flexDir="row"
          justifyContent="space-between"
          alignItems="center"
          mb="2"
        >
          <Checkbox
            value="one"
            colorScheme="green"
            size="sm"
            borderRadius="100"
            style={{ transform: [{ scale: 0.7 }] }}
          >
            <Text
              fontSize="12"
              fontWeight="500"
              color="rgba(82, 82, 82, 0.35)"
              fontFamily="Inter-Regular"
            >
              Remember me
            </Text>
          </Checkbox>
          <TouchableOpacity>
            <Text
              fontSize="12"
              fontWeight="500"
              color="#27C9A9"
              fontFamily="Inter-Regular"
            >
              Forgot password
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <Button
            isLoading={loading}
            isLoadingText="Login"
            style={styles.buttonText}
            onPress={handleLogin}
            width="100%"
            borderRadius="12"
          >
            Login
          </Button>
        </TouchableOpacity>

        <View
          flexDir="row"
          width="70%"
          alignSelf="center"
          justifyContent="space-between"
          marginTop="4"
          alignItems="center"
        >
          <Text
            fontSize="12"
            fontWeight="500"
            color="rgba(82, 82, 82, 0.35)"
            fontFamily="Inter-Regular"
          >
            Don't have an account?
          </Text>
          <View>
            <Text
              color="#27C9A9"
              fontFamily="Inter-Regular"
              fontWeight="700"
              fontSize="12"
            >
              Request a demo
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: 60,
  },
  formContainer: {
    width: "85%",
  },
  input: {
    height: 40,
    backgroundColor: "#fff",
    paddingLeft: 10,
    marginBottom: 8,
    borderRadius: 19,
    borderColor: "rgba(193, 199, 214, 0.35)",
    borderWidth: 1,
  },
  buttonContainer: {
    backgroundColor: "#27C9A9",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    height: 46,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 15,
    fontFamily: "Inter-Regular",
    backgroundColor: "#27C9A9",
  },
});

export default Login;
