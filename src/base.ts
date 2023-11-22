import { clUpdate } from '@commercelayer/cli-core'
import { Command, Flags, Args, ux } from '@oclif/core'



const pkg = require('../package.json')


export default abstract class extends Command {

  static baseFlags = {
    domain: Flags.string({
      char: 'd',
      required: false,
      hidden: true,
      dependsOn: ['organization'],
      env: 'CL_CLI_DOMAIN',
    }),
    accessToken: Flags.string({
      hidden: true,
      required: true,
      env: 'CL_CLI_ACCESS_TOKEN',
    }),
  }



  // INIT (override)
  async init(): Promise<any> {
    // Check for plugin updates only if in visible mode
    if (!this.argv.includes('--blind') && !this.argv.includes('--silent') && !this.argv.includes('--quiet')) clUpdate.checkUpdate(pkg)
    return await super.init()
  }

}



export { Flags, Args, ux as cliux }
