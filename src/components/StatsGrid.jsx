import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import tileData from '../tileData';
import Popup from "reactjs-popup";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 750,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {tileData.map(tile => (
        <Popup trigger={<GridListTile key={tile.img}>
          <img src={tile.img} alt={tile.title} />
          <GridListTileBar
            title={tile.title}
            actionIcon={
              <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
              </IconButton>
            }
          />
        </GridListTile>} position="right center">
          <div>
            <List component="nav" aria-label="Main mailbox folders">
              {tile.items.map(item => (
                <ListItem button>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </div>
        </Popup>
      ))}
    </div>
  );
}