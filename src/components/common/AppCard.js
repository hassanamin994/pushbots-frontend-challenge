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
    const { classes, app } = this.props;

    return (
      <CardHeader
        action={
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
        }
        title={app.title}
        subheader={
          <div className={classes.subheader}>
            <span className={classes.activeCount}>{app.devices} active</span>
            {this.renderPlatforms()}
          </div>
        }
      />
    )
  }

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

  renderPlatforms() {
    const { app, classes } = this.props;

    if (!app.platforms) return;

    return Object.keys(app.platforms).map(platform => (
      <Tooltip key={platform} title={platform} >
        <Icon name={platform} className={classes.platformIcon} />
      </Tooltip>
    ));
  }

}

AppCard.propTypes = {
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
  },
  platformIcon: {
    fontSize: '.9rem',
    display: 'inline-block',
    marginRight: 5
  }
});

export default withStyles(styles)(AppCard);