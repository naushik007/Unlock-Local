import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";

const NavigationMenuDrawer = (props) => {
  return (
    <Drawer placement="left" className="!w-[22%]" {...props}>
      <div>
        <div className="flex flex-col font-gilroy items-start justify-start mx-auto sm:w-full md:w-full">
          <Sidebar className="!sticky !w-[310px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="bg-gray-50_01 flex flex-col md:gap-10 gap-[375px] h-[1080px] md:h-auto items-start justify-start p-6 sm:px-5 w-[310px]">
              <div className="flex flex-col gap-8 h-[478px] md:h-auto items-start justify-start w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-full">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_81.png"
                    alt="EightyOne"
                  />
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <Text
                      className="text-base text-blue_gray-900 w-full"
                      size="txtGilroySemiBold16Bluegray900"
                    >
                      Ashfak Sayem
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-xs w-full"
                      size="txtGilroyMedium12"
                    >
                      ashfaksayem@gmail.com
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <div className="bg-blue-A700 flex flex-row gap-3 items-center justify-start p-3 rounded-lg w-full">
                    <div className="flex flex-1 flex-row font-gilroy gap-1.5 items-center justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="flex-1 text-base text-white-A700 w-auto"
                        size="txtGilroySemiBold16WhiteA700"
                      >
                        Calendar
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-inter font-semibold h-5 leading-[normal] rounded text-[10px] text-center tracking-[-0.10px] w-5"
                      shape="round"
                      color="light_blue_100"
                      size="xs"
                      variant="fill"
                    >
                      2
                    </Button>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start p-3 rounded-lg w-full">
                    <div className="flex flex-1 flex-row font-gilroy gap-1.5 items-center justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_iconoutline.svg"
                        alt="IconOutline"
                      />
                      <Text
                        className="flex-1 text-base text-blue_gray-700_01 w-auto"
                        size="txtGilroySemiBold16Bluegray70001"
                      >
                        Rewards
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-inter font-semibold h-5 leading-[normal] rounded text-[10px] text-center tracking-[-0.10px] w-5"
                      shape="round"
                      color="red_200"
                      size="xs"
                      variant="fill"
                    >
                      2
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start p-3 rounded-lg w-full">
                    <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_location.svg"
                        alt="location"
                      />
                      <Text
                        className="flex-1 text-base text-blue_gray-700_01 w-auto"
                        size="txtGilroySemiBold16Bluegray70001"
                      >
                        Address
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start p-3 rounded-lg w-full">
                    <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_calendar_24X24.svg"
                        alt="calendar Two"
                      />
                      <Text
                        className="flex-1 text-base text-blue_gray-700_01 w-auto"
                        size="txtGilroySemiBold16Bluegray70001"
                      >
                        Payments Methods
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start p-3 rounded-lg w-full">
                    <div className="flex flex-1 flex-row font-gilroy gap-1.5 items-center justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings_2.svg"
                        alt="settings"
                      />
                      <Text
                        className="flex-1 text-base text-blue_gray-700_01 w-auto"
                        size="txtGilroySemiBold16Bluegray70001"
                      >
                        Offers
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-inter font-semibold h-5 leading-[normal] rounded text-[10px] text-center tracking-[-0.10px] w-5"
                      shape="round"
                      color="green_A100"
                      size="xs"
                      variant="fill"
                    >
                      2
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start p-3 rounded-lg w-full">
                    <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user_2.svg"
                        alt="user"
                      />
                      <Text
                        className="flex-1 text-base text-blue_gray-700_01 w-auto"
                        size="txtGilroySemiBold16Bluegray70001"
                      >
                        Refer a Friend
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start p-3 rounded-lg w-full">
                    <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_call.svg"
                        alt="call"
                      />
                      <a
                        href="javascript:"
                        className="flex-1 text-base text-blue_gray-700_01 w-auto"
                      >
                        <Text size="txtGilroySemiBold16Bluegray70001">
                          Support
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Line className="bg-blue_gray-100_6c h-0.5 rounded-[1px] w-full" />
                  <div className="flex flex-col items-center justify-start p-3 rounded-lg w-full">
                    <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_question_1.svg"
                        alt="question"
                      />
                      <Text
                        className="flex-1 text-base text-blue_gray-700_01 w-auto"
                        size="txtGilroySemiBold16Bluegray70001"
                      >
                        Colour Scheme
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 flex flex-row gap-1 items-center justify-center p-1 rounded-[20px] w-full">
                  <div className="bg-white-A700 flex flex-1 flex-row gap-2 items-center justify-center pl-2 pr-4 py-1 rounded-[16px] shadow-bs2 w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_brightness.svg"
                      alt="brightness"
                    />
                    <Text
                      className="text-blue_gray-700_01 text-sm w-auto"
                      size="txtGilroySemiBold14"
                    >
                      Light
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row gap-2 items-center justify-center pl-2 pr-4 py-1 rounded-[16px] w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_uiiconmoonli.svg"
                      alt="UIiconmoonli"
                    />
                    <Text
                      className="text-blue_gray-700_01 text-sm w-auto"
                      size="txtGilroySemiBold14"
                    >
                      Dark
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </Sidebar>
        </div>
      </div>
    </Drawer>
  );
};

export default NavigationMenuDrawer;
