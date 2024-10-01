import { Container } from "@mui/joy";
import Header from "../components/homepage/header";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Header />
      </Container>
    </>
  );
};

export default Home;
