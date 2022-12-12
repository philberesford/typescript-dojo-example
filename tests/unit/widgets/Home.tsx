const { describe, it } = intern.getInterface('bdd');
import renderer, { assertion } from '@dojo/framework/testing/renderer';
import { tsx } from '@dojo/framework/core/vdom';

import Home from '../../../src/widgets/Home';
import * as css from '../../../src/widgets/styles/Home.m.css';
import Button from '../../../src/widgets/Button';
import ListForm from '../../../src/widgets/ListForm';

describe('Home', () => {
	it('default renders correctly', () => {
		const r = renderer(() => <Home />);
		const baseAssertion = assertion(() => <virtual>
			<h1 classes={[css.root]}>Home Page</h1>
			<Button id="btnSomething" onclick={() => console.log("clicked 1")}>Props down</Button>
			<ListForm id="lstForm" onChange={(names) => console.log(names)} /> 
		</virtual>);
		r.expect(baseAssertion);
	});
});
