import { View, ActivityIndicator, Text } from "react-native";
import { styled } from 'styled-components';

const LoadingView = styled(View)`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: black;
  align-items: center;
  justify-content: center;
`

const LoadingText = styled(Text)`
  color: #white;
  padding: 5%;
`

export const LoadingScreen = () => {

  return (
    <LoadingView>
      <ActivityIndicator size={'large'} color={'white'}/>
      <LoadingText>Loading Pathways...</LoadingText>
    </LoadingView>  
  )
}