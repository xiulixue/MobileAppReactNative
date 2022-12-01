/** @format */

import { useState } from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import TxtInput from "../components/TxtInput";
import Label from "../components/Label";
import { updateUserAsync } from "../services/user.service";
import theme from "../style";

export default function Edit( { navigation , route }) {
  //navigation

  const user = route.params;
  //state
  const [staffId, setStaffId] = useState(user.staffId);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [department, setDepartment] = useState(user.department);
  const [street, setStreet] = useState(user.address.street);
  const [suburb, setSuburb] = useState(user.address.suburb);
  const [state, setState] = useState(user.address.state);
  const [country, setCountry] = useState(user.address.country);
  //functions
  function submit() {
    updateUserAsync(getUserObject()).then((json) => {
      navigation.navigate("List", { op: "edit", data: json });
    });
  }
  function getUserObject() {
    return {
      id: user.id,
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
