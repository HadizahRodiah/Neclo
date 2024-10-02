import React, { useEffect, useState } from 'react';

const Sport = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5); // Number of articles per page

  const getNews = () => {
    fetch("https://newsapi.org/v2/everything?q=Sport&sortBy=popularity&apiKey=812d705ef3594e45b3825f3b1e8ae013")
      .then(res => res.json())
      .then(data => {
        setNews(data.articles); // Update state with the articles array
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getNews();
  }, []);

  // Calculate current articles based on current page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = news.slice(indexOfFirstArticle, indexOfLastArticle);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total pages
  const totalPages = Math.ceil(news.length / articlesPerPage);

  return (
    <div className='bg-slate-200'>
      <div className="ml-6 flex flex-wrap bg-slate-200">
        <div className='mt-10  flex flex-col md:flex-row'>
          {currentArticles.map((data, index) => (
            <div key={index} className="main max-w-sm rounded bg-white overflow-hidden shadow-lg m-4" data-aos="fade-up-left">
              <img className="w-full" src={data.urlToImage} alt={data.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{data.title}</div>
                <p className="text-gray-700 text-base">{data.description}</p>
                <span className='font-bold text-black'> Click on the link to know more</span>
                <a href={data.url} className="text-blue-700 text-base">{data.url}</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-2 px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sport;
