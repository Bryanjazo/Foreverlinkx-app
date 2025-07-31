import { JSX, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { bookCard } from "../styles/BookCard";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { PermanentJStyles } from "@/components/Home/styles/PermanentJewelryServices";

function BookCard({
  title,
  description,
  icon,
  time,
  deposit,
  isPopular,
}: {
  title: string;
  description: string;
  icon: string;
  time: string;
  deposit: string;
  isPopular: boolean;
}): JSX.Element {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <View style={bookCard.bookCardContainer}>
      <Pressable
        style={[bookCard.apptCardContainer, isHovered && bookCard.hover]}
        onPressIn={() => setIsHovered(true)}
        onPressOut={() => setIsHovered(false)}
      >
        <View>
          <View style={bookCard.iconContainer}>
            <Text>
              <IconSymbol name={icon} color={"#a48566"} size={15} />
            </Text>
          </View>
        </View>
        <View style={PermanentJStyles.infoContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              paddingBottom: 8,
            }}
          >
            <Text style={[PermanentJStyles.title]}>{title}</Text>
            {isPopular && (
              <View style={bookCard.popularTag}>
                <Text
                  style={{
                    fontSize: 10,
                    alignContent: "center",
                    textAlign: "center",
                    color: "#876648",
                    fontWeight: 700,
                  }}
                >
                  Popular
                </Text>
              </View>
            )}
          </View>

          <Text
            style={[PermanentJStyles.description, PermanentJStyles.hasPadding]}
          >
            {description}
          </Text>
          <View style={bookCard.timeAndPrice}>
            <View
              style={[
                PermanentJStyles.infoAndIconContainer,
                { paddingRight: 10 },
              ]}
            >
              <IconSymbol name="clock" color={"#A18167"} size={15} />
              <Text style={[bookCard.infoText, { paddingLeft: 2 }]}>
                {time}
              </Text>
            </View>
            <View style={[PermanentJStyles.infoAndIconContainer]}>
              <Text
                style={[bookCard.infoText, { paddingLeft: 5, fontWeight: 700 }]}
              >
                ${deposit} deposit
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default BookCard;
