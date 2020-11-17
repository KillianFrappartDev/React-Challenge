import Fab from '@material-ui/core/Fab';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  extendedIcon: {
    position: 'fixed',
    bottom: 30,
    right: 30,
    padding: 30
  },
  icon: {
    margin: 5
  }
}));

const Button = props => {
  const classes = useStyles();

  const handleClick = () => {
    props.onClick();
  };

  return (
    <Fab
      onClick={handleClick}
      className={classes.extendedIcon}
      color={props.bestGames ? 'secondary' : 'primary'}
      variant="extended"
    >
      <SportsEsportsIcon className={classes.icon} />
      {props.bestGames ? 'All Games' : 'Best Games'}
    </Fab>
  );
};

export default Button;
