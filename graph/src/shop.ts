import {
  OwnershipTransferred as OwnershipTransferredEvent,
  productAddToCart as productAddToCartEvent,
  productBuy as productBuyEvent,
  productCreated as productCreatedEvent,
  productRemoveFromCart as productRemoveFromCartEvent
} from "../generated/Shop/Shop"
import {

  productCreated

} from "../generated/schema"

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {}



export function handleproductCreated(event: productCreatedEvent): void {
  let entity = new productCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.productId = event.params.productId
  entity.imageUrl = event.params.imageUrl
  entity.name = event.params.name
  entity.category = event.params.category
  entity.price = event.params.price
  entity.token = event.params.token
  entity.quantity = event.params.quantity
  entity.createdBy = event.params.createdBy


  entity.save()
}

