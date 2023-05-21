import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ShowScreen() {
  const doctor = {
    name: 'Dr. John Doe',
    email: 'johndoe@example.com',
    profileImage: require('../../assets/doctor_profile_image.jpg'),
    fullName: 'John Doe',
    joinDate: '01/01/2023',
    dui: '123456789',
    phone: '1234567890',
    idCard: 'ABC123456',
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={doctor.profileImage} style={styles.profileImage} />
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={styles.email}>{doctor.email}</Text>
      </View>

      <View style={styles.dataContainer}>
        <Text style={styles.header}>Datos del doctor</Text>
        <View style={styles.dataBox}>
          <Text style={styles.label}>Nombre completo:</Text>
          <Text style={styles.value}>{doctor.fullName}</Text>

          <Text style={styles.label}>Fecha de Ingreso:</Text>
          <Text style={styles.value}>{doctor.joinDate}</Text>

          <Text style={styles.label}>DUI:</Text>
          <Text style={styles.value}>{doctor.dui}</Text>

          <Text style={styles.label}>Teléfono:</Text>
          <Text style={styles.value}>{doctor.phone}</Text>

          <Text style={styles.label}>Carnet:</Text>
          <Text style={styles.value}>{doctor.idCard}</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver historial de citas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#888',
  },
  dataContainer: {
    marginBottom: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dataBox: {
    backgroundColor: '#f1f1f1',
    padding: 16,
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#4caf50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
