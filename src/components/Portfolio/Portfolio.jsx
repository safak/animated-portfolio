import './portfolio.scss';

const items = [
  {
    id: 1,
    title: 'React Commerce app',
    img: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quam! Cumque aut ipsum incidunt libero, blanditiis, enim velit tempore reiciendis numquam vel cupiditate. Possimus alias, iste in recusandae ullam aliquam.',
  },
  {
    id: 2,
    title: 'Next.JS app',
    img: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quam! Cumque aut ipsum incidunt libero, blanditiis, enim velit tempore reiciendis numquam vel cupiditate. Possimus alias, iste in recusandae ullam aliquam.',
  },
  {
    id: 3,
    title: 'Vanilla JavaScript app',
    img: 'https://plus.unsplash.com/premium_photo-1661412605204-504ec6726508?auto=format&fit=crop&q=80&w=1332&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quam! Cumque aut ipsum incidunt libero, blanditiis, enim velit tempore reiciendis numquam vel cupiditate. Possimus alias, iste in recusandae ullam aliquam.',
  },
];

const Single = ({ item }) => {
  return <section>{item.title}</section>;
};
const Portfolio = () => {
  return (
    <div className='portfolio'>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

<p></p>;
