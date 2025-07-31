import { JSX } from "react";
import { ImageBackground, TouchableOpacity, View, Text } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";

type ProductCardProps = {
  id: string;
  name: string;
  price: string;
  image: string;
  onSale: boolean;
  wasPrice: string;
  rating?: number;
  amountOfReviews?: number;
};

function ProductCard({
  id,
  name,
  price,
  image,
  onSale,
  wasPrice,
  rating,
  amountOfReviews,
}: ProductCardProps): JSX.Element {
  return (
    <ImageBackground
      key={id}
      source={{
        uri: image,
      }}
      imageStyle={{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,

        borderBottomRightRadius: 20,
        width: "100%",
      }}
      style={{
        width: "49%",
        marginBottom: 10,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        height: 250,
      }}
    >
      <TouchableOpacity
        style={{ height: "100%" }}
        onPress={() => console.log("Product pressed")}
        activeOpacity={0.97}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          {onSale ? (
            <View
              style={{
                backgroundColor: "red",
                borderRadius: 20,
                justifyContent: "center",
                width: 38,
                height: 18,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 8,

                  textAlign: "center",
                  fontWeight: "900",
                }}
              >
                Sale
              </Text>
            </View>
          ) : (
            <Text></Text>
          )}

          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              backgroundColor: "#ffe2e1",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconSymbol name="heart.fill" size={12} color="red" />
          </View>
        </View>

        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            height: 90,
            position: "absolute",
            bottom: 0,
            left: 0,
            justifyContent: "flex-start",
            padding: 10,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <View style={{ marginBottom: 5 }}>
            <Text style={{ color: "black", fontSize: 10 }}>{name}</Text>
          </View>
          {rating && amountOfReviews ? (
            <View
              style={{
                marginBottom: 5,
                flexDirection: "row",
              }}
            >
              <IconSymbol name="star.fill" size={10} color="gold" />
              <Text style={{ color: "black", fontSize: 8, marginLeft: 3 }}>
                {rating}
              </Text>
              <Text style={{ color: "black", fontSize: 8, marginLeft: 3 }}>
                ({amountOfReviews})
              </Text>
            </View>
          ) : (
            <Text></Text>
          )}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#A18167",
                fontSize: 10,
                fontWeight: "500",
                marginRight: 5,
              }}
            >
              {price}
            </Text>
            <Text
              style={{
                color: "#6B5D4F",
                fontSize: 10,
                fontWeight: "500",
                textDecorationLine: "line-through",
              }}
            >
              {wasPrice}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default ProductCard;
