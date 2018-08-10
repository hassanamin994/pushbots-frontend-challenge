import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SendIcon from '@material-ui/icons/Send';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class RecipeReviewCard extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader={
              <div className={classes.subheader}>
                <span className={classes.activeCount}>2 active</span>

              </div>
            }
          />
          <CardActions className={classes.actions} disableActionSpacing>
            
            <IconButton aria-label="Share">
              <SendIcon />
            </IconButton>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  card: {
    margin: '1.5rem',
    boxSizing: 'border-box'
  },
  subheader: {
    // fontWeight: 'bold'    
  },
  activeCount: {
    display: 'inline-block',
    marginRight: 10
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  }
});

export default withStyles(styles)(RecipeReviewCard);