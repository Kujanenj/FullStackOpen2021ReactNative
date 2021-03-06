import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import LineItem from "./LineItem";
import useSingleRepository from "../../hooks/useSingleRepository";
const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
  },
  flexContainerColumn: {
    display: "flex",
    flexDirection: "column",
  },
  flexItem: {
    flexGrow: 1,
  },
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  button: {
    paddingLeft: 50,
  },
  score: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
const RepositoryInfo = ({ repository }) => {
  return <RepositoryItem item={repository} isSingle={true}></RepositoryItem>;
};

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.flexContainer}>
      <View>
        <Text style={[styles.flexItem, styles.score]}>{review.rating}</Text>
      </View>
      <View style={[styles.flexContainer, styles.flexContainerColumn]}>
        <LineItem
          text={review.createdAt}
          value={review?.user.username}
        ></LineItem>
        <Text style={styles.flexItem}>{review.text}</Text>
      </View>
    </View>
  );
};

const SingleRepository = () => {
  const { id } = useParams();

  const { repository, fetchMore, loading } = useSingleRepository({
    id,
    first: 1,
  });
  const onEndReached = () => {
     fetchMore()
  };

  if (!loading) {
    const reviews = repository
      ? repository.reviews.edges.map((edge) => edge.node)
      : [];

    return (
      <View>
        {/* <RepositoryItem item={data.repository} isSingle={true}></RepositoryItem> */}
        <FlatList
          data={reviews}
          renderItem={({ item }) => <ReviewItem review={item}></ReviewItem>}
          keyExtractor={({ id }) => id}
          ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
          onEndReachedThreshold={0.5}
          onEndReached={onEndReached}
        ></FlatList>
      </View>
    );
  }

  return null;
};
export default SingleRepository;
