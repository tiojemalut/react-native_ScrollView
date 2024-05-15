import { useEffect, useState } from 'react';
import {
 
  FlatList,
  Image,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';

interface Product {
  id: number;
  name: string;
  harga: number;
  photo: string;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const products = [
      {
        id: 1,
        name: 'Sepatu',
        harga: 200,
        photo:
          'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/30/d5e458f3-f153-4063-bf09-a7d71b818c76.jpg',
      },
      {
        id: 2,
        name: 'Tas',
        harga: 100,
        photo:
          'https://elizabeth.co.id/wp-content/uploads/2023/07/0032-0922-05_0.jpg',
      },
      {
        id: 3,
        name: 'kacamata',
        harga: 150,
        photo:
          'https://img.lazcdn.com/g/p/9e24b2ae1dab85456c9e121c2c6cec54.jpg_720x720q80.jpg',
      },
      {
        id: 4,
        name: 'sandal',
        harga: 200,
        photo:
          'https://down-id.img.susercontent.com/file/id-11134201-23030-5xnvnhcqhiovd7',
      },
      {
        id: 5,
        name: 'silverxros sandal',
        harga: 100,
        photo:
          'https://down-id.img.susercontent.com/file/sg-11134201-23010-chn2d5tzpumvb1',
      },
      {
        id: 6,
        name: 'kaos polos',
        harga: 70,
        photo:
          'https://img.lazcdn.com/g/ff/kf/Sb10d8e1c7ad7446481577b20447f4d87f.jpg_720x720q80.jpg',
      },
      {
        id: 7,
        name: 'Topi',
        harga: 95,
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjixrAnyxiZNyI6nrvXr9cwPa0CsVOwANLw&usqp=CAU',
      },
      {
        id: 8,
        name: 'baju kaos',
       harga: 150.000,
        photo:
          'https://cf.shopee.co.id/file/fdcd4090ffcc2841e2afe184cbf2d586',
      },
      
    ];
    setProducts(products);
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={{ padding: 10 }}>
        <FlatList
          data={products}
          numColumns={2}
          ListHeaderComponent={() => (
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                marginTop: 20,
                fontWeight: 'bold',
                color: 'white',
                backgroundColor:'black', 
                borderRadius:30, 
               
              }}>
             Gimbot Shop
            </Text>
          )}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: 'black',
                maxWidth: '45%',
                maxHeight: 400,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 20,
                padding: 20,
                borderRadius: 10,
                borderWidth: 2,
                shadowRadius: 5,
              }}>
              <Image
                source={{ uri: item.photo }}
                style={{ width: 90, height: 100, borderRadius: 5 }}
              />
              <Text style={{ paddingVertical: 20,color:'white',fontWeight: 'bold', }}>{item.name}</Text>
              <Text style={{ paddingBottom: 20,color:'white',fontWeight: 'bold', }}>Price: ${item.harga}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;