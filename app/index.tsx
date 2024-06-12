import React, { useEffect, useState } from 'react';
import { SafeAreaView } from "react-native";
import { pathwayData } from '@/interfaces/pathwayData';
import { styled } from 'styled-components';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Pathways } from '@/components/Pathways';

const Screen = styled(SafeAreaView)`
  background-color: black;
  display: flex;
  width: 100%;
  align-items: center;
  flex: 1;
`

export default function index() {
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
    <Screen>
      {data[0].id !== -1 ? 
        <Pathways data={data} /> : <LoadingScreen />     
        } 
    </Screen>
  );
};

