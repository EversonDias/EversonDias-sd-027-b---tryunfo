import styled from 'styled-components';

const Container = styled.main`
.containerForm {
  display: flex;
  justify-content: space-around;
}
background-color: #B8DBD9;
@media (max-width: 600px) {
  .containerForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 0.5rem;
    width: 100%;
  }
  .containerFilter {
    display: flex;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;
    background-color: #2F4550;
    input, select{
      border: none;
      padding: 1rem;
      border-radius: 0.5rem;
    }

  }
  .containerListCard {
    display: grid;
    gap: 1rem;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
    background-color: #2F4550;

    .containerMain {
      width: 170px;
      height: 300px;
    .container {
      padding: 0.5rem;
      width: 170px;
      height: 300px;

      .superTrunfo {
        width: 100%;
        text-align: center;
        font-size: 0.7rem;
      }

      .nameCard {
        font-size: 1rem;
        padding: 0.5rem;
        text-align: center;
      }

      .containerAttr {
        gap: 0.5rem;
        padding: 0.5rem;
        font-size: 1rem;
        border-radius: 0.5rem;

        p {
          span {
            margin-right: 0.5rem;
            font-size: 1rem;
          }
        }
      }

      .containerImg {
        height: 100px;
        text-align: center;
        border-radius: 0.5rem;

        img {
          width: 60%;
        }
      }
    }
  }

    .miniCard {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      button {
        background-color: red;
        color: #F4F4F9;
        border: none;
        padding: 0.5rem;
        width: 100%;
        margin-top: 0.5rem;
        font-weight: 600;
        border-radius: 0.5rem;
      }
    }
}
}
header {
  padding: 0.5rem;
  background-color: #586F7C;
  color: #F4F4F9;
  text-align: center;
  margin-bottom: 1rem;
}
.containerFilter {
    display: flex;
    justify-content: center;
    padding: 1rem;
    margin-top: 1rem;
    gap: 1rem;
    background-color: #2F4550;
    input, select{
      border: none;
      padding: 1rem;
      border-radius: 0.5rem;
    }
  }

  .containerListCard {
    display: grid;
    gap: 1rem;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 1rem;
    background-color: #2F4550;

    .containerMain {
      width: 250px;
      height: 400px;
    .container {
      padding: 1rem;
      width: 250px;
      height: 400px;

      .superTrunfo {
        width: 100%;
        text-align: center;
        font-size: 1rem;
      }

      .nameCard {
        font-size: 1rem;
        padding: 1rem;
        text-align: center;
      }

      .containerAttr {
        gap: 1rem;
        padding: 1rem;
        font-size: 1rem;
        border-radius: 1rem;

        p {
          span {
            margin-right: 1rem;
            font-size: 1rem;
          }
        }
      }

      .containerImg {
        height: 150px;
        text-align: center;
        border-radius: 1rem;

        img {
          width: 70%;
        }
      }
    }
  }

    .miniCard {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      button {
        background-color: red;
        color: #F4F4F9;
        border: none;
        padding: 0.5rem;
        width: 100%;
        margin-top: 0.5rem;
        font-weight: 600;
        border-radius: 0.5rem;
      }
    }
}
  
`;

export default Container;
