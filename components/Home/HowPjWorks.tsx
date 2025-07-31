import { JSX } from "react";
import { Text, View } from "react-native";

const PjInfoCard = ({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description: string;
}) => {
  return (
    <>
      <View
        key={Math.random()}
        style={{
          paddingBottom: 20,
          height: 60,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            paddingBottom: 20,
            height: 60,
          }}
        ></View>
        <View
          style={{
            marginRight: 10,
            backgroundColor: "#A18167",
            padding: 10,
            borderRadius: 11,
            height: "90%",
          }}
        >
          <Text style={{ color: "white" }}>0{index}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 14, marginTop: 7, marginBottom: 5 }}>
            {title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "#6B5D4F",
              maxWidth: "100%",
              marginRight: 50,
            }}
          >
            {description}
          </Text>
        </View>
      </View>
    </>
  );
};
const HowPjWorks = (): JSX.Element => {
  const info = [
    {
      title: "Book Your Appointment",
      description: "Book your appointment online or in-store.",
    },
    {
      title: "Choose Your Jewelry",
      description: "Select from a variety of chains and charms.",
    },
    {
      title: "Get Fitted",
      description: "We will fit the jewelry to your wrist or ankle.",
    },
    {
      title: "Enjoy Your Jewelry",
      description: "Wear your permanent jewelry with pride.",
    },
    {
      title: "Care Instructions",
      description:
        "Follow our care instructions to keep your jewelry looking great.",
    },
  ];
  return (
    <View style={{ paddingTop: 20 }}>
      <Text style={{ paddingBottom: 20 }}>How Permanent Jewelry Works</Text>

      {info.map(({ title, description }, index) => (
        <PjInfoCard
          key={index}
          index={`${index + 1}`}
          title={title}
          description={description}
        />
      ))}
    </View>
  );
};

export default HowPjWorks;
