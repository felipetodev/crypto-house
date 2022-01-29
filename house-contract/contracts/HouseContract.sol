// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract HouseContract {

  // constructor () {
  // createHouse()
  // }

  event HouseCreated (
    uint256 id,
    string title,
    string description,
    string currency,
    uint256 amount,
    bool done,
    uint256 createdAt
  );

  struct House {
    uint256 id;
    string title;
    string description;
    string currency;
    uint256 amount;
    bool done;
    uint256 createdAt;
  }

  mapping (uint256 => House) public houses;

  function createHouse (
    uint _id, 
    string memory _title, 
    string memory _description,
    string memory _currency,
    uint256 _amount
  ) public {
    houses[_id] = House(_id, _title, _description, _currency, _amount, false, block.timestamp);
    emit HouseCreated(_id, _title, _description, _currency, _amount, false, block.timestamp);
  }

  function toggleDoneTransaction (uint _id) public {
    House memory _house = houses[_id];
    _house.done = !_house.done;
    houses[_id] = _house;
  }

}