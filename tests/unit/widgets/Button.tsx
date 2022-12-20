const { describe, it } = intern.getInterface('bdd');
import renderer, { assertion, compare, wrap } from '@dojo/framework/testing/renderer';
import { tsx } from '@dojo/framework/core/vdom';

import Button from '../../../src/widgets/Button';
import * as css from '../../../src/widgets/styles/Button.m.css'

describe('Button', () => {
	it('default renders correctly with onclick specified', () => {
		const click = () => undefined; 
		const r = renderer(() => <Button id="id" onclick={click}>value</Button>);

		const baseAssertion = assertion(() => <button 
			classes={[css.root]}	// Apply an assertion over the classes that are applied 
			id="id" 
			onclick={click}>value</button>);
		r.expect(baseAssertion);
	});

	it('default renders correctly without a click handler', () => {
		const WrappedButton = wrap('button');

		const r = renderer(() => <Button id="id">value</Button>);

		const baseAssertion = assertion(() => <WrappedButton 
			classes={ignore()}	// Ignore any classes applied  
			id={matches("id")}>value</WrappedButton>);

		r.expect(baseAssertion);
	});

	function ignore() {
		return compare(() => true);
	}

	function matches(expected: unknown) {
		return compare((actual) => actual === expected);
	}
});
