import React, { useState } from 'react'
import { etherscan, eye, cube, shareWhite } from '@assets'

export const BuyNftDetail = () => {
  const [selectedOption, setSelectOption] = useState('Description')
  const handleSelectedOption = (e: any) => {
    setSelectOption(e.target.name)
  }

  return (
    <div className="bg-white-text-dark py-5 ">
      <div className="d-flex flex-column align-items-center">
        <div className="col-11 col-xl-8  px-1 ">
          <ul className="d-flex flex-wrap justify-content-between">
            <li>
              <button
                onClick={handleSelectedOption}
                name="Description"
                className={`fw-bold m-2 mt-3 fs-4 ${
                  selectedOption == 'Description' ? 'text-purple' : 'text-muted'
                }`}
              >
                Description
              </button>
            </li>
            <li>
              <button
                onClick={handleSelectedOption}
                name="Properties"
                className={`fw-bold m-2 mt-3 fs-4 ${
                  selectedOption == 'Properties' ? 'text-purple' : 'text-muted'
                }`}
              >
                Properties
              </button>
            </li>
            <li>
              <button
                onClick={handleSelectedOption}
                name="Price"
                className={`fw-bold m-2 mt-3 fs-4 ${
                  selectedOption == 'Price' ? 'text-purple' : 'text-muted'
                }`}
              >
                Price history
              </button>
            </li>
            <li>
              <button
                onClick={handleSelectedOption}
                name="Trade"
                className={`fw-bold m-2  mt-3 fs-4 ${
                  selectedOption == 'Trade' ? 'text-purple' : 'text-muted'
                }`}
              >
                Trade history
              </button>
            </li>
          </ul>
        </div>
        {selectedOption == 'Description' && (
          <>
            <div className="col-11 col-xl-8 mt-4  bg-secondary-light p-4 overflow-hidden ">
              <p className="text-dark p-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                semper tincidunt dignissim. Phasellus iaculis consectetur purus
                vel ornare. Vivamus aliquam orci eget leo imperdiet varius. In
                lacinia non est vitae rhoncus. Etiam rhoncus, libero eu interdum
                convallis, massa ligula mattis sem, volutpat malesuada dolor
                dolor sit amet lectus. Proin non iaculis dui, quis consequat
                dui. Curabitur lorem arcu, blandit quis nunc eget, fringilla
                pharetra augue. Mauris nulla dolor, laoreet id metus sed,
                molestie hendrerit urna. Nunc dictum tincidunt scelerisque.
                Proin lobortis augue eget lectus gravida, eget tincidunt quam
                consectetur. Donec elementum est ligula, at sodales dui
                dignissim in. Donec luctus ante sit amet tellus accumsan, ut
                mollis odio gravida. In finibus libero sagittis elit consectetur
                aliquam. Phasellus convallis finibus metus vitae vulputate.
                Quisque orci turpis, sodales at eleifend sit amet, aliquet a
                eros. Nulla vel tempus est. Vestibulum posuere mattis eleifend.
                Vivamus bibendum gravida augue. Consectetur aliquam. Phasellus
                convallis finibus metus vitae vulputate. Quisque orci turpis,
                sodales at eleifend sit amet, aliquet a eros. Nulla vel tempus
                est. Vestibulum posuere mattis eleifend. Vivamus bibendum
                gravida augue
              </p>
            </div>

            <div className="col-11 col-xl-8 justify-content-between d-flex flex-wrap row mt-4">
              <div className="col-12  col-xl-4 p-5  m-1  bg-secondary-light">
                <span className="text-purple fs-5 fw-bold">Details</span>
                <div className="d-flex align-items-center mt-3">
                  <img className="buy_detail_icon me-2 p" src={etherscan.src} />
                  <a href="#" className="text-dark fw-bold">
                    View on Etherscan
                  </a>
                </div>

                <div className="d-flex align-items-center mt-2">
                  <img className="buy_detail_icon me-2" src={eye.src} />
                  <a href="#" className="text-dark fw-bold">
                    View metadata
                  </a>
                </div>

                <div className="d-flex align-items-center mt-2">
                  <img className="buy_detail_icon me-2 p-1" src={cube.src} />
                  <a href="#" className="text-dark fw-bold">
                    View on IPFS
                  </a>
                </div>
              </div>

              <div className="col m-1 text-dark bg-secondary-light p-5">
                <span className="text- fs-5 fw-bold text-purple">Tags</span>
                <div className="mt-2 d-flex flex-wrap">
                  <button className="nft_tag text-dark m-1 p-1 fw-bold  bg-white  text-center rounded-5 border">
                    Tag 1
                  </button>
                  <button className="nft_tag text-dark m-1 p-1 fw-bold  bg-white  text-center rounded-5 border">
                    Tag 2
                  </button>
                  <button className="nft_tag text-dark m-1 p-1 fw-bold  bg-white  text-center rounded-5 border">
                    Tag 3
                  </button>
                  <button className="nft_tag text-dark m-1 p-1 fw-bold  bg-white  text-center rounded-5 border">
                    Tag 4
                  </button>
                  <button className="nft_tag text-dark m-1 p-1 fw-bold  bg-white  text-center rounded-5 border">
                    Tag 5
                  </button>
                  <button className="nft_tag text-dark m-1 p-1 fw-bold  bg-white  text-center rounded-5 border">
                    Tag 6
                  </button>
                </div>
                <button className="btn-main fs-5 fw-normal d-flex mt-4">
                  {' '}
                  <img
                    className="buy_detail_icon me-1"
                    src={shareWhite.src}
                    alt="share"
                  />{' '}
                  Share
                </button>
              </div>
            </div>
          </>
        )}

        {selectedOption == 'Properties' && (
          <div className="col-11 col-xl-8 mt-4  bg-secondary-light p-4 overflow-hidden ">
            <p className="text-dark">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
        )}
        {selectedOption == 'Price' && (
          <div className="col-11 col-xl-8 mt-4  bg-secondary-light p-4 overflow-hidden ">
            <p className="text-dark">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?"
            </p>
          </div>
        )}
        {selectedOption == 'Trade' && (
          <div className="col-11 col-xl-8 mt-4  bg-secondary-light p-4 overflow-hidden ">
            <p className="text-dark">
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right to find fault
              with a man who chooses to enjoy a pleasure that has no annoying
              consequences, or one who avoids a pain that produces no resultant
              pleasure?"
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
