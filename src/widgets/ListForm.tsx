import icache from '@dojo/framework/core/middleware/icache';
import { tsx, create } from '@dojo/framework/core/vdom';
import store from '../middleware/store';
import addName from './addName';
// import { State } from '../interfaces';

interface ListFormProperties {
  id: string;
  onChange?: (names: string[]) => void;
}

const factory = create({icache, store})
                .properties<ListFormProperties>()
                .key('id');

export default factory(function ListForm({properties, middleware: {icache, store}}) {
  const { get, path } = store;

  const { id, onChange } = properties();

  const names =  get(path('names', 'list'));

  const addNewOne = () => {
    const txtName = icache.get("txtName") || "";
    // Update the local Store
    const result = store.executor(addName)({name: txtName});
    result.then(() => {
      // Remove from the local cache (which removes it from the input element)
      icache.delete("txtName");
    
      // Bubble changes up the stack
      onChange?.(names);
    });
    return true;
  }
  
  
	return <form id={id}>
    <div>Bubble events</div>
    <ul>
    {names.map(name => <div>{name}</div>)}
  </ul>
  <input 
    type="text" 
    id="txtName" 
    value={icache.get("txtName")} 
    oninput={e => {icache.set("txtName", (e.target as HTMLInputElement).value);}} 
  />
  
  <input type="button" value="Add new one" onclick={() => addNewOne() }></input>
  </form>
});


