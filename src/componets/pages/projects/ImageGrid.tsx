import React from 'react';
import {
  GridList,
  GridListTile,
  ListSubheader,
  GridListTileBar,
  IconButton
} from '@material-ui/core';
import images from './Images/images.json';
import InfoIcon from '@material-ui/icons/Info';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

interface Image {
  title: string;
  desc: string;
  image_url: string[];
  link: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      width: '45vw',
      height: '100vh'
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)'
    }
  })
);

export const ImageGrid = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={700} className={classes.gridList}>
        <GridListTile key='Subheader' cols={2} style={{ height: 'auto' }}>
          <ListSubheader>Projects</ListSubheader>
        </GridListTile>
        {images.map((image: Image) => {
          return image.image_url.map((url: string) => (
            <GridListTile key={url}>
              <img src={url} alt={image.title} />
              <GridListTileBar
                title={image.title}
                subtitle={image.desc}
                actionIcon={
                  <IconButton
                    onClick={() => window.open(image.link)}
                    aria-label={`info about ${image.title}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              ></GridListTileBar>
            </GridListTile>
          ));
        })}
      </GridList>
    </div>
  );
};
