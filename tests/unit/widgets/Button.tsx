const { describe, it } = intern.getInterface('bdd');
import renderer, { assertion } from '@dojo/framework/testing/renderer';
import { tsx } from '@dojo/framework/core/vdom';

import Button from '../../../src/widgets/Button';

describe('Button', () => {
	it('default renders correctly with onclick specified', () => {
		const click = () => undefined; 
		const r = renderer(() => <Button id="id" onclick={click}>value</Button>);

		const baseAssertion = assertion(() => <button id="id" onclick={click}>value</button>);
		r.expect(baseAssertion);
	});

	it('default renders correctly without a click handler', () => {
		const r = renderer(() => <Button id="id">value</Button>);

		const baseAssertion = assertion(() => <button id="id">value</button>);
		r.expect(baseAssertion);
	});
});
