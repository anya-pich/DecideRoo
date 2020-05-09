import React from "react";
import styled from "styled-components";
import { AiOutlineEye } from "react-icons/ai";

const DilemmaMini = (props) => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-bottom: 10px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  `;

  const Title = styled.h1`
    font-family: Open Sans;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 15px;
  `;

  const Links = styled.a`
    float: right;
    color: rgba(255, 255, 255, 0.5);
    &:hover {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
    }
  `;

  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Links href={"/dilemmas/" + props._id}>
        <AiOutlineEye />
      </Links>
      <p></p>
      <div></div>
    </Wrapper>
  );
};

export default DilemmaMini;
