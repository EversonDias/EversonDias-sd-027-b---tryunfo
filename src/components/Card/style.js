import styled from 'styled-components';

const Container = styled.div`
.containerMain {
  box-shadow: 6px 8px 20px 7px rgb(0 0 0 / 50%);
  border-radius: 1rem;
  width: 300px;
  height: 500px;
  .container {
  padding: 1rem;
  background: #586F7C;
  border-radius: 1rem;
  box-shadow: inset 6px 8px 20px 7px rgb(0 0 0 / 50%);
  width: 300px;
  height: 500px;

  .superTrunfo {
    width: 100%;
    font-size: 1.5rem;
    color: yellow;
  }

  .nameCard {
    font-size: 1.5rem;
    padding: 0.5rem;
    text-align: center;
    color: #F4F4F9;
  }

  .containerAttr {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #B8DBD9;
    padding: 1rem;
    font-size: 1.2rem;
    border-radius: 1rem;
    box-shadow: inset 6px 8px 20px 7px rgb(0 0 0 / 50%);

    p {
      span {
        margin-right: 1rem;
        font-size: 1.2rem;
      }
    }
  }

  .containerImg {
    background: #B8DBD9;
    box-shadow: inset 6px 8px 20px 7px rgb(0 0 0 / 50%);
    border-radius: 1rem;
    height: 200px;
    overflow: hidden;
    text-align: center;

    img {
      object-fit: cover;
      width: 150px;
    }
  }
  }

  .Raro {
    background: radial-gradient(at center center, rgb(70, 22, 108), rgb(13, 15, 140));
  }

  .Muito {
    background: 
    radial-gradient(at center top, rgb(144, 66, 7), rgb(253, 186, 116), rgb(127, 14, 46));
  }
}

`;

export default Container;
