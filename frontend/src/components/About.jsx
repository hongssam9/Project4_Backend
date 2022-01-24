import React, { Link } from "react-router-dom";
import { Container, Button, Navbar, Nav } from "react-bootstrap";
import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsGlobe,
  BsFillPersonFill,
} from "react-icons/bs";
import { RiHome3Fill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import "./Navbar.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import logo from "./Image/P4_Logo.png";
import Xuyen from "./Image/Xuyen.png";
import Tad from "./Image/Tad.png";
import Sam from "./Image/Sam.png";

import "./About.css";

const About = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
        className="mb-5"
        id="navbar"
      >
        <Container fluid>
          <a className="nav-link text-secondary" href="./Settings">
            <MdOutlineArrowBackIosNew size={20} />
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Settings">Settings</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
        <img src={logo} alt="logo" id="logo" fluid />
        <h1 className="my-3">Hello!</h1>
        <h4>
          Do you have anything you're proud of and want to share with your
          friends? Welcome to SoCap, Software Caption, a simple yet interactive
          app that will allow you, the user, to show off your best work!
        </h4>
        <p>
          Whether you're an engineer, musician, cook, photgrapher, etc., post up
          your work to get feedback, suggestions, inquries, and compliments!
        </p>
        <nav>
          <Link to="/Terms">Terms of Use</Link>
        </nav>
        <h3 className="mt-5">SoCap Created by</h3>
        <hr />
        <h3>
          Tad Smith 
        </h3>
        <img
            src="https://socialcaption.s3.us-east-2.amazonaws.com/media/Tad.14a45747845ed77dd2db.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLWVhc3QtMiJHMEUCIQCgv08OE8VpljHZz6i1TPBmh3BQ893CojcvQe6OYV4NswIgJJeSS8bukocnjNPosSzaW%2B2is2ez1UhYpkBlBhRHwFYq5AIIahAAGgw0MjMyNzA5MDI1NDMiDF66gtTQMy7wBhjHuyrBAs5dQWiIrR8SGruySKBrJUxtJxDmPbb%2FwYl%2Bit67UpsgNTSnrU23moz4E%2FKuP4HwduzBkQcHGtp5qI83vUOEzvTR3P8gz4t0FkMIjxVLWX7HtzWd5XPZxCQn7R8EtBAg5WjkMTC0J6HLeMsAjmi2gTHigMvRILB2QySsJhGpw5EqQapEHbchiB%2Bw6MWMzxt%2FGUhAus1Urbk5Ykn2OHCriljh1Nai2IrcG%2BgMVqp9o5DCNM3Fnq5c5upRSZbDzzjtwZfDHsc1IA5TUrBfrg%2FkE00pF%2Ba5Df2EB2h9R7kiQA4gGm4IlumvNJkk%2B8kWBtJflPE9rQsm7BvDejDuHhcIz2hA7V5ppXr4CnVKGkDeFZTahjVQdMu5SOBDBLCW30NnZTjma2%2BlN6M1d5sEzhixrqtjRoXolG%2FD89DnwQbCZqCE%2FDCo%2FLePBjqzAmILGRwC2RBCHGSXzXFQnQKLMeJV%2BnkYC6KUvQ3QyLrqYd%2BxvkJX5RLnNlblJKZmlhD92XCZceHhfuj9JsSQQZzLPtGI9Ita97ef%2B2otECflj3TIoOOWweuo8j8lCB3sRxStTsxtPOfE%2BixdG%2FMtK0y66Oq8zkORrobEOfIHVHfqpj3AYfX71eCt343ZAvRdZgzBcfWXxxmQCGVt0jPjlN%2FojoMoQz7PYyJVrFa3lIUQQibetapRPsdmSnlRYGKYQQ9c1rFBf%2FbKIP1sbGBHiwCekN8mne%2B3VCtvgsYCPbSSa196tuBrgWaVDa4f0vkHqkY2F%2BCa2Ya4vpFYvvnB7jZGGdZFg4rbcsPp5%2FvAXtYRDZgAVaA6E58bRXwb6rMICc6Mh9qSBKFULgdoiHTrp5VbsD4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220124T033801Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWFDHJNMHWUXYMIUW%2F20220124%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=f0e3447a4a22db2b4e4e2b7627e8befcf739f56f6f283a44645caee0c81f56f9"
            alt="Tad"
            id="profile"
            className="rounded-circle border border-muted border-3"
            fluid
          />
          <br/>
        <Button
          target="_blank"
          href="https://github.com/tadsmyth"
          variant="outline-*"
        >
          {" "}
          <BsGithub size={35} className="m-1" />
        </Button>
        <Button
          target="_blank"
          href="https://www.linkedin.com/in/thaddeus-smith/"
          variant="outline-*"
        >
          <BsLinkedin size={35} className="m-1" />
        </Button>
        <Button
          target="_blank"
          href="https://www.instagram.com/tadsmyth/"
          variant="outline-*"
        >
          <BsInstagram size={35} className="m-1" />
        </Button>
        <Button
          target="_blank"
          href="https://tadsmithcodes.com/"
          variant="outline-*"
        >
          <BsGlobe size={35} className="m-1" />
        </Button>
        <hr />
        <h3>Xuyen Hoang
        </h3>
        <img
            src="https://socialcaption.s3.us-east-2.amazonaws.com/media/Xuyen.cc1f9670b2e920473a3a.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLWVhc3QtMiJHMEUCIQCgv08OE8VpljHZz6i1TPBmh3BQ893CojcvQe6OYV4NswIgJJeSS8bukocnjNPosSzaW%2B2is2ez1UhYpkBlBhRHwFYq5AIIahAAGgw0MjMyNzA5MDI1NDMiDF66gtTQMy7wBhjHuyrBAs5dQWiIrR8SGruySKBrJUxtJxDmPbb%2FwYl%2Bit67UpsgNTSnrU23moz4E%2FKuP4HwduzBkQcHGtp5qI83vUOEzvTR3P8gz4t0FkMIjxVLWX7HtzWd5XPZxCQn7R8EtBAg5WjkMTC0J6HLeMsAjmi2gTHigMvRILB2QySsJhGpw5EqQapEHbchiB%2Bw6MWMzxt%2FGUhAus1Urbk5Ykn2OHCriljh1Nai2IrcG%2BgMVqp9o5DCNM3Fnq5c5upRSZbDzzjtwZfDHsc1IA5TUrBfrg%2FkE00pF%2Ba5Df2EB2h9R7kiQA4gGm4IlumvNJkk%2B8kWBtJflPE9rQsm7BvDejDuHhcIz2hA7V5ppXr4CnVKGkDeFZTahjVQdMu5SOBDBLCW30NnZTjma2%2BlN6M1d5sEzhixrqtjRoXolG%2FD89DnwQbCZqCE%2FDCo%2FLePBjqzAmILGRwC2RBCHGSXzXFQnQKLMeJV%2BnkYC6KUvQ3QyLrqYd%2BxvkJX5RLnNlblJKZmlhD92XCZceHhfuj9JsSQQZzLPtGI9Ita97ef%2B2otECflj3TIoOOWweuo8j8lCB3sRxStTsxtPOfE%2BixdG%2FMtK0y66Oq8zkORrobEOfIHVHfqpj3AYfX71eCt343ZAvRdZgzBcfWXxxmQCGVt0jPjlN%2FojoMoQz7PYyJVrFa3lIUQQibetapRPsdmSnlRYGKYQQ9c1rFBf%2FbKIP1sbGBHiwCekN8mne%2B3VCtvgsYCPbSSa196tuBrgWaVDa4f0vkHqkY2F%2BCa2Ya4vpFYvvnB7jZGGdZFg4rbcsPp5%2FvAXtYRDZgAVaA6E58bRXwb6rMICc6Mh9qSBKFULgdoiHTrp5VbsD4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220124T033831Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWFDHJNMHWUXYMIUW%2F20220124%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=6140116a33152c9f22633273dbd7b82e4dc3a4b27816b97a4a232f8bd8c15a37"
            alt="Xuyen"
            id="profile"
            className="rounded-circle border border-muted border-3"
            fluid
          />
          <br/>
        <Button target="_blank" href="" variant="outline-*">
          {" "}
          <BsGithub size={35} className="m-1" />
        </Button>
        <Button target="_blank" href="" variant="outline-*">
          <BsLinkedin size={35} className="m-1" />
        </Button>
        <Button target="_blank" href="" variant="outline-*">
          <BsInstagram size={35} className="m-1" />
        </Button>
        <Button target="_blank" href="" variant="outline-*">
          <BsGlobe size={35} className="m-1" />
        </Button>
        <hr />
        <h3>Samuel Hong
        </h3>
        <img
            src="https://socialcaption.s3.us-east-2.amazonaws.com/media/Sam.cf8dfe49fed50d78865f.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLWVhc3QtMiJHMEUCIQCgv08OE8VpljHZz6i1TPBmh3BQ893CojcvQe6OYV4NswIgJJeSS8bukocnjNPosSzaW%2B2is2ez1UhYpkBlBhRHwFYq5AIIahAAGgw0MjMyNzA5MDI1NDMiDF66gtTQMy7wBhjHuyrBAs5dQWiIrR8SGruySKBrJUxtJxDmPbb%2FwYl%2Bit67UpsgNTSnrU23moz4E%2FKuP4HwduzBkQcHGtp5qI83vUOEzvTR3P8gz4t0FkMIjxVLWX7HtzWd5XPZxCQn7R8EtBAg5WjkMTC0J6HLeMsAjmi2gTHigMvRILB2QySsJhGpw5EqQapEHbchiB%2Bw6MWMzxt%2FGUhAus1Urbk5Ykn2OHCriljh1Nai2IrcG%2BgMVqp9o5DCNM3Fnq5c5upRSZbDzzjtwZfDHsc1IA5TUrBfrg%2FkE00pF%2Ba5Df2EB2h9R7kiQA4gGm4IlumvNJkk%2B8kWBtJflPE9rQsm7BvDejDuHhcIz2hA7V5ppXr4CnVKGkDeFZTahjVQdMu5SOBDBLCW30NnZTjma2%2BlN6M1d5sEzhixrqtjRoXolG%2FD89DnwQbCZqCE%2FDCo%2FLePBjqzAmILGRwC2RBCHGSXzXFQnQKLMeJV%2BnkYC6KUvQ3QyLrqYd%2BxvkJX5RLnNlblJKZmlhD92XCZceHhfuj9JsSQQZzLPtGI9Ita97ef%2B2otECflj3TIoOOWweuo8j8lCB3sRxStTsxtPOfE%2BixdG%2FMtK0y66Oq8zkORrobEOfIHVHfqpj3AYfX71eCt343ZAvRdZgzBcfWXxxmQCGVt0jPjlN%2FojoMoQz7PYyJVrFa3lIUQQibetapRPsdmSnlRYGKYQQ9c1rFBf%2FbKIP1sbGBHiwCekN8mne%2B3VCtvgsYCPbSSa196tuBrgWaVDa4f0vkHqkY2F%2BCa2Ya4vpFYvvnB7jZGGdZFg4rbcsPp5%2FvAXtYRDZgAVaA6E58bRXwb6rMICc6Mh9qSBKFULgdoiHTrp5VbsD4%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220124T033239Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWFDHJNMHWUXYMIUW%2F20220124%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=cfb0d600c7e9c2ecfb68c236a21ae64b9413a65b118723934064d2c2ddcadc36"
            alt="Sam"
            id="profile"
            className="rounded-circle border border-muted border-3"
            fluid
          />
          <br/>
        <Button
          target="_blank"
          href="https://github.com/hongssam9"
          variant="outline-*"
        >
          {" "}
          <BsGithub size={35} className="m-1" />
        </Button>
        <Button
          target="_blank"
          href="https://www.linkedin.com/in/hongssam9/"
          variant="outline-*"
        >
          <BsLinkedin size={35} className="m-1" />
        </Button>
        <Button
          target="_blank"
          href="https://www.instagram.com/hong_ssam9/"
          variant="outline-*"
        >
          <BsInstagram size={35} className="m-1" />
        </Button>
        <Button
          target="_blank"
          href="https://www.thehongssam.com/"
          variant="outline-*"
        >
          <BsGlobe size={35} className="m-1" />
        </Button>
        <hr />
      </Container>
      <footer>
        <p>app design / logo &copy; 2021 Lonely Food, LLC</p>
      </footer>
      <Container fluid className="my-5 py-3">
        <Navbar bg="dark" variant="dark" fixed="bottom">
          <Container>
            <Nav className="m-auto">
              <Nav.Link className="mx-5 nav-item" href="/">
                <RiHome3Fill size={25} />
              </Nav.Link>

              <Button
                className="mx-4 nav-item"
                variant="info"
                href="/UploadImages"
              >
                <AiOutlinePlus size={27} />
              </Button>
              <Nav.Link className="mx-5 nav-item" href="/Userprof">
                <BsFillPersonFill size={27} />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default About;
