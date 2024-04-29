import React from "react";

import { Img, Input, Slider, Text } from "components";

import { CloseSVG } from "../../assets/images";

const CouponCodeGeneratorPage: React.FC = () => {
  const [searchvalue, setSearchvalue] = React.useState<string>("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy gap-[55px] items-center justify-start mx-auto pb-[97px] w-full">
        <header className="bg-white-A700 flex flex-row items-center justify-center md:px-5 py-[22px] shadow-bs w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[89%]">
            <div className="header-row ">
              <Img
                className="h-[35px] md:h-auto object-cover"
                src="images/img_header_logo_ff000000.png"
                alt="headerlogo_one"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <Input
              name="search"
              placeholder="Search"
              value={searchvalue}
              onChange={(e) => setSearchvalue(e)}
              className="font-medium p-0 placeholder:text-blue_gray-200 sm:hidden text-base text-left w-full"
              wrapClassName="border border-blue_gray-300 border-solid flex sm:hidden md:ml-[0] ml-[50px] w-2/5 md:w-full"
              prefix={
                <Img
                  className="cursor-pointer h-5 sm:hidden my-auto"
                  src="images/img_search_outline.svg"
                  alt="search/Outline"
                />
              }
              suffix={
                <CloseSVG
                  fillColor="#bac1ce"
                  className="cursor-pointer h-5 sm:hidden my-auto"
                  onClick={() => setSearchvalue("")}
                  style={{
                    visibility: searchvalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={20}
                  width={20}
                  viewBox="0 0 20 20"
                />
              }
              shape="round"
              color="white_A700"
              size="lg"
              variant="fill"
            ></Input>
            <div className="flex flex-row sm:hidden items-center justify-center md:ml-[0] ml-[50px] w-[28%] md:w-full">
              <div className="flex flex-row gap-[19px] items-center justify-center pl-[5px] py-[5px] w-[31%]">
                <Text
                  className="text-base text-center text-gray-900"
                  size="txtGilroyMedium16"
                >
                  Orders
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrow_down.svg"
                  alt="arrowdown_one"
                />
              </div>
              <Text
                className="text-base text-center text-gray-900"
                size="txtGilroyMedium16"
              >
                Categories
              </Text>
              <Text
                className="text-base text-center text-gray-900"
                size="txtGilroyMedium16"
              >
                More
              </Text>
            </div>
            <Img
              className="h-6 sm:hidden md:ml-[0] ml-[25px] w-6"
              src="images/img_arrow_down.svg"
              alt="arrowdown_three"
            />
            <Img
              className="h-14 sm:hidden md:ml-[0] ml-[50px] w-14"
              src="images/img_shopping_cart_outline.svg"
              alt="shoppingcart"
            />
          </div>
        </header>
        <div className="flex flex-row font-chivo items-center justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[76px] items-center justify-start w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-row h-[300px] items-center justify-start p-8 sm:px-5 rounded-[16px] w-full"
              style={{ backgroundImage: "url('images/img_group_6514.png')" }}
            >
              <div className="flex flex-col gap-8 items-start justify-start ml-[18px] w-[37%]">
                <div className="bg-white-A700 flex flex-row items-center justify-center p-[17px] rounded-[17px] w-[46%] md:w-full">
                  <Img
                    className="h-[45px] md:h-auto object-cover w-[92%]"
                    src="images/img_image_62.png"
                    alt="imagesixtytwo"
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[11px] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 w-[98%] sm:w-full"
                  size="txtChivoBold50"
                >
                  Get extra 20% off on Gadgets
                </Text>
              </div>
            </div>
            <div className="flex flex-col font-gilroy gap-[34px] items-center justify-start w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                  size="txtGilroySemiBold32"
                >
                  Deals Of The Day
                </Text>
                <Img
                  className="h-10 w-10"
                  src="images/img_arrow_circle_right_solid.svg"
                  alt="image"
                />
              </div>
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 2 },
                  1050: { items: 4 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="flex flex-row w-full"
                items={[...Array(12)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="bg-white-A700 flex flex-col items-center justify-center mx-2.5 py-[19px] rounded-lg shadow-bs1">
                      <div className="flex flex-col items-center justify-start mt-1 w-full">
                        <div className="flex flex-col gap-5 items-start justify-start w-[84%] md:w-full">
                          <Img
                            className="h-[194px] md:h-auto object-cover w-full"
                            src="images/img_pngwing_1_3.png"
                            alt="pngwingone_one"
                          />
                          <Text
                            className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                            size="txtGilroyMedium24"
                          >
                            Flat 20% OFF
                          </Text>
                        </div>
                        <div className="bg-blue-50 border-blue-A700 border-dashed border-y flex flex-row items-center justify-between p-[11px] w-full">
                          <Text
                            className="ml-3 text-blue-A700 text-lg"
                            size="txtGilroySemiBold18"
                          >
                            32JU80P
                          </Text>
                          <Img
                            className="h-5 mr-3 w-5"
                            src="images/img_user.svg"
                            alt="user_one"
                          />
                        </div>
                        <Text
                          className="ml-6 md:ml-[0] text-base text-blue_gray-400"
                          size="txtGilroyMedium16Bluegray400"
                        >
                          12,Nov,2021
                        </Text>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponCodeGeneratorPage;
