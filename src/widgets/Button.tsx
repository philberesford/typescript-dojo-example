import { tsx, create } from '@dojo/framework/core/vdom';
import * as css from './styles/Button.m.css';

interface ButtonProperties {
  id: string;
  onclick?: () => void;
  banana?: string;
}

const factory = create()
                .properties<ButtonProperties>()
                .key('id');

export default factory(function Button({properties, children}) {
  const props = properties();
  
  return <button classes={[css.root]} {...props}>{children()}</button>
});
