import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SignUp from "../../components/SignIn";
import SingUp from "../../components/SingUp";

const LogingSignin = () => {
  return (
    <div className=" mt-16 items-center flex justify-center">
      {/* <SignIn />
      <SignUp /> */}
      <div>
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab>sign up</Tab>
            <Tab>Sign in</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SingUp />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default LogingSignin;
