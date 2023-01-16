import {
  OwnershipTransferred as OwnershipTransferredEvent,
  productAddToCart as productAddToCartEvent,
  productBuy as productBuyEvent,
  productCreated as productCreatedEvent,
  productRemoveFromCart as productRemoveFromCartEvent
} from "../generated/Shop/Shop"
import {
  OwnershipTransferred,
  productAddToCart,
  productBuy,
  productCreated,
  productRemoveFromCart
} from "../generated/schema"

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleproductAddToCart(event: productAddToCartEvent): void {
  let entity = new productAddToCart(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.productId = event.params.productId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleproductBuy(event: productBuyEvent): void {
  let entity = new productBuy(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.productId = event.params.productId
  entity.quantityBought = event.params.quantityBought
  entity.buyer = event.params.buyer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

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

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleproductRemoveFromCart(
  event: productRemoveFromCartEvent
): void {
  let entity = new productRemoveFromCart(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.productId = event.params.productId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
