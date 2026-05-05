import { runCommand } from '@oclif/test'
import { expect } from 'chai'


describe('provisioning:fetch', () => {
  it('runs NoC', async () => {
    const { stdout } = await runCommand<{ name: string }>(['provisioning:noc'])
    expect(stdout).to.contain('-= NoC =-')
  }).timeout(15000)
})
