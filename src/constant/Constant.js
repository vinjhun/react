import Story from '../pages/story/story';
import SignIn from '../pages/signin/signin';
import Item from '../pages/item/item';

//modules in pages, small component in component?
const Constant = {
  MAIN_ROUTES: [
    { path: 'story', name: 'Story', Component: Story },
    { path: 'item', name: 'Item', Component: Item },
    { path: 'sign-in', name: 'Sign In', Component: SignIn },
  ],
};

export default Constant;
