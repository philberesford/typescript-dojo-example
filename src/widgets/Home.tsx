import { tsx, create } from '@dojo/framework/core/vdom';

import * as css from './styles/Home.m.css';
import Button from './Button';
import ListForm from './ListForm';

const factory = create();

export default factory(function Profile() {

	return <virtual>
		<h1 classes={[css.root]}>Home Page</h1>
		<Button id="btnSomething" onclick={() => console.log("clicked 1")}>Props down</Button>
		<ListForm id="lstForm" onChange={(names) => console.log(names)} />
	</virtual>;
});
