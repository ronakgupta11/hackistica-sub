// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Shop at 0xcF8C5C5Cd9762798e4e33fF770c91c6639fee287
// https://mumbai.polygonscan.com/address/0xcF8C5C5Cd9762798e4e33fF770c91c6639fee287#code

contract Shop is Ownable {
    uint id = 0;
        uint shopEarning = 0;
    constructor(){
        address owner = msg.sender;
        
    }
    event productCreated(uint productId,string imageUrl,string name, string category,uint price,string token,uint quantity,address createdBy);

    event productBuy(uint productId, uint quantityBought, address buyer);

    event productAddToCart(uint productId);

    event productRemoveFromCart(uint productId);

    struct Product{
        uint productId;
        string imageUrl;
        string name;
        string category;
        uint price;
        string token;
        uint quantity;
        address createdBy;
    }
    Product[] public products;

    // function regAsSeller{

    // }

    

    mapping (address => uint) public sellerBalance;
    //create a object for product containing productId,price,name,details,img

    function platformFee(uint _price) pure internal returns(uint){
        return (_price * 999)/1000;


    }

    function buy(uint _productId, uint _quantity) public payable{
        Product memory selectedProduct = products[_productId];
        uint price = _quantity*selectedProduct.price;
        require(msg.value>price,"sent value is less then price");
        require(products[_productId].quantity>0,"sold out");
        uint fee = platformFee(price);
        shopEarning = shopEarning + fee;
        address seller = selectedProduct.createdBy;
        sellerBalance[seller] = sellerBalance[seller] + (price - fee);
        selectedProduct.quantity = selectedProduct.quantity - _quantity;
        
        //transfer product to cart
        //emit event productBuy
        //transfer money to seller and shoperaning
        // remove product from display, and display it under placed orders;
        emit productBuy(_productId,_quantity,msg.sender);


        
    }

    function listProduct(string memory _image, string memory _name, string memory _category,uint _price,uint _quantity,string memory _token) public{
        uint productId = id;
        products.push(Product(productId,_image,_name,_category,_price,_token,_quantity,msg.sender));
        id++;

        //emit event productCreated
        emit productCreated(productId,_image,_name,_category,_price,_token,_quantity,msg.sender);
    }
    
    function addToCart(uint _productId) public{
        emit productAddToCart(_productId);

    }

    function removeFromCart(uint _productId) public{
        emit productRemoveFromCart(_productId);
    }


    function withdrawSeller() public{
        (bool sent,) = msg.sender.call{value: sellerBalance[msg.sender] }("");
        require(sent,"failed to sent ether to seller");
        sellerBalance[msg.sender]= 0;


    }


    function withdrawOwner() public onlyOwner{
        (bool sent,) = msg.sender.call{value: shopEarning }("");
        require(sent,"failed to sent ether");
        shopEarning = 0;

    }
 receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}
    
}
