import React, { useState } from "react";
import AppLayout from "../layout/appLayout";
import "../css/application.css";
import Like from "../assets/svg/like.svg";
import Share from "../assets/svg/share.svg";
import Bookmark from "../assets/svg/bookmark.svg";
import ArrowLeft from "../assets/svg/arrow-left.svg";
import { data } from "../datas/listData";

function Home() {
  const [toggleTab, setToggleTab] = useState(false);

  return (
    <AppLayout>
      <section className="w-full flex article-container">
        <div className="flex flex-1 bg-black text-white">
          <div className="ml-40 px-20 flex flex-col items-center justify-center">
            <h1 className="font-bold text-3xl">WRITE AN ARTICLE</h1>
            <span className="text-gray-500 text-sm mt-5">
              Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim
              neque. Aenean enim sem.
            </span>
            <span className="rounded-full py-2 px-12 bg-yellow-400 text-base font-bold mt-5 text-black article-write-button">
              WRITE
            </span>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 flex ">
          <div className="mr-40 px-20 flex flex-col items-center justify-center">
            <h1 className="font-bold text-3xl">WRITE AN ARTICLE</h1>
            <span className="text-gray-500 text-sm mt-5">
              Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim
              neque. Aenean enim sem.
            </span>
            <span className="rounded-full py-2 px-12 bg-black text-base font-bold mt-5 text-white article-ask-button">
              Ask
            </span>
          </div>
        </div>
      </section>

      <section className="w-full flex trending-container">
        <div className="flex flex-col container m-9 p-10">
          <div className="flex flex-row content-center">
            <h1 className="text-3xl font-bold ml-10 flex-1  text-left mt-1">
              TRENDING
            </h1>
            <span className="rounded-full py-3 px-9 bg-gray-100 text-base font-bold">
              VIEW ALL
            </span>
          </div>
          <div className="flex p-5 trending-item">
            {data.map((e, index) => {
              return (
                <div className="shadow-box shadow-2xl border ml-5 trending-item">
                  <div className="m-6">
                    <img
                      class="card-img-top img-fluid card-img"
                      src="https://grabian.s3.amazonaws.com/banners/1604083585922.jpg"
                    ></img>
                  </div>
                  <h3 className="font-bold mx-6 text-left">
                    SONY PLAYSTATION 5
                  </h3>
                  <p className="text-gray-400 mt-4 text-xs mx-6 text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                  <div className="flex mx-6 mt-10">
                    <div className="items-center p-2 flex">
                      <div className="like-container ">
                        <img className="ml-3" src={Like}></img>
                        <span className="ml-2 text-white text-sm text-center">
                          22
                        </span>
                      </div>
                      <img className="ml-5" src={Share}></img>
                      <div className="rounded-full py-2 px-2 bg-gray-light ml-5 flex shadow-lg">
                        <img src={Bookmark}></img>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <span className="text-3xl text-black font-bold">31</span>
                      <span className="text-sm font-bold text-gray-400">
                        Oct
                      </span>
                    </div>
                  </div>
                  <span className="separation my-6 mx-6"></span>
                  <div className="mx-6 my-5 flex items-center">
                    <img
                      src="https://grabian.s3.amazonaws.com/profilePic/1619007280265.jpg"
                      className="w-12 h-12 rounded-full"
                    ></img>
                    <span className="ml-4 text-sm">Matts Wilson</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full flex recent-discussion-container bg-gray-100">
        <div className="flex flex-col container m-9 p-10">
          <div className="flex flex-row content-center">
            <h1 className="text-3xl font-bold ml-10 flex-1  text-left mt-1">
              RECENT DISCUSSIONS
            </h1>
            <span className="rounded-full py-3 px-9 bg-white text-base font-bold">
              VIEW ALL
            </span>
          </div>
          <div className="flex p-5">
            <div className="flex-1 flex flex-col bg-white m-2 p-7 rounded-lg">
              <figure className="flex content center">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://grabian.s3.amazonaws.com/profilePic/1616950578077.jpg"
                ></img>
                <span className="ml-2 mt-3 text-sm flex align-center font-bold">
                  Matts Wilson
                </span>
              </figure>
              <div className="flex mt-2">
                <h2 className="cursor font-bold m-0 mt-1 mt-4 text-black">
                  TESTING QUESTION ANONYMOUSLY
                </h2>
              </div>
              <div className="flex">
                <p className="text-gray-400 mt-3 text-xs text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              <div className="flex  mt-5">
                <div className="items-center p-2 flex">
                  <div className="like-container ">
                    <img className="ml-3" src={Like}></img>
                    <span className="ml-2 text-white text-sm text-center">
                      0
                    </span>
                  </div>
                  <img className="ml-5" src={Share}></img>
                  <div className="rounded-full py-2 px-2 bg-gray-light ml-5 flex shadow-lg">
                    <img src={Bookmark}></img>
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <span className="text-3xl text-black font-bold">16</span>
                  <span className="text-sm font-bold text-gray-400">May</span>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col bg-white m-2 p-7 rounded-lg">
              <figure className="flex content center">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://grabian.s3.amazonaws.com/profilePic/1616329931886.jpeg"
                ></img>
                <span className="ml-2 mt-3 text-sm flex align-center font-bold">
                  Sinan Ea
                </span>
              </figure>
              <div className="flex mt-2">
                <h2 className="cursor font-bold m-0 mt-1 mt-4 text-black">
                  Testing the question section
                </h2>
              </div>
              <div className="flex">
                <p className="text-gray-400 mt-3 text-xs text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              <div className="flex  mt-5">
                <div className="items-center p-2 flex">
                  <div className="like-container ">
                    <img className="ml-3" src={Like}></img>
                    <span className="ml-2 text-white text-sm text-center">
                      1
                    </span>
                  </div>
                  <img className="ml-5" src={Share}></img>
                  <div className="rounded-full py-2 px-2 bg-gray-light ml-5 flex shadow-lg">
                    <img src={Bookmark}></img>
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <span className="text-3xl text-black font-bold">30</span>
                  <span className="text-sm font-bold text-gray-400">April</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex recent-discussion-container">
        <div className="flex flex-col container m-9 p-10">
          <div className="flex flex-row content-center">
            <h1 className="text-3xl font-bold ml-10 flex-1  text-left mt-1">
              WHAT ARE YOU LOOKING FOR?
            </h1>
          </div>
          <div className="flex flex-row content-center m-9 article-tab-container">
            <span className="rounded-full py-3 px-12 bg-gray-100 text-base font-bold">
              ARTICLE
            </span>
            <span className="rounded-full py-3 px-12 bg-gray-100 text-base font-bold ml-10">
              Q&#38;A
            </span>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

export default Home;
