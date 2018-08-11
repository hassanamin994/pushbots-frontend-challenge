import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import SendIcon from '@material-ui/icons/Telegra';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Icon } from 'react-fa'

class AppCard extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          {this.renderCardHeader()}
          {this.renderCardActions()}
        </Card>
      </div>
    );
  }

  renderCardHeader() {
    const { app } = this.props;

    return (
      <CardHeader
        action={this.renderCardHeaderActions()}
        title={app.title}
        subheader={this.renderCardSubheader()}
      />
    )
  }

  // renders the action buttons in the bottom of the card
  renderCardActions() {
    const { classes } = this.props;

    return (
      <CardActions className={classes.actions} disableActionSpacing>
        <IconButton aria-label="Share">
          <Icon name="telegram" />
        </IconButton>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    );
  }

  // renders the action buttons in the card header
  renderCardHeaderActions() {
    const { app } = this.props;

    return (
      <span>
        {app.shared_by &&
          <Tooltip title={`Shared by ${app.shared_by}`} >
            <IconButton>
              <Icon name="share" />
            </IconButton>
          </Tooltip>
        }
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </span>
    )
  }

  // Renders the subheader section of the header
  renderCardSubheader() {
    const { app, classes} = this.props;
    const devicesNum = app.devicesNum && app.devicesNum['t'] ? app.devicesNum['t'] : 0;

    return (

      <div className={classes.subheader}>
        <span className={classes.activeCount}>{devicesNum} active</span>
        {this.renderPlatforms()}
      </div>

    );
  }

  renderPlatforms() {
    const { app, classes } = this.props;

    if (!app.platforms) return;

    return Object.keys(app.platforms).map((platform, index) => (
      <Tooltip key={platform + index} title={platform} >
        <Icon name={platform} className={classes.platformIcon} />
      </Tooltip>
    ));
  }

}

AppCard.propTypes = {
  classes: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired
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
  },
  platformIcon: {
    fontSize: '.9rem',
    display: 'inline-block',
    marginRight: 5
  }
});

export default withStyles(styles)(AppCard);