import React from 'react';
import MenuItem from '../../../components/menu-item/menu-item.components';
import menuChartImage from '../../../assets/chart-map-pie.png';
import newsFeedImage from '../../../assets/news-image-01.jpg';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'App Library',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'app-library'
                },
                {
                  title: 'Reports',
                  imageUrl: `${menuChartImage}`,
                  id: 2,
                  linkUrl: 'reports'
                },
                {
                  title: 'Employees',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png', /*https://i.ibb.co/0jqHpnp/sneakers.png',*/
                  id: 3,
                  linkUrl: 'employees'
                },
                {
                  title: 'News',
                  imageUrl: `${newsFeedImage}`,
                  size: 'large',
                  id: 4,
                  linkUrl: 'news'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://res.cloudinary.com/brocksupply/image/upload/c_fit,w_410/1334-4154l.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
            ]
              
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (   // otherSectionProps refers to all other items in the map without having to type them all.
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;