import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import tileData from '../tileData';
import Popup from "reactjs-popup";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import '../styles/App.css';

const images = require.context('../images', true);

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

  return (
    <div className="StatsGrid">
      <p className="statsText">Here are some things we've done together:</p>
      {tileData.map(tile => (
        <Popup trigger={
          <GridListTile className="tileContainer" key={tile.img}>
            <div className="tile">
              <img src={images(`./${tile.img}`)} alt={tile.title} />
              <GridListTileBar
                className="tileText"
                title={tile.title}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`}>
                  </IconButton>
                }
              />
            </div>
          </GridListTile>}
          position="right center">
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
      ))
      }
    </div >
  );
}