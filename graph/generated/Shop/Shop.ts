// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class productAddToCart extends ethereum.Event {
  get params(): productAddToCart__Params {
    return new productAddToCart__Params(this);
  }
}

export class productAddToCart__Params {
  _event: productAddToCart;

  constructor(event: productAddToCart) {
    this._event = event;
  }

  get productId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class productBuy extends ethereum.Event {
  get params(): productBuy__Params {
    return new productBuy__Params(this);
  }
}

export class productBuy__Params {
  _event: productBuy;

  constructor(event: productBuy) {
    this._event = event;
  }

  get productId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get quantityBought(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get buyer(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class productCreated extends ethereum.Event {
  get params(): productCreated__Params {
    return new productCreated__Params(this);
  }
}

export class productCreated__Params {
  _event: productCreated;

  constructor(event: productCreated) {
    this._event = event;
  }

  get productId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get imageUrl(): string {
    return this._event.parameters[1].value.toString();
  }

  get name(): string {
    return this._event.parameters[2].value.toString();
  }

  get category(): string {
    return this._event.parameters[3].value.toString();
  }

  get price(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get token(): string {
    return this._event.parameters[5].value.toString();
  }

  get quantity(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get createdBy(): Address {
    return this._event.parameters[7].value.toAddress();
  }
}

export class productRemoveFromCart extends ethereum.Event {
  get params(): productRemoveFromCart__Params {
    return new productRemoveFromCart__Params(this);
  }
}

export class productRemoveFromCart__Params {
  _event: productRemoveFromCart;

  constructor(event: productRemoveFromCart) {
    this._event = event;
  }

  get productId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Shop__productsResult {
  value0: BigInt;
  value1: string;
  value2: string;
  value3: string;
  value4: BigInt;
  value5: string;
  value6: BigInt;
  value7: Address;

  constructor(
    value0: BigInt,
    value1: string,
    value2: string,
    value3: string,
    value4: BigInt,
    value5: string,
    value6: BigInt,
    value7: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromString(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromAddress(this.value7));
    return map;
  }

  getProductId(): BigInt {
    return this.value0;
  }

  getImageUrl(): string {
    return this.value1;
  }

  getName(): string {
    return this.value2;
  }

  getCategory(): string {
    return this.value3;
  }

  getPrice(): BigInt {
    return this.value4;
  }

  getToken(): string {
    return this.value5;
  }

  getQuantity(): BigInt {
    return this.value6;
  }

  getCreatedBy(): Address {
    return this.value7;
  }
}

export class Shop extends ethereum.SmartContract {
  static bind(address: Address): Shop {
    return new Shop("Shop", address);
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  products(param0: BigInt): Shop__productsResult {
    let result = super.call(
      "products",
      "products(uint256):(uint256,string,string,string,uint256,string,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Shop__productsResult(
      result[0].toBigInt(),
      result[1].toString(),
      result[2].toString(),
      result[3].toString(),
      result[4].toBigInt(),
      result[5].toString(),
      result[6].toBigInt(),
      result[7].toAddress()
    );
  }

  try_products(param0: BigInt): ethereum.CallResult<Shop__productsResult> {
    let result = super.tryCall(
      "products",
      "products(uint256):(uint256,string,string,string,uint256,string,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Shop__productsResult(
        value[0].toBigInt(),
        value[1].toString(),
        value[2].toString(),
        value[3].toString(),
        value[4].toBigInt(),
        value[5].toString(),
        value[6].toBigInt(),
        value[7].toAddress()
      )
    );
  }

  sellerBalance(param0: Address): BigInt {
    let result = super.call(
      "sellerBalance",
      "sellerBalance(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_sellerBalance(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "sellerBalance",
      "sellerBalance(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class AddToCartCall extends ethereum.Call {
  get inputs(): AddToCartCall__Inputs {
    return new AddToCartCall__Inputs(this);
  }

  get outputs(): AddToCartCall__Outputs {
    return new AddToCartCall__Outputs(this);
  }
}

export class AddToCartCall__Inputs {
  _call: AddToCartCall;

  constructor(call: AddToCartCall) {
    this._call = call;
  }

  get _productId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AddToCartCall__Outputs {
  _call: AddToCartCall;

  constructor(call: AddToCartCall) {
    this._call = call;
  }
}

export class BuyCall extends ethereum.Call {
  get inputs(): BuyCall__Inputs {
    return new BuyCall__Inputs(this);
  }

  get outputs(): BuyCall__Outputs {
    return new BuyCall__Outputs(this);
  }
}

export class BuyCall__Inputs {
  _call: BuyCall;

  constructor(call: BuyCall) {
    this._call = call;
  }

  get _productId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _quantity(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BuyCall__Outputs {
  _call: BuyCall;

  constructor(call: BuyCall) {
    this._call = call;
  }
}

export class ListProductCall extends ethereum.Call {
  get inputs(): ListProductCall__Inputs {
    return new ListProductCall__Inputs(this);
  }

  get outputs(): ListProductCall__Outputs {
    return new ListProductCall__Outputs(this);
  }
}

export class ListProductCall__Inputs {
  _call: ListProductCall;

  constructor(call: ListProductCall) {
    this._call = call;
  }

  get _image(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _name(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _category(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _price(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _quantity(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _token(): string {
    return this._call.inputValues[5].value.toString();
  }
}

export class ListProductCall__Outputs {
  _call: ListProductCall;

  constructor(call: ListProductCall) {
    this._call = call;
  }
}

export class RemoveFromCartCall extends ethereum.Call {
  get inputs(): RemoveFromCartCall__Inputs {
    return new RemoveFromCartCall__Inputs(this);
  }

  get outputs(): RemoveFromCartCall__Outputs {
    return new RemoveFromCartCall__Outputs(this);
  }
}

export class RemoveFromCartCall__Inputs {
  _call: RemoveFromCartCall;

  constructor(call: RemoveFromCartCall) {
    this._call = call;
  }

  get _productId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RemoveFromCartCall__Outputs {
  _call: RemoveFromCartCall;

  constructor(call: RemoveFromCartCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawOwnerCall extends ethereum.Call {
  get inputs(): WithdrawOwnerCall__Inputs {
    return new WithdrawOwnerCall__Inputs(this);
  }

  get outputs(): WithdrawOwnerCall__Outputs {
    return new WithdrawOwnerCall__Outputs(this);
  }
}

export class WithdrawOwnerCall__Inputs {
  _call: WithdrawOwnerCall;

  constructor(call: WithdrawOwnerCall) {
    this._call = call;
  }
}

export class WithdrawOwnerCall__Outputs {
  _call: WithdrawOwnerCall;

  constructor(call: WithdrawOwnerCall) {
    this._call = call;
  }
}

export class WithdrawSellerCall extends ethereum.Call {
  get inputs(): WithdrawSellerCall__Inputs {
    return new WithdrawSellerCall__Inputs(this);
  }

  get outputs(): WithdrawSellerCall__Outputs {
    return new WithdrawSellerCall__Outputs(this);
  }
}

export class WithdrawSellerCall__Inputs {
  _call: WithdrawSellerCall;

  constructor(call: WithdrawSellerCall) {
    this._call = call;
  }
}

export class WithdrawSellerCall__Outputs {
  _call: WithdrawSellerCall;

  constructor(call: WithdrawSellerCall) {
    this._call = call;
  }
}
