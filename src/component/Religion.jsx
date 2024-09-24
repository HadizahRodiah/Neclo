import React, { useEffect, useState } from 'react'

const Religion = () => {
  const [news, setNews] = useState([]);

  const getNews = () => {
    fetch("https://newsapi.org/v2/everything?q=Religion&sortBy=popularity&apiKey=812d705ef3594e45b3825f3b1e8ae013")
      .then(res => res.json())
      .then(data => {
        setNews(data.articles); // Update state with the articles array
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getNews();
  }, []);

  console.log(news);
AOS.init()
  return (
    <div className='bg-slate-200'>
    <div className=" ml-6 flex flex-wrap bg-slate-200">
    <div className='mt-10'>
      {news.map((data, index) => (
        <div key={index} className=" main max-w-sm rounded bg-white overflow-hidden shadow-lg m-4 hover:shadow-2xl" data-aos="fade-up-left">
          <img className="w-full" src={data.urlToImage} alt={data.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{data.title}</div>
            <p className="text-gray-700 text-base">{data.description}</p>
            <span className='font-bold text-black'> click on the link to know more</span>
            <a href={data.url} className="text-blue-700 text-base">{data.url}</a>
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default Religion;