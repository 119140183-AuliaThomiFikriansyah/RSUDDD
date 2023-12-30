import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';

import {launchCamera} from 'react-native-image-picker'; // Mengganti import untuk menggunakan fungsi kamera
import {Colors, IconUploadImage} from '../../Assets';

const Kamera = ({onInputChange}) => {
  const windowWidth = Dimensions.get('window').width;
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageName, setImageName] = useState(null);

  const handleImageUpload = () => {
    const options = {
      mediaType: 'photo',
    };

    launchCamera(options, response => {
      // Menggunakan fungsi launchCamera untuk mengambil foto dari kamera
      if (response.assets) {
        setSelectedImage(response.assets[0].uri);
        setImageName(response.assets[0].fileName);
        console.log(response.assets[0].fileName);
        onInputChange(response);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.icon}>
        {selectedImage ? (
          <Image
            source={{uri: selectedImage}}
            style={{width: windowWidth * 0.8, height: 200, borderRadius: 10}}
          />
        ) : (
          <IconUploadImage />
        )}
      </View>
      <TouchableOpacity style={styles.LoginButton} onPress={handleImageUpload}>
        <Text style={styles.ButtonText}>Ambil Foto</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Kamera;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {},
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.8,
    height: 200,
    borderWidth: 1,
    borderColor: Colors.BiruDefault,
    borderRadius: 10,
  },
  LoginButton: {
    marginTop: 5,
    backgroundColor: Colors.BiruDefault,
    width: windowWidth * 0.8,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
  },
  ButtonText: {
    fontSize: 14,
    color: Colors.PutihDefault,
    textAlign: 'center',
    fontFamily: 'FiraSansSemiBold',
    textTransform: 'uppercase',
  },
});
