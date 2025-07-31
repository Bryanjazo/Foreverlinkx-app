import { TouchableOpacity } from "react-native";
import { ReactNode } from "react";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";

interface CustomTabBarButtonProps extends BottomTabBarButtonProps {
  children: ReactNode;
}

export const CustomTabBarButton = (props: CustomTabBarButtonProps) => {
  const focused = props["aria-selected"];
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        borderRadius: 10,
        backgroundColor: focused ? "#8b7355" : "",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        height: 50,
        marginLeft: 22,
        marginRight: 22,
      }}
    >
      {props.children}
    </TouchableOpacity>
  );
};
