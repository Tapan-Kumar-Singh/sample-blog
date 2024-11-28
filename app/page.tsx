"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Navigation from "../components/Navigation";
import HeroBaseCard from "@/components/home/HeroBaseCard";
import HeroMiniCard from "@/components/home/HeroMinicard";
import HeroMicroCard from "@/components/home/HeroMicroCard";
import PrimeNewsCard from "@/components/home/PrimeNewsCard";
import RecentPostPrimeCard from "@/components/home/RecentPostPrimeCard";

export default function Home() {
  const [posts, setPosts] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://newsapi.org/v2/everything", {
          params: {
            q: "tesla",
            from: "2024-11-15",
            sortBy: "publishedAt",
            language: "en",
            apiKey: "8b3f08bb031947aa9894600557b5c61d",
          },
        });
        setPosts(response.data);
      } catch (error) {
        setError("Failed to fetch articles");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Navigation />

      <div className="flex w-10/12 mx-auto mt-5">
        <div className="w-1/3">
          <HeroBaseCard
            imageUrl={posts.articles[0].urlToImage}
            title={posts.articles[0].title}
            description={posts.articles[0].description}
            author={posts.articles[0].author || "Unknown Author"}
            date={new Date(posts.articles[0].publishedAt).toLocaleDateString()}
          />
        </div>
        <div className="w-1/3">
          {posts.articles &&
            posts.articles
              .slice(1, 4)
              .map((article: any, index: any) => (
                <HeroMiniCard
                  key={index}
                  imageUrl={article.urlToImage}
                  title={article.title}
                  description={article.description}
                  author={article.author}
                  date={new Date(article.publishedAt).toLocaleDateString()}
                />
              ))}
        </div>
        <div className="w-1/3 px-5">
          {posts.articles &&
            posts.articles
              .slice(4, 7)
              .map((article: any, index: any) => (
                <HeroMicroCard
                  key={index}
                  number={index + 1}
                  imageUrl={article.urlToImage}
                  title={article.title}
                  description={article.description}
                  author={article.author}
                  date={new Date(article.publishedAt).toLocaleDateString()}
                />
              ))}
        </div>
      </div>
      {/* Create Prime News Card  */}
      <div className="w-10/12 mx-auto">
        <PrimeNewsCard
          imageUrl={posts.articles[8].urlToImage}
          title={posts.articles[8].title}
          description={posts.articles[8].description}
          author={posts.articles[8].author || "Unknown Author"}
          date={new Date(posts.articles[8].publishedAt).toLocaleDateString()}
        />
      </div>

      {/* TODAYS HIGHLIGHT SECTION  */}
      <div className="w-10/12 mx-auto my-10">
        <div className="font-bold text-3xl border-b py-3">
          <h1>Today Highlight</h1>
        </div>

        <div className="flex my-5">
          <div className="w-2/5 mx-5">
            {posts.articles &&
              posts.articles
                .slice(8, 11)
                .map((article: any, index: any) => (
                  <HeroMiniCard
                    key={index}
                    imageUrl={article.urlToImage}
                    title={article.title}
                    description={article.description}
                    author={article.author}
                    date={new Date(article.publishedAt).toLocaleDateString()}
                  />
                ))}
          </div>
          <div className="w-2/5">
            {posts.articles &&
              posts.articles
                .slice(12, 15)
                .map((article: any, index: any) => (
                  <HeroMiniCard
                    key={index}
                    imageUrl={article.urlToImage}
                    title={article.title}
                    description={article.description}
                    author={article.author}
                    date={new Date(article.publishedAt).toLocaleDateString()}
                  />
                ))}
          </div>
          <div className="w-1/6 justify-center items-center flex">
            <img src="advetisement.jpg" alt="Advetisement" />
          </div>
        </div>
      </div>
      {/* MOST RECENT POST SECTION  */}
      <div className="w-10/12 m-auto flex gap-7">
        <div className="w-2/3">
          <div className="border-b my-3">
            <h1 className="text-3xl font-bold py-3">Most Recent posts</h1>
          </div>
          <div>
            {posts.articles &&
              posts.articles
                .slice(16, 19)
                .map((article: any, index: any) => (
                  <RecentPostPrimeCard
                    key={index}
                    imageUrl={article.urlToImage}
                    title={article.title}
                    description={article.description}
                    author={article.author}
                    date={new Date(article.publishedAt).toLocaleDateString()}
                  />
                ))}
          </div>
          <div className="flex">
            <div className="w-1/2">
              {posts.articles &&
                posts.articles
                  .slice(27, 29)
                  .map((article: any, index: any) => (
                    <HeroMiniCard
                      key={index}
                      imageUrl={article.urlToImage}
                      title={article.title}
                      description={article.description}
                      author={article.author}
                      date={new Date(article.publishedAt).toLocaleDateString()}
                    />
                  ))}
            </div>
            <div className="w-1/2">
              {posts.articles &&
                posts.articles
                  .slice(29, 31)
                  .map((article: any, index: any) => (
                    <HeroMiniCard
                      key={index}
                      imageUrl={article.urlToImage}
                      title={article.title}
                      description={article.description}
                      author={article.author}
                      date={new Date(article.publishedAt).toLocaleDateString()}
                    />
                  ))}
            </div>
          </div>
          <div>
          {posts.articles &&
              posts.articles
                .slice(31, 32)
                .map((article: any, index: any) => (
                  <RecentPostPrimeCard
                    key={index}
                    imageUrl={article.urlToImage}
                    title={article.title}
                    description={article.description}
                    author={article.author}
                    date={new Date(article.publishedAt).toLocaleDateString()}
                  />
                ))}
          </div>
        </div>
        <div className="w-1/3">
          <div className="border-b my-3">
            <h1 className="text-3xl font-bold py-3">Trending</h1>
          </div>

          <div>
            {posts.articles &&
              posts.articles
                .slice(20, 26)
                .map((article: any, index: any) => (
                  <HeroMicroCard
                    key={index}
                    number={index + 1}
                    imageUrl={article.urlToImage}
                    title={article.title}
                    description={article.description}
                    author={article.author}
                    date={new Date(article.publishedAt).toLocaleDateString()}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
