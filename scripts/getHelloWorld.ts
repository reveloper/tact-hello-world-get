import { toNano, Address } from 'ton-core';
import { HelloWorld } from '../wrappers/HelloWorld';
import { NetworkProvider } from '@ton-community/blueprint';


export async function run(provider: NetworkProvider, args: string[]) {

    //regular code snippet from increment connection
    const ui = provider.ui();

    const address = Address.parse(args.length > 0 ? args[0] : await ui.input('Hello world address'));

    if (!(await provider.isContractDeployed(address))) {
        ui.write(`Error: Contract at address ${address} is not deployed!`);
        return;
    }
    //connection done

    const helloWorld = provider.open(HelloWorld.fromAddress(address)); // make contract entity via open()

    const greeting = await helloWorld.getGreeting(); // retrieve data via get method generated int tact.ts sources

    console.log(greeting);
}
