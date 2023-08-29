import { toNano } from 'ton-core';
import { HelloWorld } from '../wrappers/HelloWorld';
import { NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const helloWorld = provider.open(await HelloWorld.fromInit());

    await helloWorld.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(helloWorld.address);

    // run methods on `helloWorld`
}
