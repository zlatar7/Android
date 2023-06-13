import { useState } from 'react';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { ImageSelector } from '../../components';
import { theme } from '../../constants';
import { savePlace } from '../../store/place.slice';

const NewItem = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [image, setImage] = useState('');

  const onHandlerChangeText = (text) => {
    setText(text);
  };

  const onHandlerSubmit = () => {
    dispatch(savePlace({ title: text, image })).unwrap();
    navigation.navigate('categories');
  };

  const onImage = (imageUri) => {
    setImage(imageUri);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Nombre del nuevo producto</Text>
        <TextInput
          style={styles.input}
          placeholder="Jean Oxford"
          onChangeText={onHandlerChangeText}
          value={text}
        />
        <ImageSelector onImage={onImage} />
        <Button title="Añadir foto" color={theme.colors.primary} onPress={onHandlerSubmit} />
      </View>
    </ScrollView>
  );
};

export default NewItem;
