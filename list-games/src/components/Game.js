import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import InfoIcon from '@material-ui/icons/Info';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    margin: 10
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  centerText: {
    textAlign: 'center'
  }
}));

const Game = props => {
  const [value, setValue] = useState(props.rating);
  const [isFavorite, setIsFavorite] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  const favHandler = () => {
    setIsFavorite(prev => !prev);
  };

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={props.background_image} title={props.name} />
      <CardContent>
        <Typography className={classes.centerText} variant="h6" color="textPrimary" component="p">
          {props.name}
        </Typography>
        <Typography className={classes.centerText} variant="subtitle1" color="textSecondary" component="p">
          {props.released}
        </Typography>
        <div>
          <Box className={classes.centerText} component="fieldset" borderColor="transparent">
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={favHandler} aria-label="add to favorites">
          <FavoriteIcon color={isFavorite ? 'secondary' : 'action'} />
        </IconButton>
        <IconButton onClick={() => history.push('/details/' + props.id)} aria-label="info">
          <InfoIcon color="primary" />
        </IconButton>
        <IconButton onClick={() => props.onDelete(props.id)} aria-label="delete">
          <DeleteIcon color="secondary" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Game;
