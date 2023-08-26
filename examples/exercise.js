const {ethers} = require("ethers")

const INFURA_ID = '9703725a823c4aaca5eba16007d80478'

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
]

const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F'
const contract = new ethers.Contract(address, ERC20_ABI, provider)


const main = async () => {
 const name = await contract.name()
 const symbol = await contract.symbol()
 const totalSupply = await contract.totalSupply()

 console.log(`Reading from ${address}`)
 console.log(`name: ${name}`)
 console.log(`symbol: ${symbol}`)
 console.log(`total supply: ${totalSupply}`)

 const balance = await contract.balanceOf('0x66F62574ab04989737228D18C3624f7FC1edAe14')
 console.log(`Balance Returned: ${ethers.utils.formatEther(balance)}`)
}

main ()