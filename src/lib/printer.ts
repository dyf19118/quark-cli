// import figlet from "figlet";
// import sh from "shelljs";
// import chalk from "chalk";
import path from 'path';

export class Printer {
  static power(start: number) {
    // Done! And print hello world.

    const defaultTargetDir = 'my-component';
    const cwd = process.cwd();
    const root = path.join(cwd, defaultTargetDir);

    console.log(root, cwd, start, 111);
    
    // figlet('Hello Quark', (err, data) => {
    //   if (err) {
    //     console.log('Something went wrong...');
    //     console.dir(err);
    //     return;
    //   }
    //   console.log(data);

    //   console.log(chalk.hex('#5ce9fa').bold('\nInstalling dependencies...\n'));

    //   sh.exec(
    //     `cd ${path.basename(root)} && npm install && clear`
    //   );

    //   const end = Date.now();
    //   console.log(`\n ✨ Done in ${(end - start) / 1000}s\n`);

    //   console.log(`Success!`);
    //   console.log(`Inside that directory, you can run several commands:\n`);
      
    //   console.log(` ${chalk.hex('#5ce9fa').bold('npm run dev')}`);
    //   console.log(`   Starts the development server.\n`);
      
    //   console.log(` ${chalk.hex('#5ce9fa').bold('npm run build')}`);
    //   console.log(`   Bundles the component inro static files for production.\n`);
      
    //   console.log(` ${chalk.hex('#5ce9fa').bold('npm run test')}`);
    //   console.log(`   Starts the test runner.\n`);

    //   console.log(` We suggest that you begin by typing:\n`);
    //   console.log(`   ${chalk.hex('#5ce9fa').bold(`\n cd`)} ${path.basename(root)}`);
    //   console.log(`   ${chalk.hex('#5ce9fa').bold(`\n npm run dev`)}\n`);

    //   console.log('Happy hacking!');
    // });
  }
}