import { Button, Center, Title } from "@mantine/core";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Center>
        <Title size={100} className="mt-32">
          ⚠️ 404: Not Found!
        </Title>
      </Center>

      <Center>
        <Link to={"/"}>
          <Button size="xl" className="mt-10">
            Go Home
          </Button>
        </Link>
      </Center>
    </>
  );
};

export default NotFound;
