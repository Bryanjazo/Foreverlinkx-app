import { JSX, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import ButtonCardsStyles from "../Styles/ButtonCardsStyles";
import FilterButtons from "./FilterButtons";
import { IconSymbol } from "@/components/ui/IconSymbol";
import ProductCard from "./ProductCard";
const products = [
  {
    id: "1",
    name: "Gold Ring",
    price: "$200",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    onSale: true,
    wasPrice: "$250",
    rating: 4.5,
    amountOfReviews: 10,
    category: "Rings",
  },
  {
    id: "2",
    name: "Gold Toe Ring",
    price: "$200",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    onSale: false,
    wasPrice: "$250",
    rating: 4.5,
    amountOfReviews: 10,
    category: "Rings",
  },
  {
    id: "3524",
    name: "Gold Bracelet",
    price: "$200",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    onSale: false,
    wasPrice: "$250",
    amountOfReviews: 10,
    category: "Bracelets",
  },
  {
    id: "4542",
    name: "Gold Necklace",
    price: "$200",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    onSale: true,
    wasPrice: "$250",
    rating: 4.5,
    amountOfReviews: 10,
    category: "Necklaces",
  },
  {
    id: "44342",
    name: "Gold Necklace",
    price: "$200",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    onSale: true,
    wasPrice: "$250",
    rating: 4.5,
    amountOfReviews: 10,
    category: "Earrings",
  },
  {
    id: "4313",
    name: "Gold Necklace",
    price: "$200",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    onSale: true,
    wasPrice: "$250",
    rating: 4.5,
    amountOfReviews: 10,
    category: "Body chains",
  },

  {
    id: "443232",
    name: "Gold Necklace",
    price: "$200",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    onSale: true,
    wasPrice: "$250",
    rating: 4.5,
    amountOfReviews: 10,
    category: "Body chains",
  },
  {
    id: "454",
    name: "Gold Necklace",
    price: "$200",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    onSale: true,
    wasPrice: "$250",
    rating: 4.5,
    amountOfReviews: 10,
    category: "Body chains",
  },
  {
    id: "333132",
    name: "Gold Necklace",
    price: "$200",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    onSale: true,
    wasPrice: "$250",
    rating: 4.5,
    amountOfReviews: 10,
    category: "Body chains",
  },
  {
    id: "31132",
    name: "Gold Necklace",
    price: "$200",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    onSale: true,
    wasPrice: "$250",
    rating: 4.5,
    amountOfReviews: 10,
    category: "Earrings",
  },
  {
    id: "36132",
    name: "Gold Necklace",
    price: "$200",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    onSale: true,
    wasPrice: "$250",
    rating: 4.5,
    amountOfReviews: 10,
    category: "Rings",
  },
  {
    id: "3352",
    name: "Gold Necklace",
    price: "$200",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    onSale: true,
    wasPrice: "$250",
    rating: 4.5,
    amountOfReviews: 10,
    category: "Body chains",
  },
  {
    id: "3342",
    name: "Gold Necklace",
    price: "$200",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    onSale: true,
    wasPrice: "$250",
    rating: 4.5,
    amountOfReviews: 10,
    category: "Body chains",
  },
];

function ButtonsCard(): JSX.Element {
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);
  const [loadMore, setLoadMore] = useState<number>(6);
  const limitedProducts = products.slice(0, loadMore);
  const buttonFilterOptions = [
    "All",
    "Rings",
    "Necklaces",
    "Bracelets",
    "Earrings",
    "Body chains",
  ];
  return (
    <View style={{ marginTop: 20 }}>
      <View style={ButtonCardsStyles.buttonContainer}>
        <FilterButtons
          buttons={buttonFilterOptions}
          setAppliedFilters={setAppliedFilters}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          {/* This will be a future enhancement */}
          {/* <View style={{ marginRight: 10, paddingVertical: 2 }}>
            <Text style={{ fontSize: 12, color: "#6B5D4F", fontWeight: "400" }}>
              Applied filters:
            </Text>
          </View> */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {appliedFilters.length > 0 &&
              appliedFilters.map((label, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#edeceb",
                    borderRadius: 20,
                    minWidth: 40,
                    paddingHorizontal: 10,
                    paddingVertical: 2,
                    marginRight: 10,
                  }}
                >
                  <Text
                    style={{
                      marginRight: 5,
                      fontSize: 12,
                      color: "#2C2520",
                      fontWeight: "500",
                    }}
                    aria-labelledby="clear-filters"
                  >
                    {label}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setAppliedFilters(
                        appliedFilters.filter((_, i) => i !== index)
                      );
                    }}
                    aria-label="clear-filters"
                  >
                    <IconSymbol name="checkmark" color="#2C2520" size={12} />
                  </TouchableOpacity>
                </View>
              ))}
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Text style={{ color: "#6B5D4F", fontSize: 12 }}>
            Showing 6 results
          </Text>
          <TouchableOpacity
            onPress={() => {
              setAppliedFilters([]);
            }}
            aria-label="clear-filters"
          >
            <Text style={{ color: "#6B5D4F", fontSize: 10, fontWeight: "700" }}>
              Clear filters
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {limitedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </View>

        {limitedProducts.length !== products.length && (
          <Pressable
            onPress={() => {
              console.log("Load more products");
              setLoadMore(
                loadMore + 6 > products.length ? products.length : loadMore + 6
              );
            }}
            style={({ pressed }: { pressed: boolean }) => [
              {
                marginTop: 20,
                alignItems: "center",
                backgroundColor: pressed ? "#A18167" : "white",
                paddingVertical: 10,
                borderRadius: 20,
                shadowRadius: 2,
                borderColor: "#ccc",
                borderWidth: 0.5,
              },
            ]}
          >
            <Text style={{ color: "black", fontSize: 12, fontWeight: "600" }}>
              Load More Products
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

export default ButtonsCard;
