import React, {useContext} from  "react";
import BlockchainContext from "./BlockchainContext.js"

export function ChildComponent(){
    const blockchaincontext = useContext(BlockchainContext);
    const {web3, accounts, contract} = blockchaincontext;


}
