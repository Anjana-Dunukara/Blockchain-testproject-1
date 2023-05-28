// SPDX-License-Identifier: MIT

pragma solidity 0.8.14;

contract Inbox{
    
    string public message;

    function inbox(string memory initialMessage) public{
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public{
        message = newMessage;
    }
}