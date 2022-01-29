const HouseContract = artifacts.require('HouseContract')

contract('HouseContract', () => {
  before(async () => {
    this.HouseContract = await HouseContract.deployed()
  })

  it('Migrate was deployed successfully', async () => {
    const address = this.HouseContract.address
    console.log(address)
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
  })

  it('Create a house contract', async () => {
    const id = 1
    const title = 'mi casita 1'
    const description = 'casita de verano'
    const currency = 'USD'
    const amount = 1990

    const houseContract = await this.HouseContract.createHouse(id, title, description, currency, amount)
    const args = houseContract.logs[0].args

    assert.equal(args[0].toNumber(), id)
    assert.equal(args[1], title)
    assert.equal(args[2], description)
    assert.equal(args[3], currency)
    assert.equal(args[4].toNumber(), amount)
  })

  it('Get house list', async () => {
    const id = 1 // develop house id
    const houseContract = await this.HouseContract.houses(id)
    assert.equal(houseContract.id.toNumber(), id)
    assert.equal(houseContract.title, 'mi casita 1')
    assert.equal(houseContract.description, 'casita de verano')
    assert.equal(houseContract.currency, 'USD')
    assert.equal(houseContract.done, false)
  })
})
