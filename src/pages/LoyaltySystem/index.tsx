import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const LoyaltySystemPage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const [searchvalue, setSearchvalue] = React.useState<string>("");
  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-6 my-[13px] w-6"
          src="images/img_dashboard_outline_ff424c5d.svg"
          alt="dashboard_one"
        />
      ),
      label: "Dashboard",
    },
    {
      icon: (
        <Img
          className="h-6 my-[13px] w-6"
          src="images/img_coins_outline.svg"
          alt="coinsoutline"
        />
      ),
      label: "Rewards Points",
    },
    {
      icon: (
        <Img
          className="h-6 my-[13px] w-6"
          src="images/img_users_alt_outline.svg"
          alt="usersalt_one"
        />
      ),
      label: "Friend List",
    },
    {
      icon: (
        <Img
          className="h-6 my-[13px] w-6"
          src="images/img_apps_outline.svg"
          alt="appsoutline_one"
        />
      ),
      label: "Categories",
    },
    {
      icon: (
        <Img
          className="h-6 my-[13px] w-6"
          src="images/img_edit_outline.svg"
          alt="editoutline_one"
        />
      ),
      label: "Items",
    },
    {
      icon: (
        <Img
          className="h-6 my-[13px] w-6"
          src="images/img_shopping_bag_outline.svg"
          alt="shoppingbag_one"
        />
      ),
      label: "Orders",
    },
    {
      icon: (
        <Img
          className="h-6 my-[13px] w-6"
          src="images/img_ticket_outline.svg"
          alt="ticketoutline"
        />
      ),
      label: "Coupons",
    },
    {
      icon: (
        <Img
          className="h-6 my-[13px] w-6"
          src="images/img_bell_outline.svg"
          alt="belloutline"
        />
      ),
      label: "Notifications",
    },
    {
      icon: (
        <Img
          className="h-6 my-[13px] w-6"
          src="images/img_setting_outline.svg"
          alt="settingoutline"
        />
      ),
      label: "Settings",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 flex flex-row font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <header className="bg-white-A700 flex flex-row items-center justify-center p-[22px] md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[93%]">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[53%] md:w-full">
                <Img
                  className="h-[41px] md:h-auto object-cover"
                  src="images/img_frame_1.png"
                  alt="image"
                />
                <Input
                  name="search"
                  placeholder="Search Items, Customer etc"
                  value={searchvalue}
                  onChange={(e) => setSearchvalue(e)}
                  className="font-medium p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-300 border-solid flex sm:w-full"
                  prefix={
                    <Img
                      className="mt-auto mb-px cursor-pointer h-5"
                      src="images/img_search_outline.svg"
                      alt="search/Outline"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#bac1ce"
                      className="cursor-pointer h-5 my-auto"
                      onClick={() => setSearchvalue("")}
                      style={{
                        visibility:
                          searchvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  }
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-row gap-6 items-center justify-center w-[11%] md:w-full">
                <Button
                  className="border border-blue_gray-100 border-solid flex h-14 items-center justify-center w-14"
                  shape="circle"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-8"
                    src="images/img_bell_outline.svg"
                    alt="belloutline_one"
                  />
                </Button>
                <Img
                  className="h-14 md:h-auto object-cover w-14"
                  src="images/img_play.png"
                  alt="play_one"
                />
              </div>
            </div>
          </header>
          <div className="flex md:flex-col flex-row gap-8 items-start justify-start md:px-5 w-[83%] md:w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[300px] bg-white-A700 flex h-screen md:hidden items-start justify-start overflow-auto p-[5px] top-[0]"
            >
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "8px",
                    gap: "8px",
                    color: "#424c5d",
                    fontWeight: 600,
                    fontSize: "16px",
                    [`&:hover, &.ps-active`]: { color: "#0061ff" },
                  },
                }}
                className="flex flex-col items-center justify-start mt-[35px] w-[87%]"
              >
                <div className="flex flex-col gap-[0.19px] items-center justify-start w-[61%] md:w-full">
                  {sideBarMenu?.map((menu, i) => (
                    <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                      {menu.label}
                    </MenuItem>
                  ))}
                </div>
                <MenuItem
                  icon={
                    <Img
                      className="h-6 my-[13px] w-6"
                      src="images/img_question_circle_outline.svg"
                      alt="image_one"
                    />
                  }
                >
                  <Text>Help</Text>
                </MenuItem>
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col items-center justify-start md:mt-0 mt-8 w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-base text-gray-900_01"
                  size="txtGilroyMedium16Gray90001"
                >
                  Rewards Points
                </Text>
                <div className="flex flex-col gap-8 items-center justify-start w-3/4 md:w-full">
                  <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
                    <div className="bg-white-A700 flex md:flex-1 flex-row items-center justify-between p-[30px] sm:px-5 rounded-md w-[73%] md:w-full">
                      <div className="flex flex-col gap-6 items-start justify-center ml-5">
                        <Text
                          className="text-blue_gray-400 text-lg"
                          size="txtGilroyMedium18"
                        >
                          Total Reward Points
                        </Text>
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900"
                          size="txtGilroyBold36"
                        >
                          $500
                        </Text>
                      </div>
                      <Img
                        className="h-[100px] md:h-auto mr-5 object-cover w-[100px]"
                        src="images/img_image_2022_05_1.png"
                        alt="image202205one"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col gap-4 items-center justify-start w-[26%] md:w-full">
                      <Button
                        className="cursor-pointer font-medium text-center text-lg w-[162px]"
                        shape="round"
                        color="blue_A700"
                        size="md"
                        variant="fill"
                      >
                        Withdraw
                      </Button>
                      <Button
                        className="cursor-pointer font-medium text-center text-lg w-[163px]"
                        shape="round"
                        color="blue_A700"
                        size="md"
                        variant="outline"
                      >
                        Deposit
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-[27px] items-start justify-start p-8 sm:px-5 rounded-md w-full">
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18Bluegray900"
                    >
                      Recent Transactions
                    </Text>
                    <List
                      className="flex flex-col font-inter gap-6 w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-col gap-[25px] items-start justify-start my-0 w-full">
                        <Text
                          className="text-base text-blue-A700"
                          size="txtInterMedium16"
                        >
                          Today
                        </Text>
                        <List
                          className="flex flex-col font-gilroy gap-1.5 pb-3 w-full"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between my-0 w-full">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyRegular18"
                            >
                              Earned Reward
                            </Text>
                            <Text
                              className="text-green-600 text-lg text-right"
                              size="txtGilroySemiBold18Green600"
                            >
                              +$10
                            </Text>
                          </div>
                          <Line className="self-center h-px bg-blue_gray-100 w-full" />
                          <div className="flex flex-1 flex-col gap-[11px] items-center justify-start my-0 w-full">
                            <Line className="bg-blue_gray-100 h-px w-full" />
                            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                              <Text
                                className="text-blue_gray-900 text-lg"
                                size="txtGilroyRegular18"
                              >
                                Earned Reward
                              </Text>
                              <Text
                                className="text-green-600 text-lg text-right"
                                size="txtGilroySemiBold18Green600"
                              >
                                +$10
                              </Text>
                            </div>
                            <Line className="bg-blue_gray-100 h-px w-full" />
                          </div>
                          <Line className="self-center h-px bg-blue_gray-100 w-full" />
                          <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between my-0 w-full">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyRegular18"
                            >
                              Transferred To Account
                            </Text>
                            <Text
                              className="text-lg text-red-700 text-right"
                              size="txtGilroySemiBold18Red700"
                            >
                              -$5
                            </Text>
                          </div>
                        </List>
                      </div>
                      <div className="flex flex-1 flex-col gap-[26px] items-start justify-start my-0 w-full">
                        <Text
                          className="text-base text-blue-A700"
                          size="txtInterMedium16"
                        >
                          21/09/2021
                        </Text>
                        <List
                          className="flex flex-col font-gilroy gap-[5.5px] pb-3 w-full"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between my-0 w-full">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyRegular18"
                            >
                              Earned Reward
                            </Text>
                            <Text
                              className="text-green-600 text-lg text-right"
                              size="txtGilroySemiBold18Green600"
                            >
                              +$10
                            </Text>
                          </div>
                          <Line className="self-center h-px bg-blue_gray-100 w-full" />
                          <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between my-0 w-full">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyRegular18"
                            >
                              Earned Reward
                            </Text>
                            <Text
                              className="text-green-600 text-lg text-right"
                              size="txtGilroySemiBold18Green600"
                            >
                              +$10
                            </Text>
                          </div>
                          <Line className="self-center h-px bg-blue_gray-100 w-full" />
                          <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between my-0 w-full">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyRegular18"
                            >
                              Transferred To Account
                            </Text>
                            <Text
                              className="text-lg text-red-700 text-right"
                              size="txtGilroySemiBold18Red700"
                            >
                              -$5
                            </Text>
                          </div>
                        </List>
                      </div>
                      <div className="flex flex-1 flex-col gap-[26px] items-start justify-start my-0 w-full">
                        <Text
                          className="text-base text-blue-A700"
                          size="txtInterMedium16"
                        >
                          03/09/2021
                        </Text>
                        <List
                          className="flex flex-col font-gilroy gap-[5.5px] pb-3 w-full"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between my-0 w-full">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyRegular18"
                            >
                              Earned Reward
                            </Text>
                            <Text
                              className="text-green-600 text-lg text-right"
                              size="txtGilroySemiBold18Green600"
                            >
                              +$10
                            </Text>
                          </div>
                          <Line className="self-center h-px bg-blue_gray-100 w-full" />
                          <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between my-0 w-full">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyRegular18"
                            >
                              Earned Reward
                            </Text>
                            <Text
                              className="text-green-600 text-lg text-right"
                              size="txtGilroySemiBold18Green600"
                            >
                              +$10
                            </Text>
                          </div>
                          <Line className="self-center h-px bg-blue_gray-100 w-full" />
                          <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between my-0 w-full">
                            <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyRegular18"
                            >
                              Transferred To Account
                            </Text>
                            <Text
                              className="text-lg text-red-700 text-right"
                              size="txtGilroySemiBold18Red700"
                            >
                              -$5
                            </Text>
                          </div>
                        </List>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoyaltySystemPage;
