import { Button } from 'components/Button/Button.styled';
import {
  Paragraph,
  Title,
  WelcomeContainer,
  TextContainer,
  TextWrap,
} from './Welcome.styled';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <WelcomeContainer>
      <TextContainer>
        <Title>RentalCampers</Title>
        <TextWrap>
          <Paragraph>
            At RentalCampers, we're passionate about fostering unforgettable
            experiences in the great outdoors. Whether you're a seasoned camper
            or a first-time adventurer, we're here to simplify your journey by
            connecting you with the perfect camper rental for your next
            escapade.
          </Paragraph>
          <Paragraph>
            Our mission is simple: to empower explorers like you to roam freely,
            discover new horizons, and create lasting memories without the
            hassle of owning a camper. With our user-friendly platform, finding
            the ideal camper for your needs is just a few clicks away.
          </Paragraph>
          <Paragraph>
            Whether you're planning a weekend getaway, a cross-country road
            trip, or anything in between, we've got you covered. So why wait?
            Start your next adventure with RentalCampers today and let the
            journey begin!
          </Paragraph>
        </TextWrap>
      </TextContainer>
      <Link to="/catalog">
        <Button>Start</Button>
      </Link>
    </WelcomeContainer>
  );
};

export default Welcome;
