import Story from '../pages/story/story';
import Profile from '../pages/profile/profile';
import Item from '../pages/item/item';

//modules in pages, small component in component?
const Constant = {
  MAIN_ROUTES: [
    { path: 'story', name: 'Story', Component: Story },
    { path: 'item', name: 'Item', Component: Item },
    { path: 'profile', name: 'Profile', Component: Profile },
  ],
};

export default Constant;
