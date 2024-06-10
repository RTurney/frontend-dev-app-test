import React, {useEffect, useState} from 'react';
import { FlatList, SafeAreaView, Text } from "react-native";
import { pathwayData } from '@/interfaces/pathwayData';
import { Card } from '@/components/Card';

export default function Pathways() {
  const [data, setData] = useState<pathwayData[]>([{
    id: -1,
    title: "",
    url: "",
    intro: "", 
    duration: "", 
    image: "", 
    type: "",
    has_summative_assessment: false
  }]);
 const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    if (!loaded) {
      fetch(
        'https://blackbullion.com/api/_dev/pathways'
        ).then(response => response.json()).then(json => setData(json));
        setLoaded(true);
    }
  }, [data]);

  return (
    <SafeAreaView>
      {data[0].id !== -1 ? 
      <FlatList
        data={data}
        renderItem={({item}) => <Card data={item} />}
        keyExtractor={item => String(item.id)}
        /> : <Text>Loading</Text>} 
    </SafeAreaView>
  );
};
