import { FC } from "react";
import { View, FlatList } from "react-native";
import { styled } from "styled-components";
import { Card } from "./Card";
import { pathwayData } from "@/interfaces/pathwayData";

const FlatListView = styled(View)`
  flex: 1;
`
interface PathwaysProps {
  data: pathwayData[]
}

export const Pathways: FC<PathwaysProps> = ({data}) => {

  return (
    <FlatListView>
      <FlatList
        data={data}
        contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}
        renderItem={({item}) => 
          <Card 
            title={item.title}
            image={item.image}
            url={item.url}
            intro={item.intro}
            duration={item.duration}
            type={item.type} 
            hasAssessment={item.has_summative_assessment}
            />}
        keyExtractor={item => String(item.id)}
        initialNumToRender={20}
        maxToRenderPerBatch={10}
      />
    </FlatListView>
  )
}