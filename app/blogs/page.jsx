import React from 'react';
import Image from 'next/image';
import { fetchArticles } from '@/utils/api';
import Link from 'next/link';

export const metadata = {
  title: 'TruckWys Blog — Fleet Profitability Insights for South African Transport Operators',
  description: 'Expert insights, practical guides, and AI-powered strategies to boost fleet profitability for South African transport operators. Cost management, freight rates, fuel savings, and more.',
  openGraph: {
    title: 'TruckWys Blog — Fleet Intelligence for SA Transport',
    description: 'Expert insights and practical guides to transform fleet profitability for South African transport operators.',
    url: 'https://truckwys.com/blogs',
    siteName: 'TruckWys',
    type: 'website',
  },
};

const page = async () => {
  const articles = await fetchArticles();

  return (
    <div>
      <header className="pt-[187px] bg-linear-to-b from-blue-100 via-blue-50 relative md:pt-[238px] pb-[50px] lg:pb-[203px] px-5 md:px-[60px]">
        <div className="w-full relative z-10 mx-auto text-center">
          <h1 className="font-medium tracking-[-4%] leading-[120%] text-5xl lg:text-[68px] text-[#000]">Fleet Intelligence Blog</h1>
          <p className="text-[#000] text-left lg:text-center mx-auto mt-[18px] md:mt-6 mb-[26px] md:mb-8 w-full lg:w-[70%] font-normal text-base md:text-lg">
            Expert insights, practical guides, and AI-powered strategies to boost fleet profitability for South African transport operators.
          </p>
        </div>
      </header>

      <section className="px-5 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles?.data?.map((item, idx) => {
            return (
              <div key={idx} className="pb-8 mb-[35px] overflow-hidden">
                {item?.cover?.url ? (
                  item.cover.url.endsWith('.svg') ? (
                    <img
                      alt={item.title || 'Cover'}
                      src={item.cover.url}
                      className="h-[300px] rounded-lg object-cover w-full"
                    />
                  ) : (
                    <Image
                      alt={item.title || 'Cover'}
                      width={600}
                      height={300}
                      src={item.cover.url}
                      className="h-[300px] rounded-lg object-cover w-full"
                    />
                  )
                ) : (
                  <div className="h-[300px] rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 w-full flex items-center justify-center">
                    <span className="text-white text-lg font-medium">TruckWys</span>
                  </div>
                )}
                <div className="mt-8 px-6">
                  <div className="flex items-center gap-3 mb-3">
                    <p className="text-black font-normal text-sm">
                      {new Date(item.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    {item.readingTime && (
                      <span className="text-gray-500 text-sm">· {item.readingTime} read</span>
                    )}
                  </div>
                  <h3 title={item.title} className="text-[#18181B] font-medium text-2xl mt-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">{item.description}</p>
                  <Link
                    href={`/blogs/${item?.slug ?? item?.id}`}
                    className="px-6 bg-blue-600 hover:bg-blue-700 text-white mt-6 py-2 inline-block text-base font-medium rounded-lg duration-200 cursor-pointer"
                  >
                    Read now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default page;
