// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Shop {
    address owner;
    constructor(){
         owner = msg.sender;
    }
    event productCreated();

    event productBuy();

    uint shopEarning;

    mapping (address => uint) sellerBalance;
    //create a object for product containing productId,price,name,details,img

    function buy(uint _productId) public {
        require(msg.value>price,"sent ether is less then price");
        //transfer product to cart
        //emit event productBuy

        
    }

    function listProduct(product) public{

        //emit event productCreated
    }
    
    function withdrawSeller() public{
        

    }
    function withdrawOwner() public onlyOwner{
        (bool sent,) = msg.sender.call(){value: shopEarning }("");
        require(sent,"failed to sent ether");
        shopEarning = 0;

    }

    
}
