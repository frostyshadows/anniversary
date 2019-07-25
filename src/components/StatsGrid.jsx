import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import tileData from '../tileData';
import Popup from "reactjs-popup";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
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

const openDetails = (details) => {

}

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
      <GridList cols={3} cellHeight={180} className={classes.gridList}>
        <GridListTile cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div">Our stats</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                </IconButton>
              }
            />
            {<Dialog open={false} aria-labelledby="simple-dialog-title">
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
              <div>
                <List component="nav" aria-label="Main mailbox folders">
                {tile.items.map(item => (
                  <ListItem button>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
              </div>
              </Dialog>}
            {/* {<List component="nav" aria-label="Main mailbox folders">
              {tile.items.map(item => (
                <ListItem button>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>} */}
          </GridListTile>
        ))}
      </GridList>
      {tileData.map(tile => (
            <Popup trigger={<button> Trigger</button>} position="right center">
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