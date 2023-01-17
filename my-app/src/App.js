// import logo from './logo.svg';

import Header from './components/header';
import Footer from './components/footer';
import Slider from './components/slider';
import ProductDetails from './components/ProductDetails';
import {ethers} from "ethers";
import Web3Modal from "web3modal";
import { useEffect, useState } from 'react';
import "./styles.css"
import ProductSlider from './components/productSlider';
import { subgraphQuery } from "./utils/index";
import { FETCH_CREATED_PRODUCT } from './queries';



function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [loading,setLoading] = useState(false);
  const [insellerTab,setInSellertab] = useState(false);
  const [data,setData] = useState([]);
  const [electronicsData,setElectronicsData] = useState([]);
  const [householdData,setHouseholdData] = useState([]);


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
      // renderButton();
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

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await subgraphQuery(FETCH_CREATED_PRODUCT());
      setData(response.productCreateds);
      setElectronicsData(response.productCreateds.filter(obj => obj.category === "electronics"));
      setHouseholdData(response.productCreateds.filter(obj => obj.category === "household"))
    } catch (err) {
      // setError(err);
      console.log(err)
    }
  };
  //fetch data on every 5 seconds
  // console.log(FETCH_CREATED_PRODUCT());
  const interval = setInterval(fetchData, 1000);
  return () => clearInterval(interval);
}, [data]);


  return( <div className="App">
      <Header connect = {connectWallet} disconnect = {disconnect} walletStatus = {walletConnected} inSellerTab = {insellerTab} setInSellerTab = {setInSellertab}/>
      {!insellerTab && <Slider/>}
      {!insellerTab&& <ProductSlider electronicsData = {electronicsData} householdData = {householdData}/>}
      {insellerTab && <ProductDetails getSigner = {getProviderOrSigner} loading = {loading} setLoading= {setLoading}/>}
      <Footer/>
      {/* {console.log(data)} */}
    </div>
  );
}

export default App;
