import {useState, useEffect} from "react";
import {Pressable, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context"

import {router} from "expo-router"

import ThemedModal from "@/components/ThemedModal";
import ThemedButton from "@/components/ThemedButton";
import SearchList from "@/components/SearchList";
import LabelRow from "@/components/LabelRow";
import P from "@/components/text/P"
import Label from "@/components/text/Label"
import H4 from "@/components/text/H4"

import getDestinations from "@/services/getDestinations";


export default function Index() {
  const destinations = getDestinations()

  const [toDestinationId, setToDestinationId] = useState<number | null>(null)
  const [toDestinationName, setToDestinationName] = useState("")
  const [toModalVisible, setToModalVisible] = useState(false)

  const [fromDestinationId, setFromDestinationId] = useState<number | null>(null)
  const [fromDestinationName, setFromDestinationName] = useState("")
  const [fromModalVisible, setFromModalVisible] = useState(false)

  const clearForm = () => {
    setToDestinationId(null)
    setToDestinationName("")
    setFromDestinationId(null)
    setFromDestinationName("")
  }

  useEffect(() => {
    setToDestinationId(null)
    setToDestinationName("")
  }, [fromDestinationId]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <View style={{
          height: "50%",
          borderWidth: 1,
          marginBottom: 20,
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Label>Plane flying through the air</Label>
        </View>
        <View style={{marginHorizontal: "5%"}}>
          <ThemedModal setModalInvisible={() => setFromModalVisible(false)} visible={fromModalVisible}>
            <H4>Where are you?</H4>
            <SearchList data={destinations} onPress={(data) => {
              setFromDestinationId(data.id)
              setFromDestinationName(data.title)
              setFromModalVisible(false)
            }}/>
          </ThemedModal>
          <ThemedModal setModalInvisible={() => setToModalVisible(false)} visible={toModalVisible}>
            <H4>Where are you going?</H4>
            <SearchList data={destinations.filter((row) => row.id != fromDestinationId)} onPress={(data) => {
              setToDestinationId(data.id)
              setToDestinationName(data.title)
              setToModalVisible(false)
            }}/>
          </ThemedModal>
          <LabelRow label={"Where are you?"} style={{marginVertical: 10}}>
            <Pressable onPress={() => setFromModalVisible(true)}>
              <P numberOfLines={1}>{fromDestinationName.length > 0 ? fromDestinationName : "Search..."}</P>
            </Pressable>
          </LabelRow>
          <LabelRow label={"Where are you going?"} style={{marginVertical: 10}}>
            <Pressable onPress={() => setToModalVisible(true)}>
              <P numberOfLines={1}>{toDestinationName.length > 0 ? toDestinationName : "Search..."}</P>
            </Pressable>
          </LabelRow>
          <View style={{
            marginVertical: 20,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}>
            <ThemedButton
              label="Submit"
              onPress={() => router.push({
                pathname: "search",
                params: {
                  fromId: fromDestinationId,
                  toId: toDestinationId
                }
              })}
              variant="primary"
              style={{width: "90%", marginBottom: 10}}
            />
            <ThemedButton
              label="Clear"
              onPress={clearForm}
              variant="tertiary"
              style={{width: "90%"}}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
