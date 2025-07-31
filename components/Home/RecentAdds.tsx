import { JSX } from "react";
import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { IconSymbol } from "../ui/IconSymbol.ios";
import { LinearGradient } from "expo-linear-gradient";

const ImageCard = ({
  imgUrl,
  description,
  title,
}: {
  imgUrl: string;
  description: string;
  title: string;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={{
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2.5 },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        height: 180,
        backgroundColor: "white",
        borderRadius: 20,
      }}
      onPress={() => console.log("image pressed")}
    >
      <View>
        <ImageBackground
          source={{
            uri: imgUrl,
          }}
          imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
          style={{
            height: "95%",
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              paddingTop: 0,
              paddingRight: 0,
              paddingBottom: 15,
              paddingLeft: 15,
            }}
          >
            <Text
              style={{
                paddingBottom: 8,
                fontWeight: 700,
                color: "white",
              }}
            >
              {title}
            </Text>
            <Text style={{ color: "white", fontSize: 12 }}>{description}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const RecentAdds = (): JSX.Element => {
  const infoForImgs = [
    {
      title: "Title of image",
      description: "description of image",
      imgUrl:
        "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Title of image",
      description: "description of image",
      imgUrl: "https://picsum.photos/id/33/800/450",
    },
    {
      title: "Title of image",
      description: "description of image",
      imgUrl: "https://picsum.photos/800/450?grayscale&blur=4",
    },
  ];
  return (
    <View style={{ marginTop: 20, marginBottom: 30 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: 10,
          paddingTop: 10,
        }}
      >
        <Text>Recent custom pieces</Text>
        <TouchableOpacity onPress={() => console.log("Check availability")}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 10,
                color: "#A18167",
                fontWeight: "700",
                paddingRight: 2,
              }}
            >
              View Gallery
            </Text>
            <IconSymbol name="arrow.right" color={"#A18167"} size={10} />
          </View>
        </TouchableOpacity>
      </View>
      {infoForImgs.map(({ title, description, imgUrl }, index) => (
        <View key={index} style={{ paddingBottom: 20 }}>
          <ImageCard title={title} description={description} imgUrl={imgUrl} />
        </View>
      ))}

      <LinearGradient
        colors={["#e7d6c4", "#f5f2ed"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          height: 70,
          flexDirection: "row",
          borderRadius: 15,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 17, color: "#A18167", marginBottom: 5 }}>
            500+
          </Text>
          <Text style={{ fontSize: 10 }}>Custom Pieces</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 17, color: "#A18167", marginBottom: 5 }}>
            5+
          </Text>
          <Text style={{ fontSize: 10 }}>Years Experience</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 17, color: "#A18167", marginBottom: 5 }}>
            100%
          </Text>
          <Text style={{ fontSize: 10 }}>Satisfaction</Text>
        </View>
      </LinearGradient>

      <View
        style={{
          backgroundColor: "#faf9f7",
          marginTop: 20,
          paddingTop: 30,
          paddingLeft: 30,
          paddingRight: 30,
          paddingBottom: 20,
          borderRadius: 15,
          flexDirection: "row",
        }}
      >
        <View style={{ paddingRight: 10 }}>
          <IconSymbol name="arrow.right" color={"#A18167"} size={8} />
        </View>
        <View>
          <Text
            style={{
              fontSize: 12,
              marginRight: 10,
              color: "#2C2520",
              fontStyle: "italic",
            }}
          >
            &rdquo;ForeverLinkx turned my grandmother&apos;s vintage stones into
            the most beautiful modern ring. The consultation process was so
            thoughtful and collaborative.&rdquo;
          </Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View
              style={{
                backgroundColor: "#A18167",
                borderRadius: 100,
                width: 20,
                height: 20,
                marginRight: 5,
              }}
            >
              <Text></Text>
            </View>
            <View>
              <Text style={{ fontSize: 12 }}>Sarah M.</Text>
              <Text style={{ fontSize: 8, color: "#6B5D4F" }}>
                Custom Engagement Ring
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecentAdds;
