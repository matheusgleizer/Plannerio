import React from "react";
import MenuItem from "../menu-item/menu-item.components";
import "./directory.styles.scss";
import Popup from '../Popups/Popup';

class Directory extends React.Component {
  constructor() {

  //  const Popup= index=> {
  //   this.state.sections[index].map()
  //  }
    super();

    this.state = {
      ButtonPopup: 
         {
          trigger: false
        },
      sections: [
        {
          title: "Destinations",
          imageUrl:
            "https://www.kolpaper.com/wp-content/uploads/2020/03/rio-wallpaper-4.jpg",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "Hotels",
          imageUrl:
            "https://images.pexels.com/photos/1267438/pexels-photo-1267438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "Flights",
          imageUrl: "https://wallpapercave.com/wp/wp2574285.jpg",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "Attractions",
          imageUrl:
            "https://desktopwalls.net/wp-content/uploads/2014/07/Berlin%20City%20Germany%20TV%20Tower%20Desktop%20Wallpaper.jpg",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "Easy Planner",
          imageUrl:
            "https://lh3.googleusercontent.com/proxy/axvh82TBnAy48KAvEyg7OQA-oqjJO4j-IAtachMluqXzUdPnYUMwmn7wtgkZ4FhGAh1W2iQryx5A_UhXTKQegvwYof90Xy1rJO4qqCcpNOlmDGq13WpIcvmzlsI4vfBV",
          id: 5,
          linkUrl: "shop/mens",
        },
        {
          title: "Restaurants",
          imageUrl:
            "https://s2.best-wallpaper.net/wallpaper/3840x2160/1811/Restaurant-glass-cups-plate-napkin_3840x2160.jpg",
          id: 6,
          linkUrl: "shop/mens",
        },
        {
          title: "Nature",
          imageUrl:
            "https://i.pinimg.com/originals/5e/65/20/5e6520289b44e11a9e74363c18ce3ee1.jpg",
          id: 7,
          linkUrl: "shop/mens",
        },
        {
          title: "Night Life",
          imageUrl:
            "https://besthqwallpapers.com/Uploads/2-10-2017/22373/thumb2-solitaire-club-4k-night-club-discotheque-dubai.jpg",
          id: 8,
          linkUrl: "shop/mens",
        },
        {
          title: "Contact Us",
          imageUrl: "http://halonghideaway.com/style/img/Contact-us.jpg",
          id: 9,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    console.log(this.state.sections[0])
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id }) => (
          <MenuItem clickEvent={() => this.setState({ButtonPopup: {trigger: true}}) }key={id} title={title} imageUrl={imageUrl} />
        ))}
        {this.state.ButtonPopup.trigger ? <Popup trigger={this.state.ButtonPopup} /> : null}
        
        <button onClick={()=> {
          this.setState({ButtonPopup: {trigger: true}});
          console.log(this.state.ButtonPopup.trigger);
        }}>Popup</button>
      </div>
    );
  }
}

export default Directory;
