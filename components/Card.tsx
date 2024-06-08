import React, {FC} from 'react';
import { Text, Image, StyleSheet, ListRenderItemInfo } from 'react-native';
import { pathwayData } from '@/interfaces/pathwayData';

type cardProps = {
  data: pathwayData
}

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 250
  }
});

export const Card: FC<cardProps> = ({data}) => {
  
  return (
    <>
      <Image style={styles.image} source={{uri: data.image}}/>
      <Text>{data.title}</Text>
      <Text>url: {data.url}</Text>
      <Text>{data.intro}</Text>
      <Text>Duration: {data.duration}</Text>
      <Text>{data.type}</Text>
    </>
  )
}