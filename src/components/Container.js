import React from "react";
import styled from "styled-components";

const Container = (props) => {
  const Div = styled.section`
    max-width: 550px;
    top: 100px;
		padding: 25px 10px;
		background: rgba(0,0,0,0.3);
		border-radius: 5px;
		margin: auto;
		display: flex;
		flex-direction: column;
  `;

  return <Div>{props.children}</Div>;
};

export default Container;
