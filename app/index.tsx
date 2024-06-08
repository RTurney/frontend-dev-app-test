import React, {useEffect, useState} from 'react';
import { FlatList, SafeAreaView } from "react-native";
import { pathwayData } from '@/interfaces/pathwayData';
import { Card } from '@/components/Card';

export default function Pathways() {
  const [data, setData] = useState<pathwayData[]>([{
    id: 0,
    title: "",
    url: "",
    intro: "", 
    duration: "", 
    image: "", 
    type: "",
    has_summative_assessment: false
  }]);

  useEffect(() => {
    fetch(
      'https://blackbullion.com/api/_dev/pathways'
      ).then(response => response.json()).then(json => setData(json));
  }, []);

  console.log(data);
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item}) => <Card data={item} />}
        keyExtractor={item => String(item.id)}
        />
      {data && data.map((pathway) => {
      return <Card data={pathway} />})}
    </SafeAreaView>
  );
};

