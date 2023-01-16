const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });


async function main() {

  const shopContract = await ethers.getContractFactory("Shop");
  // deploy the contract
  const deployedShopContract = await shopContract.deploy();

  await deployedShopContract.deployed();

  // print the address of the deployed contract
  console.log(
    "Verify Contract Address:",
    deployedShopContract.address
  );

  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(30000);

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: deployedShopContract.address,
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });