import React, { useEffect, useState } from 'react'

const Africa = () => {
  const [news, setNews] = useState([]);

  const getNews = () => {
    fetch("https://newsapi.org/v2/everything?q=Africa&sortBy=popularity&apiKey=812d705ef3594e45b3825f3b1e8ae013")
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

  return (
    <div className='bg-slate-200'>
    <div className="bg-slate-200 ml-6 flex flex-wrap">
    <div className='mt-10'>
      {news.map((data, index) => (
        <div key={index} className= " main max-w-sm rounded overflow-hidden shadow-lg mr-4" data-aos="fade-up-left">
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

export default Africa;