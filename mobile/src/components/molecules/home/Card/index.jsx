import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Card({
  link,
  title,
  handleSelect,
  price,
  qtd,
  selected
}) {

  return (
    <View style={styles.containerInternal}>
      <Image source={{ uri: link }} style={styles.imageContainer}/>
      <Text style={styles.description}>{title}</Text>
      <Text style={styles.price}>{`R$ ${price.toFixed(2).replace('.', ',')}`}</Text>
      <TouchableOpacity
        style={styles.touchabled}
        onPress={handleSelect}
        disabled={selected}
      >
        <Text style={styles.quantity}>{qtd}</Text>
        <Text style={styles.button}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  containerInternal: {
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 4
  },
  imageContainer: {
    alignSelf: 'center',
    height: 180,
    width: 180,
    resizeMode: 'contain',
  },
  description: {
    fontSize: 16,
    paddingHorizontal: 32,
    paddingVertical: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 32,
    paddingVertical: 8,
  },
  quantity: {
    backgroundColor: '#c62c4a',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    flexGrow: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    padding: 8,
  },
  touchabled: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 14,
    padding: 8,
  },
  button: {
    backgroundColor: '#f8375d',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    flexGrow: 4,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 8,
  },
});