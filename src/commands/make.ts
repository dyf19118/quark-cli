import { CommanderStatic, Command } from 'commander';
import { ActionAbstract } from '../actions';


export class MakeCommand {

  private program: CommanderStatic;

  constructor(program: CommanderStatic) {
    this.program = program;
  }

  resolve(action: ActionAbstract) {
    this.program
      .command('make:controller [name]')
      .alias('mc')
      .description('New Quark Controller file.')
      .option('-r, --rest', 'Use Rest API template')
      .option('-p, --path <path>', 'controller path in app dir, default is [controllers]')
      .action(async (name = '', destination: Command) => {
        await action.source('controller').resolve(name, destination);
      });

    // this.program
    //   .command('make:service [name]')
    //   .alias('ms')
    //   .description('New Quark Service file.')
    //   .action(async (name = '', destination: Command) => {
    //     await action.source('service').resolve(name, destination);
    //   });

    // this.program
    //   .command('make:resource [name]')
    //   .alias('mr')
    //   .description('New Quark Resource file.')
    //   .action(async (name = '', destination: Command) => {
    //     await action.source('resource').resolve(name, destination);
    //   });

    // this.program
    //   .command('make:middleware [name]')
    //   .alias('mm')
    //   .description('New Quark Middleware file.')
    //   .action(async (name = '', destination: Command) => {
    //     await action.source('middleware').resolve(name, destination);
    //   });

    // this.program
    //   .command('make:validator [name]')
    //   .alias('mv')
    //   .description('New Quark Validator file.')
    //   .action(async (name = '', destination: Command) => {
    //     await action.source('validator').resolve(name, destination);
    //   });
  }
}