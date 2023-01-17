import { BigNumber } from "ethers";
import { useState } from "react";
import { ethers } from "ethers";

import {abi,SHOP_CONTRACT_ADDRESS} from "../constants/index.js"
export default function ProductDetails(props){
    // string imageUrl;
    // string name;
    // string category;
    // uint price;
    // string token;
    // uint quantity;


function renderChangeTokenContainer(){
        return(
            <div className="token-section">
                <button className="token-btn" onclick = {setToken("eth")}></button>
                <button className="token-btn" onclick = {setToken("matic")}></button>
                <button className="token-btn" onclick = {setToken("usdc")}></button>
            </div>
        );
    }
function renderTokenBtn(){
        if(token === "eth"){
            return(
                <button>

                </button>
            )
        }
        else if(token === "matic"){
            return(
                <button onClick={renderChangeTokenContainer}>
                            <div >
                            <svg width="153" height="32" viewBox="0 0 153 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.9585 9.7759C26.2994 9.36998 25.4425 9.36998 24.7175 9.7759L19.5762 12.8879L16.0828 14.9175L10.9416 18.0296C10.2825 18.4355 9.4256 18.4355 8.70055 18.0296L4.61393 15.5941C3.9548 15.1882 3.4934 14.444 3.4934 13.6321V8.82875C3.4934 8.01691 3.88888 7.27273 4.61393 6.86681L8.63464 4.49894C9.29377 4.09302 10.1506 4.09302 10.8757 4.49894L14.8964 6.86681C15.5555 7.27273 16.0169 8.01691 16.0169 8.82875V11.9408L19.5103 9.84355V6.7315C19.5103 5.91966 19.1149 5.17548 18.3898 4.76956L10.9416 0.30444C10.2825 -0.10148 9.4256 -0.10148 8.70055 0.30444L1.12053 4.76956C0.39548 5.17548 0 5.91966 0 6.7315V15.7294C0 16.5412 0.39548 17.2854 1.12053 17.6913L8.70055 22.1564C9.35969 22.5624 10.2166 22.5624 10.9416 22.1564L16.0828 19.112L19.5762 17.0148L24.7175 13.9704C25.3766 13.5645 26.2335 13.5645 26.9585 13.9704L30.9792 16.3383C31.6384 16.7442 32.0998 17.4884 32.0998 18.3002V23.1036C32.0998 23.9154 31.7043 24.6596 30.9792 25.0655L26.9585 27.5011C26.2994 27.907 25.4425 27.907 24.7175 27.5011L20.6968 25.1332C20.0376 24.7273 19.5762 23.9831 19.5762 23.1712V20.0592L16.0828 22.1564V25.2685C16.0828 26.0803 16.4783 26.8245 17.2034 27.2304L24.7834 31.6956C25.4425 32.1015 26.2994 32.1015 27.0244 31.6956L34.6045 27.2304C35.2636 26.8245 35.725 26.0803 35.725 25.2685V16.2706C35.725 15.4588 35.3295 14.7146 34.6045 14.3087L26.9585 9.7759Z" fill="#7950DD"/>
                            <path d="M49.6421 29.1225V21.6525C50.4459 22.6725 51.9046 23.2425 53.6016 23.2425C57.9183 23.2425 60.8359 20.1525 60.8359 15.4425C60.8359 10.7325 58.1565 7.6425 53.9588 7.6425C52.0237 7.6425 50.5352 8.3625 49.6421 9.5325V7.8825H45.5039V29.1225H49.6421ZM53.0955 19.6425C50.8627 19.6425 49.4039 17.9625 49.4039 15.4425C49.4039 12.8925 50.8627 11.2125 53.0955 11.2125C55.2687 11.2125 56.7573 12.8925 56.7573 15.4425C56.7573 17.9625 55.2687 19.6425 53.0955 19.6425Z" fill="black"/>
                            <path d="M70.2325 23.2425C74.847 23.2425 78.1516 19.9425 78.1516 15.4425C78.1516 10.9425 74.847 7.6425 70.2325 7.6425C65.6181 7.6425 62.3135 10.9425 62.3135 15.4425C62.3135 19.9425 65.6181 23.2425 70.2325 23.2425ZM70.2325 19.6425C67.9997 19.6425 66.4814 17.9325 66.4814 15.4425C66.4814 12.9225 67.9997 11.2125 70.2325 11.2125C72.4654 11.2125 73.9837 12.9225 73.9837 15.4425C73.9837 17.9325 72.4654 19.6425 70.2325 19.6425Z" fill="black"/>
                            <path d="M84.7914 23.0025V1.3125H80.6533V23.0025H84.7914Z" fill="black"/>
                            <path d="M97.2307 7.8825L94.1048 17.6325L90.9491 7.8825H86.7216L92.1697 22.8825L89.9667 29.1225H93.9262L96.0399 22.9425L101.488 7.8825H97.2307Z" fill="black"/>
                            <path d="M113.11 9.3825C112.276 8.3325 110.788 7.6425 108.972 7.6425C104.595 7.6425 101.946 10.7325 101.946 15.4425C101.946 20.1525 104.595 23.2425 109.031 23.2425C110.788 23.2425 112.365 22.5825 113.14 21.4725V23.4525C113.14 24.8625 112.217 25.8525 110.966 25.8525H104.059V29.1225H111.621C115.015 29.1225 117.278 27.0525 117.278 23.9025V7.8825H113.11V9.3825ZM109.686 19.6425C107.483 19.6425 106.024 17.9925 106.024 15.4425C106.024 12.8925 107.483 11.2125 109.686 11.2125C111.919 11.2125 113.378 12.8925 113.378 15.4425C113.378 17.9925 111.919 19.6425 109.686 19.6425Z" fill="black"/>
                            <path d="M127.71 23.2425C132.325 23.2425 135.629 19.9425 135.629 15.4425C135.629 10.9425 132.325 7.6425 127.71 7.6425C123.096 7.6425 119.791 10.9425 119.791 15.4425C119.791 19.9425 123.096 23.2425 127.71 23.2425ZM127.71 19.6425C125.477 19.6425 123.959 17.9325 123.959 15.4425C123.959 12.9225 125.477 11.2125 127.71 11.2125C129.943 11.2125 131.461 12.9225 131.461 15.4425C131.461 17.9325 129.943 19.6425 127.71 19.6425Z" fill="black"/>
                            <path d="M142.061 23.0025V14.7225C142.061 12.7725 143.341 11.3625 145.157 11.3625C146.883 11.3625 148.044 12.6825 148.044 14.5125V23.0025H152.212V13.5825C152.212 10.1025 150.009 7.6425 146.615 7.6425C144.561 7.6425 142.894 8.5125 142.061 9.9825V7.8825H137.893V23.0025H142.061Z" fill="black"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-down"><polyline points="19 12 12 19 5 12"></polyline></svg>
                            </div>
                </button>
            )
        }
        else{
            return(
                <button></button>
            )
        }
    }
    
  const zero = BigNumber.from(0);
    const [imageUrl,setImageUrl] = useState("");
    const [name,setName] = useState("");
    const[category,setCategory] = useState("");
    const [price,setPrice] = useState(zero);
    const [token,setToken] = useState("matic");
    const [quantity,setQuantity]  = useState(zero);
    const[render,setRender] = useState(false);



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

    const upload = async () => {
        try {
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
        //   setLoading(false);
        } catch (err) {
          console.error(err);
        //   setLoading(false);
        }
      };
    

    return(<div className="product-detail-page">
    <div className="container">
   
        
        <div className="product-form">
                <form>
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
                        {renderTokenBtn()}

                        
                    </div>
                    </div>

                    
                    <div >
                        <button onClick={upload} className="btn-form">Upload Product</button>
                    </div>
                </form>
        </div>        
    </div>

    </div>
    );

}