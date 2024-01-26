import { expect, test } from '@oclif/test'

describe('provisioning:relationship', () => {
  test
    .timeout(15000)
    .stdout()
    .command(['provisioning:noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})
