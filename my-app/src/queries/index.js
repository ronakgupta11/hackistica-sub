export function FETCH_CREATED_PRODUCT() {
    return ` query{
          productCreateds{
            id
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