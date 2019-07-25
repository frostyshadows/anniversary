import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleList(items) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Main mailbox folders">
      {items.map(item => (
                <ListItem button>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
    </List>
    </div>
  );
}