import { useCallback, useContext, useMemo, useState } from "react";
import { Box, Button, Center, Flex, ScaleFade, useDisclosure } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ServiceDetails } from "../../components/ServiceDetails";
import { TbLock, TbLockOpen } from "react-icons/tb";
import MainContext from "../../context";
import { AddServiceModal } from "../../components/modals/AddServiceModal";

export function Services() {
  const { admin, services } = useContext(MainContext);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [edit, setEdit] = useState(false);

  const renderServices = useMemo(
    () =>
      services.map((value, index) => (
        <ServiceDetails
          key={index}
          img={value.image}
          title={value.title}
          description={value.description}
          pos={index}
          edit={edit}
        />
      )),
    [services, edit],
  );
  return (
    <>
      <Header />
      <Box w="100%" mt="100px" pos="relative" textAlign="center">
        {admin && (
          <>
            <ScaleFade in={isOpen}>
              <AddServiceModal isOpen={isOpen} onClose={onClose} />
            </ScaleFade>
            <Center margin="50px 0" gap={2} mt="150px">
              <Button
                variant="outline"
                color="aqua.primary"
                borderColor="aqua.primary"
                rightIcon={edit ? <TbLockOpen /> : <TbLock />}
                onClick={() => setEdit(!edit)}>
                Editar
              </Button>
              {edit && (
                <Button variant="outline" color="aqua.primary" borderColor="aqua.primary" onClick={onOpen}>
                  Novo Serviço
                </Button>
              )}
            </Center>
          </>
        )}
        <Flex direction="column" align="center" w="100%" mt={!admin ? "150px" : 0}>
          {renderServices}
          <Footer />
        </Flex>
      </Box>
    </>
  );
}
