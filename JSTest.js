// create a variable to hold your NFT's
const NFTs=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_uid,color,size) {
    const newNFT={
        "name" : _name,
        uniqueID : _uid,
        "color" : color,
        "size" : size
    }
    NFTs.push(newNFT);
    console.log("Minted : " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i =0; i<NFTs.length; i++){
        console.log("\n"+NFTs[i].name+"'s Details");
        console.log("UID  : "+NFTs[i].uniqueID);
        console.log("Name : "+NFTs[i].name);   
        console.log("Color  : "+NFTs[i].color);     
        console.log("Age  : "+NFTs[i].size);     
    }
    console.log("All NFTs printed....")
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal NFTs Minted is " + NFTs.length +"\n");
}

// call your functions below this line
mintNFT("Anuranjan",22,"green","small");
mintNFT("Ajay",22,"blue","large");
listNFTs();
getTotalSupply();
