export function FETCH_CREATED_PRODUCT() {
    return `query {
          products(orderBy:id, orderDirection:desc, first: 1) {
              productId
              imageUrl
              name
              category
              price
              token
              quantity
              createdBy
          }
      }`;
  }