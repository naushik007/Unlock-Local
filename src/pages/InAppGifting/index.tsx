import React from "react";

import {
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

const InAppGiftingPage: React.FC = () => {
  const [group10270value, setGroup10270value] = React.useState<string>("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-gilroy gap-[50px] items-center justify-start mx-auto pb-[390px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group10392_27.svg"
                alt="Group10392"
              />
              <Input
                name="Group10270"
                placeholder="Search"
                value={group10270value}
                onChange={(e) => setGroup10270value(e)}
                className="font-medium p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex md:ml-[0] ml-[60px] md:mt-0 my-0.5 rounded-lg w-2/5 md:w-full"
                suffix={
                  group10270value?.length > 0 ? (
                    <CloseSVG
                      className="mt-4 mb-[15px] cursor-pointer h-5 ml-[35px] mr-4"
                      onClick={() => setGroup10270value("")}
                      fillColor="#bac1ce"
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  ) : (
                    <Img
                      className="mt-4 mb-[15px] cursor-pointer h-5 ml-[35px] mr-4"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  )
                }
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              ></Input>
              <div className="flex sm:flex-col flex-row gap-6 items-start justify-center md:ml-[0] ml-[61px] w-[30%] md:w-full">
                <div className="flex flex-row gap-[11px] items-start justify-between w-[27%] sm:w-full">
                  <Text
                    className="mt-[3px] text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    Products
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_902.svg"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-[9px] items-start justify-center w-[28%] sm:w-full">
                  <Text
                    className="mt-[3px] text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    Resouces
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_902.svg"
                    alt="arrowdown One"
                  />
                </div>
                <Text
                  className="sm:mt-0 mt-[5px] text-base text-gray-900"
                  size="txtGilroyMedium16"
                >
                  Request a demo
                </Text>
              </div>
              <Img
                className="h-14 md:h-auto md:ml-[0] ml-[61px] rounded-[50%] w-14"
                src="images/img_profileimglarg.png"
                alt="ProfileImgLarg"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-[30px] items-start justify-start max-w-[1268px] mx-auto pt-[7px] md:px-5 w-full">
          <div className="flex flex-row gap-6 items-start justify-start w-[17%] md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_arrowleft_bluegray_900.svg"
              alt="arrowleft"
            />
            <Text
              className="mt-0.5 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
              size="txtGilroySemiBold24"
            >
              In-App Gifting
            </Text>
          </div>
          <div className="h-[190px] relative w-full">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 1 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="m-auto w-full"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col gap-5 h-[190px] items-center justify-start mx-2.5 p-4 rounded-md"
                    style={{
                      backgroundImage: "url('images/img_group10523.png')",
                    }}
                  >
                    <div className="flex flex-row md:gap-10 items-start justify-between w-[98%] md:w-full">
                      <Text
                        className="mt-1.5 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                        size="txtGilroyBold32"
                      >
                        50% OFF
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_overflowmenu_1.svg"
                        alt="overflowmenu"
                      />
                    </div>
                    <Text
                      className="leading-[22.00px] mb-[34px] text-sm text-white-A700 w-[95%] sm:w-full"
                      size="txtGilroyRegular14"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Dictum ipsum venenatis sagittis, a sapien, magna lorem
                      vitae. Pretium, risus nisl mi molestie adipiscing.Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Dictum
                      ipsum venenatis sagittis, a sapien, magna lorem vitae.
                      Pretium, risus nisl mi molestie adipiscing.Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Dictum ipsum
                      venenatis sagittis, a sapien, magna lorem vitae. Pretium,
                      risus nisl mi molestie adipiscing.
                    </Text>
                  </div>
                </React.Fragment>
              ))}
              renderDotsItem={({ isActive }) => {
                if (isActive) {
                  return (
                    <div className="inline-block cursor-pointer rounded-[50%] h-[5px] bg-white-A700 w-[5px] relative" />
                  );
                }
                return (
                  <div
                    className="inline-block cursor-pointer rounded-[50%] h-[5px] bg-blue_gray-300 w-[5px] relative"
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            />
            <PagerIndicator
              className="absolute bottom-[11%] flex h-[5px] inset-x-[0] justify-center mx-auto w-[31px]"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-[5px] bg-white-A700 w-[5px] relative"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[5px] bg-blue_gray-300 w-[5px] relative"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block mx-[4.00px]"
              unselectedWrapperCss="inline-block mx-[4.00px]"
            />
          </div>
          <List
            className="flex flex-col gap-4 items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
              <div className="flex flex-row gap-4 items-start justify-start w-[15%] md:w-full">
                <Img
                  className="h-14 md:h-auto rounded-[50%] w-14"
                  src="images/img_profileimglarg_8.png"
                  alt="ProfileImgLarg One"
                />
                <div className="flex flex-col gap-1.5 items-center justify-end pt-[7px] w-[61%]">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-900 text-lg w-auto"
                      size="txtGilroySemiBold18Bluegray900"
                    >
                      Your Cupons
                    </Text>
                  </div>
                  <Text
                    className="text-base text-blue_gray-400"
                    size="txtGilroyRegular16Bluegray400"
                  >
                    @ Lorem ipsum
                  </Text>
                </div>
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-[18px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start pb-[3px] w-[98%] md:w-full">
                <Img
                  className="h-[46px] md:mt-0 mt-1 w-[4%]"
                  src="images/img_grid_46X42.svg"
                  alt="grid"
                />
                <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[23px] w-[24%] md:w-full">
                  <div className="flex flex-col h-[29px] md:h-auto items-start justify-start w-[284px]">
                    <Text
                      className="text-blue_gray-900 text-lg w-auto"
                      size="txtGilroySemiBold18Bluegray900"
                    >
                      Gift 1
                    </Text>
                  </div>
                  <Text
                    className="text-base text-blue_gray-400"
                    size="txtGilroyRegular16Bluegray400"
                  >
                    Lorem ipsum
                  </Text>
                </div>
                <Img
                  className="h-6 md:ml-[0] ml-[860px] md:mt-0 mt-4 w-6"
                  src="images/img_share_24X24.svg"
                  alt="share"
                />
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-[18px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start pb-[3px] w-[98%] md:w-full">
                <Img
                  className="h-[46px] md:mt-0 mt-1 w-[4%]"
                  src="images/img_grid_46X42.svg"
                  alt="grid One"
                />
                <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[23px] w-[24%] md:w-full">
                  <div className="flex flex-col h-[29px] md:h-auto items-start justify-start w-[284px]">
                    <Text
                      className="text-blue_gray-900 text-lg w-auto"
                      size="txtGilroySemiBold18Bluegray900"
                    >
                      Gift 2
                    </Text>
                  </div>
                  <Text
                    className="text-base text-blue_gray-400"
                    size="txtGilroyRegular16Bluegray400"
                  >
                    Lorem ipsum
                  </Text>
                </div>
                <Img
                  className="h-6 md:ml-[0] ml-[860px] md:mt-0 mt-4 w-6"
                  src="images/img_share_24X24.svg"
                  alt="share One"
                />
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default InAppGiftingPage;
