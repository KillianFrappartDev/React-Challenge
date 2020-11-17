const Header = props => {
  return <h1 className="title">Welcome to {props.title || 'Website'}</h1>;
};

export default Header;
