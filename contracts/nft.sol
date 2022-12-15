/**
 *Submitted for verification at Etherscan.io on 2022-06-08
*/
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// import "hardhat/console.sol";
contract VOEXNFT is ERC721URIStorage, Ownable {
    string public baseTokenURI;
    // uint256 public price;
    uint256 tokenIDs;
    address public MarketPlace;
    //event 
    event LogMint(address indexed minter, string  tokenURI);
    event LogBurn(address indexed burner, uint256 id);

     modifier _isMarket() {
        require(
            msg.sender == MarketPlace, 
            "You are not MarketPlace!"
        );
        _;
    }

    constructor() ERC721("VOEX NFT", "VOEX") {
    }

    /**
     * @dev Set base token URI
     * @param _baseTokenURI baseURI of the Vault NFT
     */

    function setbaseURI(string memory _baseTokenURI) public onlyOwner {
        baseTokenURI = _baseTokenURI;
    }

    /**
     * @dev Override `_baseURI`
     * @return baseTokenURI baseTokenURI
     */

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    /**
     *@dev mint
     *@param _tokenURI price of NFT
     */
    function mint(string memory _tokenURI) external {
        tokenIDs++;
        uint256 id = tokenIDs;
        super._safeMint(msg.sender, id);
        super._setTokenURI(id, _tokenURI);
        emit LogMint(msg.sender, _tokenURI);
    }

    function setMarketPlace(address _market) public onlyOwner {
        MarketPlace = _market;
    }

    function Approve(uint256 _tokenID) public _isMarket {
        _approve(MarketPlace, _tokenID);
    }

    /**
     *@dev burn NFT
     *@param _tokenID the ID of burned token
     */
    function burn(uint256 _tokenID) external  {
        require (ownerOf(_tokenID) ==  msg.sender, "Invalid NFT Owner");
        super._burn(_tokenID);
        emit LogBurn(msg.sender, _tokenID);
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory ) {
    return ERC721URIStorage.tokenURI(tokenId);
  }
}