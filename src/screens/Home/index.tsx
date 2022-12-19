import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export const Home = () => {
  const [participants, setParticipants] = useState<string[]>([]);
  const [newParticipantName, setNewParticipantName] = useState("");

  const handleAddParticipant = () => {
    if (participants.includes(newParticipantName)) {
      return Alert.alert(
        "Participante já existe!",
        "Já existe um participante na lista com esse nome!"
      );
    }

    setParticipants((state) => {
      return [...state, newParticipantName];
    });

    setNewParticipantName("");
  };

  const handleRemoveParticipant = (name: string) => {
    const RemoveParticipant = () => {
      const newParticipantsList = participants.filter(
        (participant) => name !== participant
      );

      setParticipants(newParticipantsList);

      Alert.alert("Deletado!", `Você removeu o(a) ${name} da lista!`);
    };

    Alert.alert(
      "Remover",
      `Tem certeza que quer remover o(a) ${name} da lista?`,
      [
        {
          text: "Sim",
          onPress: () => RemoveParticipant(),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6B6B6B"
          value={newParticipantName}
          onChangeText={(text) => setNewParticipantName(text)}
          // keyboardType="numeric"
          // keyboardType="email-address"
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Ninguém foi convidado ainda!</Text>
        )}
      />
    </View>
  );
};
