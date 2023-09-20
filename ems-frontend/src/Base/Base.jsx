import 'bootstrap/dist/css/bootstrap.min.css';
import './Base.css';

// import "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"


function Home () {
    return (
  <>
  
    <nav className="navbar navbar-expand-lg navbar-custom">
      {" "}
      {/* Use the custom class for Navbar */}
      <a className="navbar-brand" href="{{ url_for('home') }}">
        EMS254
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link nav-link-white"
              href="{{url_for('transactions')}}"
            >
              My Transactions
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-white" href="#">
              Help
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-white" href="#">
              Contact Us
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link nav-link-white" href="{{url_for('login')}}">
              Log In
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="{{ url_for('register') }}">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div className="container">
      <section className="content text-center">
        {" "}
        {/* Center-align the content */}
        <h2>Welcome to EMS254</h2>
        <h3>Never Buy or Sell Online Without EMS254</h3>
        <h4>
          With EMS254 you can buy and sell anything safely without the risk of
          chargebacks. Truly secure payments.
        </h4>
        <a className="btn btn-success" href="{{ url_for('login') }}">
          Start a Transaction
        </a>
      </section>
    </div>
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6">
          <span className="h4 sectionHero-upsell-text">
            Buy or sell your vehicle safely and confidently
          </span>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="sectionHero-steps" data-component="steps-rotator">
            <div className="sectionHero-steps-decorator sectionHero-steps-decorator--above" />
            <ol className="list-group sectionHero-upsell-list">
              <li className="list-group-item sectionHero-upsell-item disabled">
                <svg
                  className="sectionHero-upsell-icon"
                  width={19}
                  height={16}
                  viewBox="0 0 19 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                    fillRule="nonzero"
                  />
                </svg>
                <span className="sectionHero-upsell-desc">
                  Buyer and seller agree on terms
                </span>
              </li>
              <li className="list-group-item sectionHero-upsell-item disabled">
                <svg
                  className="sectionHero-upsell-icon"
                  width={19}
                  height={16}
                  viewBox="0 0 19 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                    fillRule="nonzero"
                  />
                </svg>
                <span className="sectionHero-upsell-desc">
                  Buyer pays EMS254
                </span>
              </li>
              <li className="list-group-item sectionHero-upsell-item disabled">
                <svg
                  className="sectionHero-upsell-icon"
                  width={19}
                  height={16}
                  viewBox="0 0 19 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                    fillRule="nonzero"
                  />
                </svg>
                <span className="sectionHero-upsell-desc">
                  Seller ships the vehicle
                </span>
              </li>
              <li className="list-group-item sectionHero-upsell-item disabled">
                <svg
                  className="sectionHero-upsell-icon"
                  width={19}
                  height={16}
                  viewBox="0 0 19 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                    fillRule="nonzero"
                  />
                </svg>
                <span className="sectionHero-upsell-desc">
                  Buyer inspects and approves vehicle
                </span>
              </li>
              <li className="list-group-item sectionHero-upsell-item disabled">
                <svg
                  className="sectionHero-upsell-icon"
                  width={19}
                  height={16}
                  viewBox="0 0 19 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                    fillRule="nonzero"
                  />
                </svg>
                <span className="sectionHero-upsell-desc">
                  EMS254 pays the seller
                </span>
              </li>
            </ol>
            <div className="sectionHero-steps-decorator sectionHero-steps-decorator--below" />
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6">
          <span className="h4 sectionHero-upsell-text">
            Complete protection for merchandise transactions
          </span>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="sectionHero-steps" data-component="steps-rotator">
            <div className="sectionHero-steps-decorator sectionHero-steps-decorator--above" />
            <ol className="list-group sectionHero-upsell-list">
              <li className="list-group-item sectionHero-upsell-item disabled">
                <svg
                  className="sectionHero-upsell-icon"
                  width={19}
                  height={16}
                  viewBox="0 0 19 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                    fillRule="nonzero"
                  />
                </svg>
                <span className="sectionHero-upsell-desc">
                  Buyer and seller agree on terms
                </span>
              </li>
              <li className="list-group-item sectionHero-upsell-item disabled">
                <svg
                  className="sectionHero-upsell-icon"
                  width={19}
                  height={16}
                  viewBox="0 0 19 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                    fillRule="nonzero"
                  />
                </svg>
                <span className="sectionHero-upsell-desc">
                  Buyer pays EMS254
                </span>
              </li>
              <li className="list-group-item sectionHero-upsell-item disabled">
                <svg
                  className="sectionHero-upsell-icon"
                  width={19}
                  height={16}
                  viewBox="0 0 19 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                    fillRule="nonzero"
                  />
                </svg>
                <span className="sectionHero-upsell-desc">
                  Seller ships the merchandise
                </span>
              </li>
              <li className="list-group-item sectionHero-upsell-item disabled">
                <svg
                  className="sectionHero-upsell-icon"
                  width={19}
                  height={16}
                  viewBox="0 0 19 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                    fillRule="nonzero"
                  />
                </svg>
                <span className="sectionHero-upsell-desc">
                  Buyer inspects and approves goods
                </span>
              </li>
              <li className="list-group-item sectionHero-upsell-item disabled">
                <svg
                  className="sectionHero-upsell-icon"
                  width={19}
                  height={16}
                  viewBox="0 0 19 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.69 6.892l2.322 2.21L16.35.312c.38-.4 1.012-.418 1.413-.038.4.38.417 1.013.037 1.414l-9.027 9.517c-.38.402-1.014.418-1.415.037L4.31 8.34c-.4-.38-.415-1.014-.034-1.414.38-.4 1.014-.415 1.414-.034zM11.836.978c.484.265.662.873.397 1.357-.265.485-.873.663-1.357.398C10.002 2.253 9.02 2 8 2 4.686 2 2 4.686 2 8s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1 .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.358 0 2.67.34 3.836.978z"
                    fillRule="nonzero"
                  />
                </svg>
                <span className="sectionHero-upsell-desc">
                  EMS254 pays the seller
                </span>
              </li>
            </ol>
            <div className="sectionHero-steps-decorator sectionHero-steps-decorator--below" />
          </div>
        </div>
      </div>
    </div>
    <section className="section apiIntroduction">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="sectionHeading sectionHeading--alignLeft">
              <span className="section-status badge badge-primary">New</span>
              <h2 className="apiIntroduction-title sectionHeading-title">
                Watches bought and sold on eBay with the security of EMS254
              </h2>
            </div>
            <p className="apiIntroduction-desc">
              eBay has partnered with EMS254 to help facilitate all payments on
              watches sold for $10,000 or more in the U.S. In order to enhance
              the luxury watch shopping experience, eBay covers any fees charged
              by EMS254 for the use of their service when purchasing eligible
              watches.
            </p>
            <a href="#" className="btn btn-primary btn-lg">
              Learn More
            </a>
          </div>
          <div className="col-md-6">
            <figure className="apiIntroduction-figure">
              <img
                src="https://www.escrow.com/build/images/ebay/ebay_watch_front.jpg"
                className="apiIntroduction-img img-fluid"
                alt="Escrow.com integration with eBay Watches"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section className="section apiIntroduction">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <span className="section-status badge badge-primary">New</span>
            <figure className="apiIntroduction-figure">
              <img
                src="https://www.escrow.com/build/images/ebayPromo/ebayGeneric.jpg"
                className="apiIntroduction-img img-fluid"
              />
            </figure>
          </div>
          <div className="col-md-6">
            <div className="sectionHeading sectionHeading--alignLeft">
              <h2 className="apiIntroduction-title sectionHeading-title">
                eBay integrates EMS254 enabling the buying and selling of
                vehicles online
              </h2>
            </div>
            <p className="apiIntroduction-desc">
              EMS254 is integrated into both the eBay Motors website and mobile
              app, and is the first digital payment option since the launch of
              the new eBay Motors app in December 2023.
            </p>
            <a href="#" className="btn btn-primary btn-lg">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="section howItWorks" id="how-it-works">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="text-center">
              <h2 className="sectionHeading-title" role="heading">
                Over $5 billion of transactions protected with Escrow.com
              </h2>
              <div className="sectionHeading-subTitle">
                EMS254 is the world's most secure payment method from a
                counterparty risk perspective - safeguarding both buyer and
                seller, all funds transacted using escrow are kept in trust.
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-3">
            <div className="steps-step text-center d-flex flex-column align-items-center">
              <div className="steps-image">
                <img
                  height="200px"
                  width="200px"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6M0tAC03PUav5nLBn3gcDRLL-vkbeTWEyizgz71-EnIty6jCwB_1G9UA3Exz5Gjrvmc0&usqp=CAU"
                />
              </div>
              <div className="steps-title">Buyer and Seller agree to terms</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="steps-step text-center d-flex flex-column align-items-center">
              <div className="steps-image">
                <img
                  height="200px"
                  width="200px"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTTLEagtQ3_6uXI3qYyK9IJyzd8P6N1R_t3wbGcZLaw5ekructqlrdgBzWyt6Rrrx0VQs&usqp=CAU"
                />
              </div>
              <div className="steps-title">Buyer submits payment to Escrow</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="steps-step text-center d-flex flex-column align-items-center">
              <div className="steps-image">
                <img
                  height="200px"
                  width="200px"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS86zG5sQP2cL-wdvxEe0xzColV8LwrNPfDefjAttISizIsmeDfXzImLtdYdgmiGYdp6Vw&usqp=CAU"
                />
              </div>
              <div className="steps-title">
                Seller delivers goods or service to buyer
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="steps-step text-center d-flex flex-column align-items-center">
              <div className="steps-image">
                <img
                  height="200px"
                  width="200px"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh620gmvZ7ZY8aPrBRf7o9fAH_fwnsmwZ9FY2sqr6Ii3Fdl2_p3L_-Vv82sBwPY_BEck4&usqp=CAU"
                />
              </div>
              <div className="steps-title">
                Buyer approves goods or services
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section services" id="services">
      <div className="container">
        <header className="section-header">
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-heading" role="heading">
                Safely buy and sell products and services from $100 to $100
                million or more
              </h2>
            </div>
          </div>
        </header>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <ul className="site-features row justify-content-around">
              <li className="site-features-item col-md-5">
                <div className="site-features-icon-holder"></div>
                <div>
                  <img
                    height="200px"
                    width="300px"
                    src="data:image/png;base64,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"
                  />
                  <h3 className="site-features-title">Domain Names</h3>
                  <p className="site-features-desc">
                    EMS254 is the dominant payment method for the buying and
                    selling of domain names, with transactions including
                    uber.com, snapchat.com, spacex.com, twitter.com,
                    instagram.com, freelancer.com, gmail.com, slack.com,
                    wechat.com, chrome.com, and wordpress.com.
                  </p>
                  <a
                    href="/domains"
                    className="btn btn-primary site-features-cta"
                  >
                    Learn More
                  </a>
                </div>
              </li>
              <li className="site-features-item col-md-5">
                <div className="site-features-icon-holder"></div>
                <div>
                  <img
                    height="200px"
                    width="300px"
                    src="data:image/png;base64,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"
                  />
                  <h3 className="site-features-title">Motor Vehicles</h3>
                  <p className="site-features-desc">
                    When buying classic cars, a used sailboat, or even an
                    aircraft engine, EMS254 ensures money transfer and vehicle
                    delivery with every sale. Our experienced personnel can even
                    help you with shipping documentation, titles, liens, and
                    more.
                  </p>
                  <a href="#" className="btn btn-primary site-features-cta">
                    Learn More
                  </a>
                </div>
              </li>
              <li className="site-features-item col-md-5">
                <div className="site-features-icon-holder"></div>
                <div>
                  <img
                    height="200px"
                    width="300px"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAAB9fX2Ghoa0tLS7u7vPz89hYWEwMDDi4uLo6Og+Pj7CwsJ0dHTU1NTy8vLu7u4ICAhHR0cPDw9WVlatra1OTk6enp7JycloaGiIiIjl5eVeXl6np6eXl5fY2Nhubm4tLS0bGxtCQkIjIyMYGBgmJiaampo5OTmPj48vLy8bqAYeAAAE8ElEQVR4nO2daVviQAyARwooCG3lPgRB0NX9/z9w1XVXMtCW6SQk4cn7rbSkeR+OOTqHc5C8mTz+Ht7oZLgdLVqZK2P1xp0kAoNmod+aOzcshuOTfumeOzFE7p6u+AP8ZuoLPnJnhM4cCk648yEAKI64syFh8yO44M6FiPU/wR53JmSk34ZaqzDV7P8KvnPnQchXmZFxZ0HKp+GUOwlSPutvr/6Lm1leWHWVTbd1VK6/OdfxXhqeqNEp4qhc6LoxfOGlvHkln65n2HQN+EKHO8NoZlAocTtw3ODODwHYiBi5F3CcVgcQD/wQX90DOObODgNYwD+4m6sz9JXMUCFmqB8z1I8Z6scM9WOG+jFD/ZihfsxQP2aoHzPUjxnqxwz1Y4b6MUP9mKF+zFA/ZqgfM9SPGerHDPVjhvoxQ/2YoX7MUD9mqB8z1I8ZCqDT+5U06rGYtjPphmkDTuOJRZrhDH11FVmG2S22nzDDNr6fLMMmhaAkwxaJoCDDJxpBQYZEgnIMG6fzux5Df1mA6zOkW8VJiGFOJijFkHD5ESGGAy+t4bpVi+ZcqqGX1Xv9SPkWhtrKMPT+SZOYWF7zcC7DsIeZxQrEepNhCKuko7hg8AvxItEwdoEVT8kML4IZhmGGHJhhGGbIgRmGYYYcmGEYZsiBGYZhhhyYYRhmyIEZhmGGHJhhGGbIgRmGYYYcwKdrpIZNHpLLGYrADM0QRjNDDszQDGE0M+TADM0QRjNDDkgNExYWcLqTtQ+rkGh4/W18MwzDDDm4IsMsnaUn9gG9GsO8/3WT/tFetaSGF9zh8Weab9s7Q2r4DA4pd+lcHtxnCU+RGsKdVueRwcs4nNs0gKdIDfvweBUZvZgluA/8EEkN4Ryam5sN1ZbVcGvlMThHang8hXq+ahOQwom+jfTw3JrS0PurkQC24fr0bRjBNsxO34YRbEP3zuNRDLqhuF8iviHVihR1wTf0iip2CAwpp8PXgMLwqGbDComha+MusBUFjSHh8inBUBm65YZH6AgyQ+fyKfpqaXUgNPwg663689tgtiDoIPTtcOEPWsOawB/xLPTtpM8tcIA9Bb3Qt5O2gHEwwwrMMAwzrAWq4abbiUK+IS5maIZmaIZyDfPuITlczG8Mz1aSU3aF1dOT0x9QTR3BXnVYQdQQJFl1m44ahkPunMMIF6T836Mg3LBfHVQU4YYj8pyed/eF7CaT5+HbaFB8xT0cXSLSsHSB1l+Dl+F2XtrXFWu4IDcsaQH/L6gGxddEG6aMhgdPOnd0hm7CZ/h6cNW48Kpow4z6MVWh4ezwqj2docv81bcvZQj/ApZFl8UbflTc+ve/7xDZn2cIF98vbKNhGGJz5nMLOPGksMSQaHhmfykcvlU4xFCxIegJLS4uFBuCH2JxtUazYXbORaoNXfavujEtiaba8KOg2tztd+sTczZ+UG54BmbIATSMnBIBhwQ/4GQYSw8zKRjsGSfDWLwRrq2oYLB1N0FKMRJ/rPlTRCy4IlPcnjWI+KPNkpqOectv2TVxE60NXedPl1vtG7Kh5iXdORdmS2Qo5UtK96yA2+uAexLB4g65y0OyxWNZv/HloZgRQTWXsib4w8wpZzXXAnvL6uAhIfQk1VkH4E+JFwHiGIhRaTcAH9nxLpv1kFRMeHQQxupM4ppf9LTfH/fVGid5uJsnLVhG/AHe0XFXVI6P0gAAAABJRU5ErkJggg=="
                  />
                  <h3 className="site-features-title">Electronics</h3>
                  <p className="site-features-desc">
                    EMS254 handles the buying and selling large scale computer
                    setups, professional sound systems, and all manner of
                    electronic equipment both big and small.
                  </p>
                  <a
                    href="/electronics"
                    className="btn btn-primary site-features-cta"
                  >
                    Learn More
                  </a>
                </div>
              </li>
              <li className="site-features-item col-md-5">
                <div className="site-features-icon-holder"></div>
                <div>
                  <img
                    height="200px"
                    width="300px"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAAAD////b29s/Pz96enplZWV/f39xcXGOjo7x8fH09PTj4+P7+/vo6Oj39/fg4ODFxcW6urojIyOEhIQzMzNfX18XFxetra20tLTW1tZXV1dBQUHOzs6hoaFGRkYcHBwuLi5RUVGTk5NsbGwwMDALCwuvr6+SkpKlpaVjY2Obm5s4ODgZrYMZAAAKdElEQVR4nO2daVfqMBCGKagsUnZkqyyiXpf///+ugGRpk3ZmOkmKp+8nz7EkedpmMplM0kb019UI3QDnqglvXzXh7csRYTceNpvN4WPXTfEYcRMOksXDtqFq0/4axcy1YMRKOJrOGmbt78ahHicf4ejeQndV6yMIJBPh47QA76L5iKc6jFgIkwOI76TdgqNCjBgIk20xmKrn8lViVJqwCX9+V70tOVoOVUnC/h2a76TNkKf1EJUjHNkhdvvWbGf/9xdT+4tVitD4AGd3H4kcFrqr8df9m+Gyb19eQAnCbnZ4f5uOeqZLh4t1lnFMrxojOmH2DZ02cy7vLzMm945cN0ZkwudUcyfFBnJ4TP3mQK0cIyrhQ4oP9sp10z8zvtO8IhK29ZZ+gH8Y6x3yyb2rSiPUjWh7gPntWL85zhFJhLqbjfWm+9ok5Mn1i0oh1IzMAfUAL9Ie4zehBRgRCLX2dUi1xhOliDWpCLDwhI8qIHXU7m9K3yWo0IR9FXBFr3jOcJ9AQhOqLSs1Q1ALcmlQsYQLpV15ThpAysRyW66kXCEJuwpgUrbub1kW3GVAC0l44GxUz8t7iiNUBgqOicFQFnfPUJxZOELZoj1L7e+M77xNKMIP2SCmGbr0w2c8BWaFIpSAXGEWxXK5GhQxhNIffWWrf+GgTF0YQnm/S/gyackhw1HEH0EoDSmn4VuJUg+MpSpCEEpnmTUQKI3NI2exQnBCOXi1WVsgH6KbOQacsOPqXoso4xNvub+CE4rANfeMVfZvRgMmBSaULxO7zRP3zslrCiZ8EYTsbRDv/4S96AhB2Lo244G9DdKGuVitgRLKmY4DF1nEpd75ywYTynUYB40Q8VfecegiaINFN3QR+xO3z0VHhBIKz8NFnoGcYfT5C4cSigVrJzNVMV44GBGBhPIuO1lmEAuLDrI0gIQi0L3jb0Kk9PIX/rKBhMIWHPibECmOmwNjCiRcXpvgJiYmXEIHoWEgoQiKuZnhDK7FO4hHmQn7SQefzMWv7/ayvB9nIoxpqVxutC07lckS9trF1XrVrNwQnCEcF1fpXaUsbJrwobi+AJqUWLhJERblagcT3eLohFUyMbreCCkfBsL34pqCiewLqIRxaIpcUadtKmEVBvkcEa2NQriyFz4TiRNuBsvj6/WvHEtAXHVWCA1pvL/ayEjKyMWr3IlEurGW7JESzdhIwpymK7Gicd6jJupnviKeYTdnRKb1REn4YS15rBHyDyk9jTB6sl1HM6eScG4r+DStFzd2nEpsY9ApxKwS2m81KYIiCa3lTiP9GaqZPhw6TR5EP+zmdReSCw4gPO3FEr7AKZWN2Z7Gygt0XmCzvqakXWGC0H7nTo/tOgnfRFE6Rbi0TuPcNQ50zvGY2K4kBRgE4dBW7OXOJec/L4nnDp7h7/rT57kppi02Z5EWhQRh09qC6fn/8cNs+3IJSbesl5J0mcSPjpP5JVpqf5tcEaYXn7nH/LSvYh/zXRGms5VcjIeqrIbGHaG+XuLEp1HUsV/ojrCl/IB7vD/pn1J+jl/qkLCxFwkmbgJVMtSUOxI5JPx5k0bdwSB+ZzajUv9WvUFv+JV/kVPCSqgmrAmrr5qwJqy+asKasPqqCWvC6qsmrAmrr5qwJqy+asKasIrafR/W8/l6vTmvR5Hy26pKOLt7HjX11IQ4IWXyV5Hw/mNFzvGqPuHblHtDR7UIjw72q1SI8OmZ8d2sICHgzL6bJgSe2Xe7hC52VlaJcJqzJ68XP/4ojumJ3uEJX83HTfWSxXSuHmI7WU/fV4T9icEJ/xka1R9NbZllrQ52QAlMuMs6Yr1lUa7yeolJ4QtLOM+0J4Hth0C4BkEJMymxi5zTo1MCj58hCdN7tuyJpUbtYIwBCVM2dGxN2LNqB9nXFo5Q3+fziDyc/1fb4t1CoQjf9KYVJNLkqPDUsVCEGmBcJq+6VeDuBCLUzgUtm0mW3xvDEGrjfPlsztzs6CCEqpnv00yMrqznEJZQPTiha8+Xxahld8kDEKrnv8T4QdCsVyuif0L1ZI1u8eWNTtJMAPsfJrYgj39CxZXpFj/B33HTvldCyPYUvROqI/S++PKr1c353stVrcgo34TqGfOAPavycutGGimzRfVNqAz1kK3/ci+GdWudIuO46JlQacOy+Gp1PQ00MzZ5N54JZcWwXQ1IQtMORb+EStz3tfjqBp7wEJhQOV8nZ2eMKiyh4Rx1r4SymwDGt7PQhNld+z4JlVPOoRNCPOFnSELZC/M2N2nCE2YOtfNIqDik4N8QCNPfrfFIKKOj8KgMgTC9XdIjoXT+4b+hEE5CEUqvEdwLaYSpwxf9EcqhAh66pxG+BiIUVQImQkIkQt2ceiM8iio/Eb+iEbaDEAoLB4lcCNEIta3Z3ghFpQg7QyYcByCUZ8ugTqMiEs4DEIoYaa/4WkVEQvU19UUoVqVxixRUwpF/QjGpwa1SUAk73gmlJwWImSmiEn57JxQjFK4bkgmVgI0nQhEHTnC/IxOufBOKno9cziYTLn0TisUK5HIomXDqm1DMDTfF16oiE859E4r6kAuiuKi+oolnQhFlG2T/Nzu2rTrK8OeiY9fU8GZ4JhReaXZiwfPloayJ9kx4uNaSOSes1OdoFWVCzMKJ8kO4tjWE78NDx1TJIiXJD6GwbOmDwvi+jpVerBMvhx9CcV5ZmpDvqyvpOYsYgQM/Q75tFoGf4d/vh4drLRlbyvWlwUzzPdvSjZWQ6etK2Ris+JcfQuFDGX2aO7vkqbPPOVfd77PFeib8+36pnFsgjyW8nbmFGPf+7Pzw78/xRUAYs/DUuKU4jVh5Qq3L3FKsTWYpIJZHG3RCJRPTe8wbdxj47cS8pakBpSQK3dC6hdgqiuuIVMLIP6HwTHFjPpHwMwChNG6oXYY3tAbsdx1/EIJQHrxu/2JPVreUiyHvq/t8mqaREJrTSpbsG4idQCRCPTsR8I0SJslsDIStIRGOzYSIhEGiRGyoD/8NhTD1yWJJiFtgJ0hO2dzml6Y2sUtC998+JCSYEgj3kS5J6P4DpDJJGPyhRQJhOngnCRG9gypZrbtcfXX/ZorQw2sqHyJ09OXcb+HlE5Yy3Qz4VSzOPTPwWktImZjCTDeWcBNlpBJiw7UEyaMUYD4UltBwvoJGyP+ho7QUOwDybDj3H56FCzFQpHhU6fUwk+QsARLVf4kM0glxKcokKbmtgCFD7ucD9Fv9y1gWQmzEFi+lGX1Av0/g7TJYGRNhFDv7pNOvlPcUMj5dllAB4+e+aD++1NKxSVXsHQTxYZwsAUHWne2EMwPhj9vIcd6IVcpeWb6vuO2tJ4MaCaOoO3puf25bTvSqHqsQ+zvbJJT6yHxMo8xW9KLghOhVJYNgZwwF1HNJQOA5USHVLNMZt9CzvsKKPq3JTpdSqghhtNqT+NbFZ9NWhZDkEk8gCVXVIUTnaQDP96wSYdR/hgf8v6GJm5Ui/FEC2yV8hKfeVo3wx2FcFO0yPbyTzhGukvqjqW0Ot+mMkCdeV5LwpEGyuNuq3fLtcLcodZ53RdV7HDabzeEj5r3UVXXC8qoJb1814e3r7xP+Bzgvqwvud/ijAAAAAElFTkSuQmCC"
                  />
                  <h3 className="site-features-title">General Merchandise</h3>
                  <p className="site-features-desc">
                    From computer hardware to luxury goods, you can safely and
                    easily buy and sell merchandise all over the world with the
                    protection of EMS254.
                  </p>
                  <a
                    href="/general-merchandise"
                    className="btn btn-primary site-features-cta"
                  >
                    Learn More
                  </a>
                </div>
              </li>
              <li className="site-features-item col-md-5">
                <div className="site-features-icon-holder"></div>
                <div>
                  <img
                    height="200px"
                    width="300px"
                    src="data:image/png;base64,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"
                  />
                  <h3 className="site-features-title">
                    Milestone Transactions
                  </h3>
                  <p className="site-features-desc">
                    Paying for a good or service and want money released only at
                    certain stages? Use EMS254 to assure that money is released
                    only when you're happy with each step.
                  </p>
                  <a
                    href="/electronics"
                    className="btn btn-primary site-features-cta"
                  >
                    Learn More
                  </a>
                </div>
              </li>
              <li className="site-features-item col-md-5">
                <div className="site-features-icon-holder"></div>
                <div>
                  <img
                    height="200px"
                    width="300px"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAACWlpb7+/ulpaXu7u7x8fH19fWIiIj4+Piampr8/Pyenp6tra3l5eU7OzvY2NjIyMiDg4Pm5uYeHh7S0tLDw8Pe3t5NTU19fX1YWFiGhoY+Pj5SUlJeXl6rq6szMzN1dXVqampGRka2trYoKCiPj48VFRUUFBQkJCRubm5jY2MvLy8PHAW5AAAPsklEQVR4nNVda2PqLAye03qbTp3zenTazW3u8v9/3/t2NiFAqBYotM+nc1ilpITcCOHurjpMX1q34WVV4SgqxPRG+jJMYw/WCp8lKPyMPVgb/CtBYKv1L/Zwy2NRisAm8ulzSQqfYw+4LMrxaIZ+7CGXA/Lo2/D+gtGbRM/bKG8fYnuz+BR5NIGWRJky/Q+N4tMnGPUYmyYKhRP8yxianmIM1Q6o69fYNEL2hH+M8G/r5vGpzqOP0LK728E/H+GPzeNThkcJWYRYQNP4FOUow6Mj9T8XNIxPC3j0Il5Q6MzhgWbx6UbnUSTpsvSK+HQTfLylwfDoUGVL5NMhPoN8ugg83vLQeXQOLUd86NhgPr3OoxmUhZmhKXyKPLrHJuTRIXlOY9zG8Cn69V1oYaYrgz6xyKe19veRR0/YpKuGP8x1wk8N4FPk0c9x54JDCk1raLpgjEy5OUATMkB9+fTc8oPa8umHJwJbrY/YpBjgawpbrXNsUng8eCOw1XqITQyPt+sjvxHr6y+LgrIhUjNq60T1PRFY48DiF4wxuWv/4W4FLW93D22BB8HSK3gUjZqv2GQUAPl0i0330DSSnkQH6h6btrXn0QwYohFmm+4p3bEeFRptNebRDGh59aAF+XRHHsPIFO6N9qCl7g5iEZ8K94nxqJrBoxkYPv1V+RR59BefaQqPZkDbDflUcxF157DbFB7NcF2eMoGo5vBoBibkjfI0mzSc0iP+HYM0DeDRDHooA+VpxqcN59EMxfKUkaP7RvFohqKQIgrNZm8gojzVQ26I5vJohqKwaQ5hpiKP1jcAxYAJK64lAoWP25Rgt4rfVln8Xu+0TniwoLCmsRkDRtcp0jC63m2NcGtmKcVL7EGXQmpBYRp70KUws6BwFnvQ5bC7TpGC3fVOawWcxP59MTAC2bApFA7T8MpzYOtMrjxXP+AkDgofGzR2Cu/aEB0u3imDHbmvZun7u8cOsUJ7BQ/2xGP7zrzgwVohGckmW9Ekypuqu0O34Nm6YLltqTCvxIH27Lbm67GneoFXJpHdrBoWsXVczDfcgAtWYs/wfFrPc1CP34bxmifRvN/482j4STx0U32YR2zjVyKuwvSo//i7XkKnrc/Gy6knrFM+0As/evufX0+6v9UvthWCYqwObn26jA4NG24l4iq8iM/Baa92M2Z+FQMr5SjF1whTSwsnEaZQOBXdkXJaalcLkaMw6F6KCRZMojKFOZbK54qfHTWVv/q3+tHNk6hP4QULmVnfI0f6ZQ3/rVuWxknkp/APU9ksutceCIeelAW1ZxeNaRJNU/iHhRQieIumOKQcqOcl/5BhEgum8A9L6RRxpHi/FBM1S4QJ+wQ4FWbXXnI7osRSqZG2TszPsZOIU2iY+QwJ3en49jbuW/FAl+DB+Nh0tMWdNroSUcWc10OzzjvQjxg4CJAQJbEzTeBM8TWEwOjKf9iYnMKEaMevAj7xD7rfaUgumJpcKR4bg9qjJ6YDRjloPQh2IbU7XyoJV/F7aHNdLckjwWw4oiVY1kmetOHfhiduluZkQQSyb8gMvjDLP0kt6cuQMl/sgZg4QWZxJd7H5E5wnnApbBgDhizpAL4/OVff0f/K7IzuR9M2vxU1GyxGmk/IdkvM38otuJ44VKH7pwu1YMv5Kbe37ls6cjtluVF/9a4baR3843PVnr+IqGgEPqj6ISUjXR06Mg6E3xZqEEtPyxDKv+JdOBFNOal/Us4i7LQHitA+KMEobRoFiT8uBFyD8Oe1GZT5cF3eG5jJB1I0U14waoUOo9C+qjR4kEJlezu9JdO4Vn1mIcUqi/xj8rJmqT3SWMbR3pubvVMaVeUn1nlVJipuKakrQVIGbiHADu1KtQhR9Ve0Ybwx9U/Dpa+u2ypdGqRR3TKc4kpyicVEKURQLV9KgBpAP5iSBSDMjQriGmKrTxEjJNqw82NwJGSHValyhp+5gjOYqJSVkAkh0F+K76voVOFHfJ33XE1UFHu5nUS8fXAooGMkETWKbz7Vz4moI/H7RuL4ykxT1Rk+nCpZgJ/EOHyHGIiTJjMHCqJruUilgLr+VWoWvvDZvw4mbpos21Cd+HSksFOJR8U2/HMVyQWExB7b/mr6ZXmg2yDzi9hcqMYtFSTKNgYufn9hG/BsZNdMxJuqCvOJtSgrIjBtvB1qR7kmBUmEjVNdBEz4nJKEw/XvS35D4FlKUxY2jk89qEJYcFLwAny1vel35cDvj6FDWO0+NC4FyZ9B2e6HfcCKkIwL5NyqCzygDSPxaZo3esnvR6anU9huca1VADdxJFsbxawPIQdWsMSN8A0DpPYit0g8BM6qBwMcvxadLNx7CnEaC70aajfhSnQPn4K7ImkksHGCnBjEFSEtOmAtJkJeEtA91YWopsKku6J9TyUnjOHdtXdQFVvaCAqy0tgsAcjTN24QrgoDFgGV1TiFoTZlWRsGjAHHau64Bmgj5EiEO/QJi46uxAE3tPKAJUAlNasgqwUKdCoNgL3cjFOwzWj4GT5oyGL/KcM2M6atNIATqMBCvzdkthmr/vImp8AifCa62wP+Z9gDkcBMdM8A7BoXaQp9UCb9ZdqqB8hv6oTD93cJSeX7z9R0Ab/7zfijagAflmiotvtQgPvpWgYrrkq/lwMsDho9Bda1T3kDXUHVPewUsglMFQK8KBqUgp1ve30By5AIMGDS8NmQkJdC2BRcHPtt7zzGdiRNwCwFeaEVAaw0Kk3zpq3xR1cAmo86TvAlw59nATal5v7PpclaI4KEpkLF9as5AALQpAk2Z233FGAh09yevMnd7ywPyGchihg0ou2aAUFDxOZIf0swwNclCxE41zbRPXc8qRkBVrfLSG0BVXypWMh1l60FmfdI9f1XvGWIop1qxNxVPdp1CI4FMftAusY5b8WsGgiJ23UIyn1Z2BQQoBGJ5AS5YOeMg6AizgmYcXFO6cKASIQPwsV2ko/5ZEOnT+YKiGUQ/QwRFTvLFMghTflKiFQ6DgQDkQJznegS+NApzJVFrGI5+d4v0Q3gItpZIOnlxzRGkxtOsWpW5a+nGQo5hXZufu5fUg867y9WdbytcUR2/tNenzB9IQTFt85VeZzFLqUutxeot+L0xdwBx7xI01FbmiVQPwoZ2femD/J27I0Ues0oKwFGf+XCws5QNq/DWBTeGym0SzvZ6p8nMpcyFDKDvB15EISmk0SWpb7XYS6bj6Sp5SKb3bHRKcxD4XbBzdz3ooGso8sXc8eP/s3PLt+c4fr8FaH3LACM0egk+0Y6hemlJVbJX93yBgrtQlHg7hL/EJZ6nPpG3r0niN4xPn7Qw/8I7x4wE5QBouMUxlvqb3eLYgBTEB6Hrxgj5M3G8KHJcq+vpUliCMrGKWqcK2iqvhgNWQZ5XhXVDbkJESdQ0zKOx1Z9pZef0/sWQZjGCLbBEqHZS2c3noLdUML33L53KCz1dwPR5gI5t3VJZBd0GTIfCvCkf3BmhKUA5FCTKN/scc7qtMCzLgNg0VinZ+V9UucLhFf4uD6oZxroy510+4N6P7osBr4IX3wLQhhUBORN9ke8QNQQuw3218Ib31C1iNjEYGLZChph9XF5SKHZFMZCXSeYVoc997wHqlC5nNoQAElKvQjI/3boFhYiUfCYXurQrQXwKl5igUKegstJyzHz4b6ZtuoBmS80IHPyMBJwMCnzw/I+OvRbHiBnqCMI51qcvFU4PUq9E8hODOkkgpKimg/Wi1vUCKQVZYSDl57LAb401QuwhNxUM+Q3UrMGF324ScTzazRXFiSpY0jlyHQD1uDRresSgKPNdDsBPr4rK0GYgAbyUWGEEqd4PJ26pVDmwd6guQCPcNJGLDASpqYoflFpvwQanSObIJLpfOGRozAbGClHDMgZ98IKkIh0pI1YVihEMUo8Sy5F+EBneTiSz6o/KOYSwhMGAmm8CKWrDx8Hlrl0LB3Fd/WJJ8ij0icGGe/jcgE8gijxA1Y7qTomhUdkpS09/MJe3sFWTxe1jqvdwxBV8KQAJihIPxkFSIw0XVip8ejlJSZghTZJ92K5DE+bYOB8ymIFa6t6LISjAV8ibztDq6+UCVR/I7a1QncfpcxZsi38WxzYo8QUonhMVVtRohacpHfxVLC/gB+KU5khRXVfV9uQx4ehf2Bdn3X3UKzIDtMPDqGKO29EPUZ54wX1h1fDH0Wa3CwKHPpPkxIzKPtHaIf7zVTGNSd/zq6oDO17r0bU2fqSN3ixuJHnk0kp9CvbMKSmmt80IrEAlG0XVIW+JbgoKiTbMOSWhKM/6yYhlaHl4hv4vk/DT+2BlqBSgZZeBOErcEOr9irVRVAgVFCiFflGcScoiX6SFgvutDANwguMBdrmZEA794Iuc1q7XGF81MDVpEoIG0bhkAEdk6vaoFcETZSECFHUtKITnuLl6kzR+s1fLh7jkt5toh5cEWUUK8tYElc1qNkm0uVMa9vozYref6Rxg9BM1XkzQmW8q2lW9DoYy0s2V69SH6qwFNaF5/q68iDEElH/lMjX+v2UleYL+Tq5tZpeMRCF7SuNKoip0q1C5ZaOyel2B7w3li9J1p2VgXig4kvYhMGvk6heZtlKl7e4qO3lq/K7vTZLhMDKtxKERTzR56jTUvEyLuapeUe/A1qnoSsuaglw1kPcmPKsD77LXAr8/n2YcgzbW4x+mIuvnvRnidkUJEGCmP2MWljp197+YZsOx6fZYjFdzE6nUf9b5egcP8yUEzM10EkPQgO3KEw03oCUM/rI3QvBjnYSEtiPujJfYF2EDzYBL41AoHS74xurEwZjAxcaMeFlJPUUg6Z80qudDF7h6p96U5UZv/cGU5qaSoFPzNFrco3MM/1grhTXsO8YPYWUPBb8CmtyLULr2WxqJ6enIn79GS3Mls/sTJ6McMSDXvPY2hRaaKvl8HsnXXT0fFw/dRaFxkCPWjphr+jEIUjXEl9nonY3WU2n08ck6d5gsVIeYe9ZDALp0vF3n3y0kGY8ym3AF8j3GvLXVltgKt2KeI569/hAvqFx62MwiqdY5fbkTVDcib2r9zZbyx2GrkDJIFEu2pyMHYpGnhQF6nzJmR+cWgpSu4mcqrfsfsU558jg4UOl8fmj7Ipc3f+qnUQUoTq4S3Kflrce1ukumSuu03owqMCc85gm/dk1YySZ9TmzbhujbuE1mC5z3v87TRPdihkki9M/5jrgDK91pC9D0ucHnOF9sn7t31/Qf11P3s2P/otTDu42tDu3+EtFmAT3kkpjykiNm5FGtdBuxyy1Iu/lFMuFsMGir6m3QnzeFh+vF5LThgn4cngd11m2FKM3G6ZFUYzj93AW8o6FivCQLJad/uZ/FfGVRV7On8+Tbfo0Wi6SEIXd/wOmlbjVyZWBCAAAAABJRU5ErkJggg=="
                  />
                  <h3 className="site-features-title">
                    Jewelry, Watches, and Fashion
                  </h3>
                  <p className="site-features-desc">
                    Buying and selling expensive jewelry online can be
                    difficult, as it is extremely difficult to spot a scam.
                    EMS254 simple 5-step process ensures money transfer and
                    jewelry delivery with every sale.
                  </p>
                  <a
                    href="/general-merchandise"
                    className="btn btn-primary site-features-cta"
                  >
                    Learn More
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="section apiIntroduction">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <figure className="apiIntroduction-figure d-none d-md-block">
              <img
                height={300}
                width={300}
                src="data:image/png;base64,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"
              />
            </figure>
          </div>
          <div className="col-md-6 text-md-right">
            <div className="sectionHeading">
              <h2 className="apiIntroduction-title sectionHeading-title">
                {" "}
                EMS254 Pay{" "}
              </h2>
            </div>
            <p className="apiIntroduction-desc">
              Escrow Pay is the simplest way to add escrow payments to your
              website, mobile app, online store, classified site, or
              marketplace.
            </p>
            <a href="/pay" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="section apiIntroduction">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="sectionHeading">
              <h2 className="apiIntroduction-title sectionHeading-title">
                EMS254 Offer
              </h2>
            </div>
            <p className="apiIntroduction-desc">
              EMS254 Offer allows buyers and sellers to negotiate a price for
              domain names, cars, boats, aircraft, fine art, or any high-value
              item on any website or mobile app through a{" "}
              <a href="/buttons/create">Make Offer button</a> or API call -
              protected by the security of escrow payments by Escrow.com.
            </p>
            <a href="/offer" className="btn btn-primary ">
              Learn More
            </a>
          </div>
          <div className="col-md-6 text-md-right">
            <figure className="apiIntroduction-figure d-none d-md-block">
              <img
                height={300}
                width={300}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQLs8vgDSFuyEKUEenl6Owt06kqdcL7t_qg&usqp=CAU"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section className="section licensing" id="licensing">
      <div className="container licensing-container">
        <div className="row align-items-center">
          <div className="col-md-6 d-none d-md-block">
            <img
              src="https://www.escrow.com/build/images/sections/licensing/map.png"
              width={500}
              height={300}
              className="licensing-img"
              alt="The most trusted, licensed online escrow service in the world"
            />
          </div>
          <div className="col-md-6">
            <h2 className="sectionHeading-title" role="heading">
              The most trusted, licensed online escrow service in the world
            </h2>
            <div className="licensing-subtitle">
              Headquartered in California, Escrow.com is licensed, bonded and
              regularly audited.
            </div>
            <p className="sectionHeading-subTitle">
              Government agencies perform regular audits of independently
              licensed escrow companies. The audit examinations serve to protect
              public funds, determine safety and soundness of operations and
              determine compliance with escrow statutes and regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
    <footer className="mt-5 text-center">
      <p>© 2023 EMS254</p>
    </footer>
    {/* Add Bootstrap JavaScript (optional, for some components) */}
  </>
)
    }

export default Home