import { Link } from 'react-router-dom';


const Banner = () => {


    return (
       
      <div className="container">

        <ul className="offers-list has-scrollbar">

          <li className="offers-item">
            <Link className="offers-card" to={"/category/lamps"}>

              <figure className="card__banner">
                <img src="https://cdn.pixabay.com/photo/2020/05/31/19/53/light-bulb-5244001_640.jpg" width="292" height="230" loading="lazy" alt="Led Lamps" className="w-100"/>
              </figure>

              <div className="card-content">
                <p className="card-subtitle">Up To 25% Off</p>

                <h3 className="h3 card__title">LED Lamps.</h3>

                <div className="btn btn-primary">Shop Now</div>
              </div>

            </Link>
          </li>

          <li className="offers-item">
            <Link  to={"/category/tiras"} className="offers-card">

              <figure className="card__banner">
                <img src="https://cdn.pixabay.com/photo/2017/11/16/08/01/led-2953657_640.jpg" width="336" height="244" loading="lazy" alt="Led Tiras" className="w-100"/>
              </figure>

              <div className="card-content">
                <p className="card-subtitle">Up To 25% Off</p>

                <h3 className="h3 card__title">Tiras LED.</h3>

                <div className="btn btn-primary">Shop Now</div>
              </div>

            </Link>
          </li>

        </ul>

      </div>

    )
}

export default Banner