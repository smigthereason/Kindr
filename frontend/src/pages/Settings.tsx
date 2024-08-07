import Account from "@/components/Account";
import Dashnav from "@/components/Dashnav";
import Password from "@/components/Password";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const Settings = () => {
  return (
    <div className="flex flex-col gap-8 ">
      <Dashnav title="Settings" />
      <Tabs defaultValue="account" className="w-full">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Account />{" "}
        </TabsContent>
        <TabsContent value="password">
          <Password />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;