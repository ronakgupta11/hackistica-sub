import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  productAddToCart,
  productBuy,
  productCreated,
  productRemoveFromCart
} from "../generated/Shop/Shop"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createproductAddToCartEvent(
  productId: BigInt
): productAddToCart {
  let productAddToCartEvent = changetype<productAddToCart>(newMockEvent())

  productAddToCartEvent.parameters = new Array()

  productAddToCartEvent.parameters.push(
    new ethereum.EventParam(
      "productId",
      ethereum.Value.fromUnsignedBigInt(productId)
    )
  )

  return productAddToCartEvent
}

export function createproductBuyEvent(
  productId: BigInt,
  quantityBought: BigInt,
  buyer: Address
): productBuy {
  let productBuyEvent = changetype<productBuy>(newMockEvent())

  productBuyEvent.parameters = new Array()

  productBuyEvent.parameters.push(
    new ethereum.EventParam(
      "productId",
      ethereum.Value.fromUnsignedBigInt(productId)
    )
  )
  productBuyEvent.parameters.push(
    new ethereum.EventParam(
      "quantityBought",
      ethereum.Value.fromUnsignedBigInt(quantityBought)
    )
  )
  productBuyEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return productBuyEvent
}

export function createproductCreatedEvent(
  productId: BigInt,
  imageUrl: string,
  name: string,
  category: string,
  price: BigInt,
  token: string,
  quantity: BigInt,
  createdBy: Address
): productCreated {
  let productCreatedEvent = changetype<productCreated>(newMockEvent())

  productCreatedEvent.parameters = new Array()

  productCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "productId",
      ethereum.Value.fromUnsignedBigInt(productId)
    )
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam("imageUrl", ethereum.Value.fromString(imageUrl))
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam("category", ethereum.Value.fromString(category))
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromString(token))
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "quantity",
      ethereum.Value.fromUnsignedBigInt(quantity)
    )
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam("createdBy", ethereum.Value.fromAddress(createdBy))
  )

  return productCreatedEvent
}

export function createproductRemoveFromCartEvent(
  productId: BigInt
): productRemoveFromCart {
  let productRemoveFromCartEvent = changetype<productRemoveFromCart>(
    newMockEvent()
  )

  productRemoveFromCartEvent.parameters = new Array()

  productRemoveFromCartEvent.parameters.push(
    new ethereum.EventParam(
      "productId",
      ethereum.Value.fromUnsignedBigInt(productId)
    )
  )

  return productRemoveFromCartEvent
}
