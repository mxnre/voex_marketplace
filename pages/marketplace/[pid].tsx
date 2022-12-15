import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import { BaseLayout } from '@ui'
import { useRouter } from 'next/router'
import ShowNftInfo from '@voex/components/ShowNftInfo'
import PreviewModal from '@voex/components/modal/PreviewModal'
import {
  HeartIcon,
  MenuAlt2Icon,
  ChevronDownIcon,
  RefreshIcon,
  DotsVerticalIcon,
  UserGroupIcon,
  ViewGridIcon,
  EyeIcon,
  DuplicateIcon,
  ChartBarIcon,
} from '@heroicons/react/solid'
// import { audioImg, docImg, nftImg, user, videoImg } from '@assets'
import { ShareIcon } from '@heroicons/react/outline'
import TailwindAccordion from '@ui/elements/TailwindAccordion'
import TailwindAccordionItem from '@ui/elements/TailwindAccordionItem'
import Button from '@ui/elements/Button'
import TailwindTable from '@ui/elements/TailwindTable'
import ETH from '@ui/elements/icons/ETH'

const Test = () => {
  const router = useRouter()
  const { pid } = router.query
  const [nft, setNft] = useState<any>('')
  useEffect(() => {
    let item: any = localStorage.getItem('selected_item') || ''
    if (item) {
      item = JSON.parse(item)
      const metadata = JSON.parse(item.metadata)
      var fileType = 'image'
      metadata?.type !== undefined
        ? (fileType = metadata?.type?.split('/')[0])
        : (fileType = 'image')

      setNft(item)
    }
  }, [pid])

  const [test, setTest] = useState('first')
  const [columns, setColumns] = useState<any[]>([])
  const [showPreviewModal, setShowPreviewModal] = useState(false)

  useEffect(() => {
    setTimeout(() => setTest('second'), 10000)
  }, [])

  useEffect(() => {
    setColumns([
      {
        title: 'Unit Price',
        data: 'unit_price',
        className: 'bg-slate-600/40',
        render: (row: any) => {
          return (
            <div className="flex items-center justify-start">
              <div className="px-[1px]">
                <ETH />
              </div>
              <div>{row.unit_price}</div>
            </div>
          )
        },
      },
      {
        title: 'USD Unit Price',
        className: 'bg-slate-600/40',
        data: 'usd_unit_price',
      },
      {
        title: 'Quantity',
        className: 'bg-slate-600/40',
        data: 'quantity',
      },
      {
        title: 'Expiration',
        className: 'bg-slate-600/40',
        data: 'expiration',
      },
      { title: 'From', className: 'bg-slate-600/40', data: 'from' },
      {
        title: '',
        data: 'from',
        className: 'bg-slate-600/40',
        render: (rowData: any) => {
          return (
            <button
              className="border-[1px] px-4 rounded-md ml-4"
              onClick={() => {
                alert(rowData.unit_price)
              }}
            >
              Buy
            </button>
          )
        },
      },
    ])
  }, [])

  const [selectedDetail, setSelectedDetail] = useState<any>({
    about: false,
    detail: false,
    price: false,
    activity_dtail: false,
  })

  const handleView = () => {
    setShowPreviewModal(true)
  }

  return (
    <BaseLayout>
      <div className="container">
        <div className="body flex md:flex-wrap">
          <div className="left-panel w-full md:w-5/12 p-6">
            <div
              className="rounded-lg border-[1px] border-gray-500 bg-transparent min-h-[350px] flex flex-col"
              onClick={handleView}
            >
              <div className="header rounded-t-lg flex items-center justify-between p-2 text-sm">
                <div className="">
                  <HeartIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="flex items-center">
                  <div className="mr-2">178</div>
                  <div className="">
                    <HeartIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <ShowNftInfo
                img={nft.image}
                type={nft.itemType}
                preview={true}
                className="w-full"
              />
            </div>

            <TailwindAccordion className="my-6">
              <TailwindAccordionItem
                collapsable={false}
                title={
                  <div className="flex items-center justify-start">
                    <MenuAlt2Icon className="w-4 h-4 mr-2" aria-hidden="true" />
                    <div className="font-bold">Description</div>
                  </div>
                }
              >
                <div className="bg-slate-500/40 p-4">
                  <div className="font-bold text-lg">By ElsaMajimbo</div>
                  <div className="py-2"></div>
                  <p>
                    This piece merges one of my iconic quotes with a sculptural
                    wood framing, which includes my glorious head in it!
                  </p>
                  <div className="py-2"></div>
                  <p>
                    IM NOT LATE I ALLOW EVERYONE ELSE TO ARRIVE FIRST describes
                    my view towards arrival time. I can't help being late, so I
                    might as well embrace it.
                  </p>
                </div>
              </TailwindAccordionItem>
              <TailwindAccordionItem
                collapsable={true}
                title={
                  <div className="flex items-center justify-center">
                    <MenuAlt2Icon className="w-4 h-4 mr-2" aria-hidden="true" />
                    <div className="font-bold">
                      About Majimbo's Manifestations
                    </div>
                  </div>
                }
              >
                <div className="p-2">
                  <div className="p-2">
                    All the collectors of my iconic quotes will be gauranteed
                    early acces to my second book, "Elsa's Fabulous Quotes",
                    releasing 2023. Wow, 15 time chess champion and soon to be 2
                    time published author... this just might be too much Icon
                    for one person.
                  </div>
                  <div className="flex p-2">
                    <button className="border-gray-500 border-[1px] p-2 rounded-tl-lg rounded-bl-lg min-w-[60px] border-r-0 hover:shadow">
                      Ok
                    </button>
                    <button className="border-gray-500 border-[1px] p-2 rounded-tr-lg rounded-br-lg min-w-[60px] hover:shadow-xl">
                      Cancel
                    </button>
                  </div>
                </div>
              </TailwindAccordionItem>
              <TailwindAccordionItem
                title={
                  <div className="flex items-center justify-center">
                    <MenuAlt2Icon className="w-4 h-4 mr-2" aria-hidden="true" />
                    <div className="font-bold">Details</div>
                  </div>
                }
              >
                <div className="p-3">
                  <div className="">
                    <div>Contract Address</div>
                    <div>0x495f947276749ce646f68ac8c248420045cb7b5e</div>
                  </div>
                  <div className="">
                    <div>Token Id</div>
                    <div>0x495f947276749ce646f68ac8c248420045cb7b5e</div>
                  </div>
                  <div className="">
                    <div>Token Standard</div>
                    <div>ERC-1155</div>
                  </div>
                </div>
              </TailwindAccordionItem>
            </TailwindAccordion>
          </div>
          <div className="right-panel w-full md:w-7/12 p-6">
            <div className="">
              <div className="flex items-center justify-between">
                <div className="">Majimbo's Manifestations</div>
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 flex items-center justify-center hover:bg-slate-600/40 border-[1px] first:border-r-0 first:rounded-tl-md first:rounded-bl-md">
                    <RefreshIcon className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center hover:bg-slate-600/40 border-[1px]">
                    <ShareIcon className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center hover:bg-slate-600/40 border-[1px] last:border-l-0 last:rounded-tr-md last:rounded-br-md">
                    <DotsVerticalIcon className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="text-3xl font-bold py-2">I'M NOT LATE</div>
              <div className="flex items-center justify-start py-2">
                <div className="flex items-center justify-center mr-4">
                  <UserGroupIcon className="w-4 h-4" aria-hidden="true" />
                  <div className="mx-2">5</div>
                  <div className="">owners</div>
                </div>
                <div className="flex items-center justify-center mr-4">
                  <ViewGridIcon className="w-4 h-4" aria-hidden="true" />
                  <div className="mx-2">220</div>
                  <div className="">total</div>
                </div>
                <div className="flex items-center justify-center mr-4">
                  <EyeIcon className="w-4 h-4" aria-hidden="true" />
                  <div className="mx-2">298</div>
                  <div className="">views</div>
                </div>
                <div className="flex items-center justify-center mr-4">
                  <HeartIcon className="w-4 h-4" aria-hidden="true" />
                  <div className="mx-2">15</div>
                  <div className="">favorites</div>
                </div>
              </div>
            </div>
            <TailwindAccordion>
              <TailwindAccordionItem
                collapsable={false}
                title={
                  <div className="p-3">
                    <div className="pb-2">
                      Sale ends August 8, 2022 at 2:00am GMT+10
                    </div>
                    <div className="flex items-center justify-start">
                      <div className="pr-4">
                        <div className="text-xl font-bold">01</div>
                        <div className="">Days</div>
                      </div>
                      <div className="pr-4">
                        <div className="text-xl font-bold">21</div>
                        <div className="">Hours</div>
                      </div>
                      <div className="pr-4">
                        <div className="text-xl font-bold">57</div>
                        <div className="">Minutes</div>
                      </div>
                      <div className="pr-4">
                        <div className="text-xl font-bold">58</div>
                        <div className="">Seconds</div>
                      </div>
                    </div>
                  </div>
                }
              >
                <div className=" bg-slate-600/40 p-4">
                  <div className="">Current Price</div>
                  <div className="flex items-center justify-start py-4">
                    <div className="flex items-center justify-center bg-slate-600 rounded">
                      <DuplicateIcon className="w-4 h-4" aria-hidden="true" />
                      <div>x199</div>
                    </div>
                    <div className="px-2">ETH</div>
                    <div className="text-2xl font-bold px-2">0.99</div>
                    <div className="">($150.21)</div>
                  </div>
                  <div className="flex items-center justify-start">
                    <div className="bg-blue-600 rounded-lg px-4 py-2 text-white mr-4">
                      Buy Now
                    </div>
                    <div className="border-[1px] border-gray-500 bg-transparent rounded-lg px-4 py-2 text-white">
                      Make offer
                    </div>
                  </div>
                </div>
              </TailwindAccordionItem>
            </TailwindAccordion>
            <TailwindAccordion className="mt-8">
              <TailwindAccordionItem
                title={
                  <div className="flex items-center">
                    <ChartBarIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                    <div className="font-bold">Price History</div>
                  </div>
                }
              >
                <div className="flex items-center p-2">
                  <div className="flex items-center justify-start p-2">
                    <DropdownButton />
                  </div>
                  <div className="">
                    <div>All time avg.price</div>
                    <div>
                      &#9776;<span>0.09</span>
                    </div>
                  </div>
                </div>
              </TailwindAccordionItem>
            </TailwindAccordion>
            <TailwindAccordion className={'mt-8'}>
              <TailwindAccordionItem
                title={
                  <div className="flex items-center">
                    <ChartBarIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                    <div className="font-bold">Listings</div>
                  </div>
                }
              >
                <div className="w-full flex items-center justify-start">
                  <div className="m-4 w-full">
                    <TailwindTable
                      className="max-h-[200px]"
                      options={{ noBorder: false, headerClass: 'bg-[#0f032d]' }}
                      columns={columns}
                      data={[
                        {
                          unit_price: '0.02ETH',
                          usd_unit_price: '$150.21',
                          quantity: '199',
                          expiration: '1 day',
                          from: 'ElsaMajimicon',
                        },
                        {
                          unit_price: '0.12ETH',
                          usd_unit_price: '$150.21',
                          quantity: '199',
                          expiration: '1 day',
                          from: 'ElsaMajimicon',
                        },
                        {
                          unit_price: '0.09ETH',
                          usd_unit_price: '$150.21',
                          quantity: '199',
                          expiration: '1 day',
                          from: 'ElsaMajimicon',
                        },
                        {
                          unit_price: '0.09ETH',
                          usd_unit_price: '$150.21',
                          quantity: '199',
                          expiration: '1 day',
                          from: 'ElsaMajimicon',
                        },
                        {
                          unit_price: '0.09ETH',
                          usd_unit_price: '$150.21',
                          quantity: '199',
                          expiration: '1 day',
                          from: 'ElsaMajimicon',
                        },
                        {
                          unit_price: '0.09ETH',
                          usd_unit_price: '$150.21',
                          quantity: '199',
                          expiration: '1 day',
                          from: 'ElsaMajimicon',
                        },
                        {
                          unit_price: '0.09ETH',
                          usd_unit_price: '$150.21',
                          quantity: '199',
                          expiration: '1 day',
                          from: 'ElsaMajimicon',
                        },
                      ]}
                    />
                  </div>
                </div>
              </TailwindAccordionItem>
            </TailwindAccordion>
          </div>
        </div>
        <TailwindAccordion className="m-6">
          <TailwindAccordionItem
            title={
              <div className="flex justify-start items-center">
                <HeartIcon className="w-4 h-4 mr-2" />
                <div>Item Activity</div>
              </div>
            }
          >
            <TailwindAccordion className="m-4">
              <TailwindAccordionItem title={'Filter'}>
                <div className="p-2 border-gray-500 w-full">
                  <input type="checkbox" />
                  <span className="inline-block pl-2">Sales</span>
                </div>
                <div className="border-t-[1px] p-2 border-gray-500 w-full">
                  <input type="checkbox" />
                  <span className="inline-block pl-2">Listing</span>
                </div>
                <div className="border-t-[1px] p-2 border-gray-500 w-full rounded-b-lg">
                  <input type="checkbox" />
                  <span className="inline-block pl-2">Offering</span>
                </div>
              </TailwindAccordionItem>
            </TailwindAccordion>

            <div className="flex justify-start items-center m-4">
              <Button title="Sales x" className="mr-2 px-3 bg-transparent/10" />
              <Button
                title="Transers x"
                className="mr-2 px-3 bg-transparent/10"
              />
              <div>Clear All</div>
            </div>

            {/* <div className="border-t-[1px] table-wrp max-h-[200px] border-gray-500 block overflow-y-auto">
              <table className="w-full">
                <thead className="sticky top-0 w-full bg-[#0f032d]">
                  <tr className="w-full border-b-[1px] border-gray-500">
                    <th className="py-2 px-4">Unit Price</th>
                    <th className="pr-2">USD Unit Price</th>
                    <th className="pr-2">Quantity</th>
                    <th className="pr-2">Expiration</th>
                    <th className="pr-2">From</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr className=" bg-slate-600/40 border-b-[1px] border-gray-500">
                    <td className="pl-4 py-2">
                      <div className="flex items-center justify-start">
                        <div className="px-[1px]">
                          <svg
                            className="w-4 h-4 text-[#626890]"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="ethereum"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path
                              fill="currentColor"
                              d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                            ></path>
                          </svg>
                        </div>
                        <div>0.09ETH</div>
                      </div>
                    </td>
                    <td>$150.21</td>
                    <td>199</td>
                    <td>1 day</td>
                    <td className="flex items-center justify-start py-2">
                      <div>ElsaMajim</div>
                      <div>icon</div>
                      <div className="border-[1px] px-4 rounded-md ml-4">
                        <button>Buy</button>
                      </div>
                    </td>
                  </tr>
                  <tr className=" bg-slate-600/40 border-b-[1px] border-gray-500">
                    <td className="pl-4 py-2">
                      <div className="flex items-center justify-start">
                        <div className="px-[1px]">
                          <svg
                            className="w-4 h-4 text-[#626890]"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="ethereum"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path
                              fill="currentColor"
                              d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                            ></path>
                          </svg>
                        </div>
                        <div>0.09ETH</div>
                      </div>
                    </td>
                    <td>$150.21</td>
                    <td>199</td>
                    <td>1 day</td>
                    <td className="flex items-center justify-start py-2">
                      <div>ElsaMajim</div>
                      <div>icon</div>
                      <div className="border-[1px] px-4 rounded-md ml-4">
                        <button>Buy</button>
                      </div>
                    </td>
                  </tr>
                  <tr className=" bg-slate-600/40 border-b-[1px] border-gray-500">
                    <td className="pl-4 py-2">
                      <div className="flex items-center justify-start">
                        <div className="px-[1px]">
                          <svg
                            className="w-4 h-4 text-[#626890]"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="ethereum"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path
                              fill="currentColor"
                              d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                            ></path>
                          </svg>
                        </div>
                        <div>0.09ETH</div>
                      </div>
                    </td>
                    <td>$150.21</td>
                    <td>199</td>
                    <td>1 day</td>
                    <td className="flex items-center justify-start py-2">
                      <div>ElsaMajim</div>
                      <div>icon</div>
                      <div className="border-[1px] px-4 rounded-md ml-4">
                        <button>Buy</button>
                      </div>
                    </td>
                  </tr>
                  <tr className=" bg-slate-600/40 border-b-[1px] border-gray-500">
                    <td className="pl-4 py-2">
                      <div className="flex items-center justify-start">
                        <div className="px-[1px]">
                          <svg
                            className="w-4 h-4 text-[#626890]"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="ethereum"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path
                              fill="currentColor"
                              d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                            ></path>
                          </svg>
                        </div>
                        <div>0.09ETH</div>
                      </div>
                    </td>
                    <td>$150.21</td>
                    <td>199</td>
                    <td>1 day</td>
                    <td className="flex items-center justify-start py-2">
                      <div>ElsaMajim</div>
                      <div>icon</div>
                      <div className="border-[1px] px-4 rounded-md ml-4">
                        <button>Buy</button>
                      </div>
                    </td>
                  </tr>
                  <tr className=" bg-slate-600/40 border-b-[1px] border-gray-500">
                    <td className="pl-4 py-2">
                      <div className="flex items-center justify-start">
                        <div className="px-[1px]">
                          <svg
                            className="w-4 h-4 text-[#626890]"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="ethereum"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path
                              fill="currentColor"
                              d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                            ></path>
                          </svg>
                        </div>
                        <div>0.09ETH</div>
                      </div>
                    </td>
                    <td>$150.21</td>
                    <td>199</td>
                    <td>1 day</td>
                    <td className="flex items-center justify-start py-2">
                      <div>ElsaMajim</div>
                      <div>icon</div>
                      <div className="border-[1px] px-4 rounded-md ml-4">
                        <button>Buy</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> */}

            <div className="m-4">
              <TailwindTable
                className="max-h-[200px]"
                options={{ noBorder: false, headerClass: 'bg-[#0f032d]' }}
                columns={columns}
                data={[
                  {
                    unit_price: '0.02ETH',
                    usd_unit_price: '$150.21',
                    quantity: '199',
                    expiration: '1 day',
                    from: 'ElsaMajimicon',
                  },
                  {
                    unit_price: '0.12ETH',
                    usd_unit_price: '$150.21',
                    quantity: '199',
                    expiration: '1 day',
                    from: 'ElsaMajimicon',
                  },
                  {
                    unit_price: '0.09ETH',
                    usd_unit_price: '$150.21',
                    quantity: '199',
                    expiration: '1 day',
                    from: 'ElsaMajimicon',
                  },
                  {
                    unit_price: '0.09ETH',
                    usd_unit_price: '$150.21',
                    quantity: '199',
                    expiration: '1 day',
                    from: 'ElsaMajimicon',
                  },
                  {
                    unit_price: '0.09ETH',
                    usd_unit_price: '$150.21',
                    quantity: '199',
                    expiration: '1 day',
                    from: 'ElsaMajimicon',
                  },
                  {
                    unit_price: '0.09ETH',
                    usd_unit_price: '$150.21',
                    quantity: '199',
                    expiration: '1 day',
                    from: 'ElsaMajimicon',
                  },
                  {
                    unit_price: '0.09ETH',
                    usd_unit_price: '$150.21',
                    quantity: '199',
                    expiration: '1 day',
                    from: 'ElsaMajimicon',
                  },
                ]}
              />
            </div>
          </TailwindAccordionItem>
        </TailwindAccordion>
        <TailwindAccordion className="m-4">
          <TailwindAccordionItem
            title={
              <div className="flex items-center">
                <ChartBarIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                <div className="font-bold">More collection items</div>
              </div>
            }
          >
            <div className="flex justify-start items-center ">
              <div className="rounded-lg bg-white max-w-sm m-4 shadow-card">
                <a href="#!">
                  <img
                    className="rounded-t-lg"
                    src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                    alt=""
                  />
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Card title
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>

            <div className="border-white/40 border-t-[1px] flex justify-center items-center">
              <Button
                title="More collection"
                className="w-[200px] m-4 p-2 text-center"
              />
            </div>
          </TailwindAccordionItem>
        </TailwindAccordion>
        <TailwindTable
          className="max-h-[200px]"
          options={{ noBorder: false, headerClass: 'bg-[#0f032d]' }}
          columns={columns}
          data={[
            {
              unit_price: '0.02ETH',
              usd_unit_price: '$150.21',
              quantity: '199',
              expiration: '1 day',
              from: 'ElsaMajimicon',
            },
            {
              unit_price: '0.12ETH',
              usd_unit_price: '$150.21',
              quantity: '199',
              expiration: '1 day',
              from: 'ElsaMajimicon',
            },
            {
              unit_price: '0.09ETH',
              usd_unit_price: '$150.21',
              quantity: '199',
              expiration: '1 day',
              from: 'ElsaMajimicon',
            },
            {
              unit_price: '0.09ETH',
              usd_unit_price: '$150.21',
              quantity: '199',
              expiration: '1 day',
              from: 'ElsaMajimicon',
            },
            {
              unit_price: '0.09ETH',
              usd_unit_price: '$150.21',
              quantity: '199',
              expiration: '1 day',
              from: 'ElsaMajimicon',
            },
            {
              unit_price: '0.09ETH',
              usd_unit_price: '$150.21',
              quantity: '199',
              expiration: '1 day',
              from: 'ElsaMajimicon',
            },
            {
              unit_price: '0.09ETH',
              usd_unit_price: '$150.21',
              quantity: '199',
              expiration: '1 day',
              from: 'ElsaMajimicon',
            },
          ]}
        />
      </div>
      <PreviewModal
        open={showPreviewModal}
        onClose={() => setShowPreviewModal(false)}
        className="w-[70%] h-[70%]"
      >
        <ShowNftInfo
          img={nft.image}
          type={nft.itemType}
          preview={true}
          className="w-full"
          autoPlay={true}
        />
      </PreviewModal>
    </BaseLayout>
  )
}

export default Test

const DropdownButton = () => {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <BackWrapper onClick={handleClose}>
      <div className="relative w-40">
        <div
          className={clsx(
            'flex items-center justify-between border-[1px] border-gray-500 rounded-lg p-2',
            open && 'rounded-b-none',
          )}
          onClick={() => setOpen(!open)}
        >
          <div>All time</div>
          <div>
            <ChevronDownIcon
              className={clsx(
                'w-4 h-4 transition-all ',
                open ? 'rotate-180' : 'rotate-0',
              )}
              aria-hidden="true"
            />
          </div>
        </div>
        <div
          className={clsx(
            'absolute w-40 flex-col items-start justify-center bg-slate-600/40',
            open ? 'flex' : 'hidden',
          )}
        >
          <div className="w-full p-2 border-[1px] border-b-0 border-gray-500">
            Last 7 days
          </div>
          <div className="w-full p-2 border-[1px] border-b-0 border-gray-500">
            Last 14 days
          </div>
          <div className="w-full p-2 border-[1px] border-b-0 border-gray-500">
            Last 30 days
          </div>
          <div className="w-full p-2 border-[1px] border-b-0 border-gray-500">
            Last 60 days
          </div>
          <div className="w-full p-2 border-[1px] border-b-0 border-gray-500">
            Last 90 days
          </div>
          <div className="w-full p-2 border-[1px] border-b-0 border-gray-500">
            Last year
          </div>
          <div className="w-full p-2 border-[1px] border-b-0 border-gray-500 last:border-b-[1px] last:rounded-b-lg">
            All time
          </div>
        </div>
      </div>
    </BackWrapper>
  )
}

const BackWrapper = ({
  children,
  onClick,
}: {
  children: ReactNode
  onClick: () => void
}) => {
  useEffect(() => {
    window.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [onClick])

  return (
    <div className="w-full md:w-fit" onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  )
}
