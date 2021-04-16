const parseOrderBy = (orderString) => {
  switch (orderString) {
    case "CREATED":
      return { orderBy: "CREATED_AT", orderDirection: "ASC" };
    case "RATING_A":
      return { orderBy: "RATING_AVERAGE", orderDirection: "ASC" };
    case "RATING_D":
      return { orderBy: "RATING_AVERAGE", orderDirection: "DESC" };
    default:
      return {
        orderBy: "CREATED_AT",
        orderDirection: "DESC",
      };
  }
};
export default parseOrderBy