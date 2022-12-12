import { createCommandFactory, createProcess } from '@dojo/framework/stores/process';
import { State } from '../interfaces';
import { add } from '@dojo/framework/stores/state/operations';

interface AddNamePayload {
  name: string
}

const createCommand = createCommandFactory<State>();
const addNameCommand = createCommand<AddNamePayload>(({ at, get, path, payload, state }) => {
  const {name} = payload;

  // Add a delay to simulate an external call  
  return new Promise((resolve): void => {
    setTimeout(()=> {
      console.log(`Added ${name} to list of names in the back-end`);

      // Adding the value locally. In reality we'd re-load from the back-end
      const namesListPath = path('names', 'list');
      const namesList = get(namesListPath);
      const namesCount = namesList.length;
      const addResult = [add(at(namesListPath, namesCount), name)]; 
      resolve(addResult);
    }, 3000)
  });
  
});

const addName = createProcess("addName", [addNameCommand]);

export default addName
