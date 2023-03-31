"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Printer = void 0;
const figlet_1 = __importDefault(require("figlet"));
const shelljs_1 = __importDefault(require("shelljs"));
const chalk_1 = __importDefault(require("chalk"));
const path_1 = __importDefault(require("path"));
class Printer {
    static power(start) {
        const defaultTargetDir = 'my-component';
        const cwd = process.cwd();
        const root = path_1.default.join(cwd, defaultTargetDir);
        figlet_1.default('Hello Quark', (err, data) => {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
            console.log(chalk_1.default.hex('#5ce9fa').bold('\nInstalling dependencies...\n'));
            shelljs_1.default.exec(`cd ${path_1.default.basename(root)} && npm install && clear`);
            const end = Date.now();
            console.log(`\n ✨ Done in ${(end - start) / 1000}s\n`);
            console.log(`Success!`);
            console.log(`Inside that directory, you can run several commands:\n`);
            console.log(` ${chalk_1.default.hex('#5ce9fa').bold('npm run dev')}`);
            console.log(`   Starts the development server.\n`);
            console.log(` ${chalk_1.default.hex('#5ce9fa').bold('npm run build')}`);
            console.log(`   Bundles the component inro static files for production.\n`);
            console.log(` ${chalk_1.default.hex('#5ce9fa').bold('npm run test')}`);
            console.log(`   Starts the test runner.\n`);
            console.log(` We suggest that you begin by typing:\n`);
            console.log(`   ${chalk_1.default.hex('#5ce9fa').bold(`\n cd`)} ${path_1.default.basename(root)}`);
            console.log(`   ${chalk_1.default.hex('#5ce9fa').bold(`\n npm run dev`)}\n`);
            console.log('Happy hacking!');
        });
    }
}
exports.Printer = Printer;
//# sourceMappingURL=printer.js.map