import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import VerticalMenu from './VerticalMenu';
import Album from './Album';
import { client } from '../Client';

const ALBUM_IDS = [
  '23O4F21GDWiGd33tFN3ZgI',
  '3AQgdwMNCiN7awXch5fAaG',
  '1kmyirVya5fRxdjsPFDM05',
  '6ymZBbRSmzAvoSGmwAFoxm',
  '4Mw9Gcu1LT7JaipXdwrq1Q',
];

class AlbumsContainer extends Component {
  state = {
    fetched: false,
    albums: [],
  };

  componentDidMount() {
    this.getAlbums();
  }

  getAlbums = () => {
    client.getAlbums(ALBUM_IDS)
      .then((albums) => (
        this.setState({
          fetched: true,
          albums: albums,
        })
       ));
  };

  render() {
    if (!this.state.fetched) {
      return (
        <div className='ui active centered inline loader' />
      );
    } else {
      const matchPath = this.props.match.path;
      return (
        <div className='ui two column divided grid'>
          <div
            className='ui six wide column'
            style={{ maxWidth: 250 }}
          >
            <VerticalMenu
              albums={this.state.albums}
              albumsPathname={matchPath}
            />
          </div>
          <div className='ui ten wide column'>
            <Route
              path={`${matchPath}/:albumid`}
              render={({ match }) => {
                const album = this.state.albums.find(
                  (a) => a.id === match.params.albumid
                );
                return (
                  <Album
                    album={album}
                    albumsPathname={matchPath}
                  />
                )
              }}
            />
          </div>
        </div>
      );
      // Route invokes the render function with some arguments
      // one of them is "match"!
      // match.params contains all the dynamic parameters of the URL
    }
  }
}

export default AlbumsContainer;
