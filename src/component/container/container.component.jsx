import Card from '../card/card.component';

function getClassName(classes) {
  if (!Array.isArray(classes)) return false;
  return classes.join(' ');
}

//let say our container has obtained some array
let itemList = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
];

const Container = () => {
  console.log('container');
  return (
    <div
      className={getClassName([
        'container',
        'box-border',
        'grid',
        'grid-cols-2',
        'gap-4',
        'p-2',
        'md:grid-cols-4',
      ])}
    >
      {itemList.map(({ id }) => (
        <Card id={id} />
      ))}
    </div>
  );
};

export default Container;
