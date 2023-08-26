const {ethers} = require("ethers")

const INFURA_ID = ''

const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`)

const account1 = ''
const account2 = ''

const privateKey1 = ''
const wallet = new ethers.Wallet(privateKey1, provider)

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
]

const address = ''
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {

    const balance = await contract.balanceOf(account1)

    console.log(`reading from ${address}`)
    console.log(`Balance of sender: ${balance}`)

    const contractWithWAllet = contract.connect(wallet)

    const tx = await contractWithWAllet.transfer(account2, balance)
    await tx.wait()

    console.log(tx)

    const balanceOfSender = await contract.balanceOf(account1)
    const balanceOfReciever = await contract.balanceOf(account2)

    console.log(`Balance of sender: ${balanceOfSender}`)
    console.log(`Balance of reciever: ${balanceOfReciever}`)
}

main()