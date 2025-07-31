import React, { JSX } from "react";
import { Text, ScrollView, TouchableOpacity } from "react-native";
function FilterButtons({
  buttons,
  setAppliedFilters,
}: {
  buttons: string[];
  setAppliedFilters: React.Dispatch<React.SetStateAction<string[]>>;
}): JSX.Element {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {buttons?.map((button, index) => (
        <TouchableOpacity
          onPress={() =>
            setAppliedFilters((prev: string[]) =>
              prev.includes(button) ? [...prev] : [...prev, button]
            )
          }
          activeOpacity={0.7}
          key={index}
          style={{
            backgroundColor: "#A18167",
            borderRadius: 20,
            marginRight: 10,
            minWidth: 40,
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <Text
            style={{
              borderRadius: 20,
              color: "#fff",
              textAlign: "center",
            }}
          >
            {button}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

export default FilterButtons;
