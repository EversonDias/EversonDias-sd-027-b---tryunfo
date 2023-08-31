import styled from 'styled-components';

const Container = styled.form`
display: flex;
flex-direction: column;
gap: 1rem;
width: 300px;
background-color: #2F4550;
padding: 1rem;
border-radius: 1rem;
box-shadow: 6px 8px 20px 7px rgb(0 0 0 / 50%);
color: #F4F4F9;

label p {
  font-size: 1.2rem;
  padding: 0.2rem;
}

input {
  border: none;
  border-radius: 0.2rem;
  padding: 0.7rem;
  font-size: 1rem;
  width: 100%;
}

.containerSelect {
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    width: 7rem;
    text-align: center;
    font-size: 1.2rem;
  }
}

select {
  font-size: 1.2rem;
  border: none;
  border-radius: 0.2rem;
  padding: 0.5rem;
}

button {
  padding: 0.5rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 1rem;
  color: #F4F4F9;
  background-color: green;
  box-shadow: 6px 8px 20px 7px rgb(0 0 0 / 10%);
}
`;

export default Container;
