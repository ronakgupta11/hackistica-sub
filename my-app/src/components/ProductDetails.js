import { BigNumber } from "ethers";
import { useState } from "react";
import { ethers } from "ethers";
import { usdcAddress,usdcabi,usdtAddress,usdtabi,maticAddress,maticabi } from "../constants/index.js";
import {abi,SHOP_CONTRACT_ADDRESS} from "../constants/index.js"
export default function ProductDetails(props){



    
  const zero = BigNumber.from("0");
    const [imageUrl,setImageUrl] = useState("");
    const [name,setName] = useState("");
    const[category,setCategory] = useState("");
    const [price,setPrice] = useState(zero);
    const [token,setToken] = useState("matic");
    const [quantity,setQuantity]  = useState(0);
    

async function getBal(){

    const provider =  await props.getSigner(true);
    const address = await provider.getAddress()
    // const ethBal = await provider.getBalance(address).then((balance) => 
    //     ethers.utils.formatEther(balance));
    
    // const usdcContract = new ethers.Contract(usdcAddress, usdcabi, provider);
    // const usdcBal = await usdcContract.balanceOf(address);
    // const maticContract = new ethers.Contract(maticAddress, maticabi, provider);
    // const maticBal = await maticContract.balanceOf(address);
    // const usdtContract = new ethers.Contract(usdtAddress, usdtabi, provider);
    // const usdtBal = await usdtContract.balanceOf(address);

    return(
        <div className="seller-details">
            <h3>Wallet address :{address}"</h3>
            <p>Matic 0 </p>
            <p>Eth 0</p>
            <p>USDC 0 </p>
            <p>USDT 0 </p>

        </div>
    );

}

    function handleImage(e){
        setImageUrl(e.target.value);

    }
    function handleName(e){
        setName(e.target.value);

    }
    function handleCategory(e){
        setCategory(e.target.value);

    }
    function handleQuantity(e){
        setQuantity(e.target.value);

    }
    function handlePrice(e){
        console.log(e.target.value)
        setPrice(e.target.value);

    }
    function handleToken(e){
        console.log(e.target.value)
        setToken(e.target.value);

    }

    const upload = async () => {
        try {
            props.setLoading(true);
          // Get the signer from web3Modal, which in our case is MetaMask
          // No need for the Signer here, as we are only reading state from the blockchain
          const signer = await props.getSigner(true);
          // We connect to the Contract using a signer because we want the owner to
          // sign the transaction
          const shopContract = new ethers.Contract(
            SHOP_CONTRACT_ADDRESS,
            abi,
            signer
          );
        //   setLoading(true);
          // call the startGame function from the contract
          const tx = await shopContract.listProduct(imageUrl,name,category,price,quantity,token);
          await tx.wait();
          props.setLoading(false);
        } catch (err) {
          console.error(err);
          props.setLoading(false);
        }
      };
    

    return(<div className="product-detail-page">
    <div className="container">
   
        <div>
            {/* {getBal()} */}
            
        </div>
        <div className="product-form">
             
                    <div >
                        <input onChange={handleImage} className="input-area" type="text" id="product-image" placeholder="Enter image Url"></input>
                    </div>
                    <div>
                        <input onChange={handleName} className="input-area" type="text" id="product-name" placeholder="Enter Product Name"></input>
                    </div>

                    <div>
                        <input onChange={handleCategory} className="input-area" type="text" id="product-category" placeholder="Enter Category(electronics,nft,household)"></input>
                    </div>
                
                    <div>
                        <textarea className="input-area desc-input" name="myText"  cols="30" rows="10" placeholder="describe your product:"></textarea>
                    </div>
                    <div>
                        <input onChange={handleQuantity} className="input-area" type="text" id="product-quantity" placeholder="Quantity"></input>
                    </div>

                    <div onChange={handlePrice} className="price-selection">
                        <input className="input-area price-input" type="text" id="product-category" placeholder="Enter Price"></input>
                        <div>

                        {/* {renderTokenImage()} */}
                        {/* <button style={{background:"transparent"
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-down"><polyline points="19 12 12 19 5 12"></polyline></svg>
                        </button> */}
                        <select className = "select-option" value={token} onChange = {handleToken} id="token">
                            <option value="eth" >Eth</option>
                            <option value="usdc" selected>USDC</option>
                            <option value="matic" > Matic
                                </option>
                            <option value="usdt" >USDT</option>
                        </select>

                        
                    </div>
                    </div>

                    
             
                    <div >
                        <button onClick={() => upload()} className="btn-form btn btn-light wallet-btn wallet-btn">{props.loading?"loading...":"Upload Product"}</button>
                    </div>
        </div>   

    </div>

    </div>
    );

}