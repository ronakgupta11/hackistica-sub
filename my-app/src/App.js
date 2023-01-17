// import logo from './logo.svg';

import Header from './components/header';
import Footer from './components/footer';
import Slider from './components/slider';
import ProductDetails from './components/ProductDetails';
import {ethers} from "ethers";
import Web3Modal from "web3modal";
import { useState } from 'react';
import "./styles.css"
import ProductSlider from './components/productSlider';
import { subgraphQuery } from "./utils/index";

function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [insellerTab,setInSellertab] = useState(false);

  const web3Modal = new Web3Modal({
    network: "mumbai",
    providerOptions : {},
    disableInjectedProvider: false,
  });

  const getProviderOrSigner = async(needSigner = false) => {
    const instance = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(instance);
    if(needSigner){
      const signer = provider.getSigner();
      return signer;

    }
    return provider;
  }

  async function connectWallet(){
    const signer = await getProviderOrSigner(true);
    const add = await signer.getAddress()
    setAddress(add);
    setWalletConnected(true);
    }

    async function disconnect(){
      await web3Modal.clearCachedProvider();

      setWalletConnected(false);
      renderButton();
      setAddress("");
  }
  function renderButton(){
    if(walletConnected){
        return(
            <div className="wallet-ctn">
              <p className="wallet-add">{address}</p>
              <button className = "btn btn-light wallet-btn"onClick={disconnect}>disconnect wallet</button>
            </div>
        )
    }
    else{
        return(
          <div>
            <button className="btn btn-light wallet-btn" onClick={connectWallet}>Connect Wallet</button>
          </div>
        )
    }
}
  

  return( <div className="App">
      <Header connect = {connectWallet} disconnect = {disconnect} walletStatus = {walletConnected} inSellerTab = {insellerTab} setInSellerTab = {setInSellertab}/>
      {!insellerTab && <Slider/>}
      {!insellerTab&& <ProductSlider/>}
      {insellerTab && <ProductDetails getSigner = {getProviderOrSigner}/>}
      <Footer/>
    </div>
  );
}

export default App;
