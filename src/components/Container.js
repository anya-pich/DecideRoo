import React from "react";
import styled from "styled-components";

const Container = (props) => {
  const Div = styled.section`
    max-width: 550px;
    top: 100px;
		padding: 25px;
		background: rgba(196, 196, 196, 0.1);
		border-radius: 5px;
		margin: auto;
		display: flex;
		flex-direction: column;
  `;

  return <Div>{props.children}</Div>;
};

export default Container;
