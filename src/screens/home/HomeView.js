import { View, Text, FlatList, TouchableOpacity, Dimensions,useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import R from "@app/res/R";
import CardOrder from "@app/components/cards/CardOrder";

const minCols = Math.round(R.unit.containerWidth/150);

const calcNumColumns = (width) => {
  const cols = width / (width/6.6);
  console.log(Math.floor(cols),Math.round(R.unit.containerWidth/200),'---',width/5.2,width)
  const colsFloor = Math.floor(cols) < minCols ? Math.floor(cols) : minCols;
  // return colsFloor
  const colsMinusMargin = cols - (2 * colsFloor * (width/R.unit.scale(1000)));
  if (colsMinusMargin < colsFloor && colsFloor > minCols) {
    return colsFloor - 1;
  } else return colsFloor;
};
const HomeView = () => {
  const {width} = useWindowDimensions();
  const [numColumns, setNumColumns] = useState(calcNumColumns(width));

  console.log(width,calcNumColumns(width),'000')



  useEffect(() => {
    setNumColumns(calcNumColumns(width));
  }, [width]);

  const renderOrderList = ({ item }) => {
    return <CardOrder item={item} />;
  };

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: R.color.black2,
        paddingVertical: R.unit.scale(45),
      }}
    >
        {/* <StaggeredList
          key={numColumns}
          data={TableList}
          animationType={'EFFECTIVE'}
          renderItem={renderOrderList}
          keyExtractor={(item, index) => index.toString()}
          numColumns={numColumns}
          showsVerticalScrollIndicator={false}
        /> */}
    </View>
  );
};

export default HomeView;
