const { run } = require("hardhat")

const verify = async (contractAddress, args) => {
    try {
        console.log("Verifying contract ...")
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified"))
            console.log("Already verified")
        else console.log(e)
    }
}

module.exports = { verify }
