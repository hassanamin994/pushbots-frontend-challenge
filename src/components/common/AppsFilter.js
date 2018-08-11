import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, withStyles } from '@material-ui/core'
import { Icon } from 'react-fa';

class AppsFilter extends React.Component {

    onChangeFilter(filter) {
        const { onChangeFilter } = this.props;
        onChangeFilter && onChangeFilter(filter);
    }

    render() {

        const { classes, filters } = this.props;

        if (!filters) return <div />;

        return (
            <div className={classes.filtersContainer} >
                {filters.map(filter => this.renderFilterButton(filter))}
            </div>
        );
    }

    renderFilterButton(filter) {
        const { classes, currentFilter } = this.props;
        let buttonClasses = classes.filterButton;
        if (currentFilter === filter.value) {
            buttonClasses += ' ' + classes.active;
        }
        return (
            <IconButton key={filter.value} className={buttonClasses} color="inherit" aria-label="Filter" onClick={() => this.onChangeFilter(filter.value)} >
                <Icon className={classes.filterIcon} name={filter.icon} />
                <span className={classes.filterTitle} >{filter.title}</span>
                <span className={classes.filterCount} >{filter.count}</span>
            </IconButton>
        );
    }

}

AppsFilter.propTypes = {
    filters: PropTypes.array.isRequired,
    currentFilter: PropTypes.string.isRequired
}


const styles = theme => ({
    filtersContainer: {
        marginLeft: theme.spacing.unit * 6,
        marginTop: theme.spacing.unit * 6
    },
    filterButton: {
        flexGrow: 1,
        fontSize: '.9rem',
        width: 'initial',
        marginRight: '2rem',
        padding: '.4rem',
        borderRadius: 3,
    },
    filterIcon: {
        display: 'inline-block',
        marginRight: 5
    },
    filterTitle: {
        display: 'inline-block',
        marginRight: 5
    },
    filterCount: {
        fontWeight: 'bold',
        fontSize: '.8rem'
    },
    active: {
        color: '#0098A8 !important',
        borderBottom: '1px solid #0098A8'
    }
});


export default withStyles(styles)(AppsFilter);