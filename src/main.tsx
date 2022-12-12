import renderer, { tsx } from '@dojo/framework/core/vdom';
import Registry from '@dojo/framework/core/Registry';
import { registerRouterInjector } from '@dojo/framework/routing/RouterInjector';
import { registerStoreInjector } from '@dojo/framework/stores/StoreInjector';
import Store from '@dojo/framework/stores/Store';
import { State } from './interfaces';
import { createCommandFactory, createProcess  } from '@dojo/framework/stores/process';
import { add } from '@dojo/framework/stores/state/operations';


import routes from './routes';
import App from './App';

const store = new Store<State>();

const createCommand = createCommandFactory<State>();

const initialStateCommand = createCommand(({ path }) => {
	return [add(path('names'), { list: ["Apples", "Bananas", "Cherries"] })];
});

const initialStateProcess = createProcess('initial', [initialStateCommand]);

initialStateProcess(store)({});

const registry: Registry = registerStoreInjector(store)

registerRouterInjector(routes, registry);

const r = renderer(() => <App />);
r.mount({ registry });
