import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../App.css";
import PublicHeader from './PublicHeader';

const TopImg = styled.div`
  background-image: url("https://images.unsplash.com/photo-1591465001581-2c57a07a7a30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  width: 100%;
  background-position: center;
  background-size: cover;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-contents: space-between;
  align-items: center;
  padding: 3rem 0;
`;
const H2 = styled.h2`
  color: white;
  text-shadow: 2px 2px 10px #000000;
  margin: 2rem;
  text-align: center;
  width: 70vw;
`;
const SignUpTop = styled.button`
  width: 50vw;
  border: none;
  color: white;
  background-color: black;
  padding: 1rem;
  font-size: 1.3rem;
  border-radius: 2rem;
  box-shadow: 2px 2px 10px #393d3f;
  text-align: center;
  &:hover {
    color: gray;
  }
`;
const InfoDiv = styled.div`
  display: flex;
  margin: 1rem;
`;
const H4 = styled.h4`
  text-align: center;
  margin: 1rem auto;
`;
const InfoCard = styled.div`
  padding: 1rem;
`;
const InfoPic = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
`;
const SignUpBottom = styled.button`
  width: 50vw;
  border: none;
  color: white;
  background-color: black;
  padding: 1rem;
  font-size: 1.3rem;
  border-radius: 2rem;
  display: block;
  margin: 3rem auto;
  text-align: center;
  &:hover {
    color: gray;
  }
`;

function Home() {
  return (
    <div>
      <div>
        <PublicHeader />
      </div>
      <TopImg aria-label="bag of spices">
        <H2>Compare your prices to others in your area.</H2>
        <SignUpTop as={Link} to="/signup">
          Sign Up
        </SignUpTop>
      </TopImg>
      <InfoDiv>
        <InfoCard>
          <InfoPic
            src="https://images.unsplash.com/photo-1510601253256-028ebb2757e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
            alt="open air market stand of fresh vegetables"
          />
          <H4>Sign Up</H4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </InfoCard>
        <InfoCard>
          <InfoPic
            src="https://images.unsplash.com/photo-1529924615584-9e893fa1bf4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="eggplant flowers"
          />
          <H4>Get Informed</H4>
          <p>
            Egestas fringilla phasellus faucibus scelerisque eleifend. Nibh
            praesent tristique magna sit amet purus. Nibh tortor id aliquet
            lectus proin nibh. Ut ornare lectus sit amet est placerat in
            egestas. Nunc pulvinar sapien et ligula. Amet facilisis magna etiam
            tempor orci eu lobortis elementum nibh. Ultrices in iaculis nunc sed
            augue lacus viverra vitae congue. Id ornare arcu odio ut sem nulla.
          </p>
        </InfoCard>
        <InfoCard>
          <InfoPic
            src="https://images.unsplash.com/photo-1604343932374-fb174a4ee6a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="eggplant and thai peppers close up"
          />
          <H4>Stay Competitive</H4>
          <p>
            A diam sollicitudin tempor id eu. Nunc vel risus commodo viverra
            maecenas accumsan lacus vel. Etiam dignissim diam quis enim.
            Tristique et egestas quis ipsum suspendisse ultrices gravida dictum.
            Cum sociis natoque penatibus et magnis dis parturient montes
            nascetur. Tincidunt eget nullam non nisi est sit amet. Massa enim
            nec dui nunc mattis enim ut tellus elementum.
          </p>
        </InfoCard>
      </InfoDiv>
      <SignUpBottom as={Link} to="/signup">
        Sign Up Today
      </SignUpBottom>
    </div>
  );
}

export default Home;
