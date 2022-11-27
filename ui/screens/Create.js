/** @format */

import { useState } from "react";
import { Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { addUserAsync } from "../services/user.service";
import theme from "../style";
import Label from "../components/Label";
import TxtInput from "../components/TxtInput";

export default function Create() {
  //navigation
  const navigation = useNavigation();
  //state
  const [staffId, setStaffId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [street, setStreet] = useState("");
  const [suburb, setSuburb] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  //functions
  function submit() {
    let user = getUserObject();
    addUserAsync(user).then((json) =>
      navigation.navigate("List", { op: "create", data: json })
    );
  }
  function getUserObject() {
    return {
      staffId,
      firstName,
      lastName,
      email,
      phone,
      department,
      address: {
        street,
        suburb,
        state,
        country,
      },
    };
  }
  //JSX
  return (
    <View>
      <Label value="STAFF ID:" />
      <TxtInput value={staffId} onChangeText={setStaffId} />
      <Label value="FIRST NAME:" />
      <TxtInput value={firstName} onChangeText={setFirstName} />
      <Label value="LAST NAME:" />
      <TxtInput value={lastName} onChangeText={setLastName} />
      <Label value="EMAIL:" />
      <TxtInput value={email} onChangeText={setEmail} />
      <Label value="PHONE:" />
      <TxtInput value={phone} onChangeText={setPhone} />
      <Label value="DEPARTMENT:" />
      <TxtInput value={department} onChangeText={setDepartment} />
      <Label value="ADDRESS:" />
      <Label value="STREET:" />
      <TxtInput value={street} onChangeText={setStreet} />
      <Label value="SUBURB:" />
      <TxtInput value={suburb} onChangeText={setSuburb} />
      <Label value="STATE:" />
      <TxtInput value={state} onChangeText={setState} />
      <Label value="COUNTRY:" />
      <TxtInput value={country} onChangeText={setCountry} />

      <Pressable style={theme.saveBtn} onPress={submit}>
        <Text style={theme.saveBtnTxt}>SAVE</Text>
      </Pressable>
    </View>
  );
}
