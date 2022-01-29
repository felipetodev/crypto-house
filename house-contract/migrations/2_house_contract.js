const HouseContract = artifacts.require('HouseContract')

module.exports = function (deployer) {
  deployer.deploy(HouseContract)
}
