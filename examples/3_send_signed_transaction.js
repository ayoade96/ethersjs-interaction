const {ethers} = require("ethers")

const INFURA_ID = ''

const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`)

const account1 = ''
const account2 = ''

const privateKey1 = ''
const wallet = new ethers.Wallet(privateKey1, provider)

const main = async () => {

    const senderBalanceBefore = await provider.getBalance(account1)
    const recieverBalanceBefore = await provider.getBalance(account2)

    console.log(`SEnder Balance Before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
     console.log(`receiver balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}`)

    const tx = await wallet.sendTransaction({
        to: account2,
        value: ethers.utils.parseEther("0.025")
    })

    await tx.wait()
    console.log(tx)

    const senderBalanceAfter = await provider.getBalance(account1)
    const recieverBalanceAfter = await provider.getBalance(account2)

    console.log(`SEnder Balance After: ${ethers.utils.formatEther(senderBalanceAfter)}`)
     console.log(`receiver balance After: ${ethers.utils.formatEther(recieverBalanceAfter)}`)
}

main()