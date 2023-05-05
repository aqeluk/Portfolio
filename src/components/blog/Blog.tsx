import React, { useState } from "react";
import Title from "../home/Title";
import BlogCard from "./BlogCard";
import thynk from "../../../public/thynknoslogan.png";
import finance from "../../../public/itandfinance.png";
import helloWorld from "../../../public/helloworld.png";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface Post {
  title: string;
  subtitle: string;
  category: string;
  image: StaticImageData;
  content: string;
}

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const posts: Post[] = [
    {
      title: "5th May 2023",
      subtitle: "The Intersection of AI, IT, and Finance: Shaping the Future",
      category: "IT & Finance",
      image: finance,
      content:
        "The rapid development of artificial intelligence (AI) has had a profound impact on numerous industries, and the IT and finance sectors are no exception. AI is revolutionizing how businesses approach data analysis, decision-making, and automation, leading to increased efficiency and better customer experiences. In this blog, we'll explore the role of AI in the IT and finance industries and discuss the potential implications for the future of work and technology. \n  Key areas where AI is making strides in the IT and finance sectors include predictive analytics, risk assessment, fraud detection, and customer service. With advancements in machine learning and natural language processing, AI is becoming an essential tool for businesses to stay ahead of the competition. \n  As AI continues to evolve, it's crucial for businesses and professionals to adapt and embrace these changes. Staying informed about the latest AI trends and applications can help businesses stay ahead in the ever-evolving landscape of IT and finance.",
    },
    {
      title: "20th April 2023",
      subtitle: "Will Natural Language Syntax Replace Conventional Coding?",
      category: "Application Development",
      image: thynk,
      content: "The evolution of technology has led to significant improvements in coding languages and tools, making it easier for developers to create and maintain software. One intriguing question is whether natural English language could replace conventional coding syntax as technology advances. \n Natural language processing (NLP) and machine learning have already made strides in bridging the gap between human language and computer code. Tools like OpenAI's GPT-3 and advancements in AI programming have opened the door to the possibility of coding in plain English. \n However, despite these advancements, it's unlikely that natural language syntax will entirely replace conventional coding in the near future. While natural language interfaces may simplify coding for non-programmers, there is still a need for precise, efficient, and unambiguous coding languages for more complex applications. \n As technology continues to progress, it's essential for developers to stay current on new tools and languages, while also retaining a strong foundation in conventional coding practices.",
    },
    {
      title: "1st April 2023",
      subtitle:
        "The Trials and Triumphs of Building a Comprehensive Web Application",
      category: "Information & Technology",
      image: helloWorld,
      content: "Starting a comprehensive web application, like any ambitious project, comes with its fair share of challenges. This blog will take a deep dive into my experience creating an effective solution for third-party Amazon sellers, highlighting the obstacles I faced and the lessons learned along the way. \n Connecting to AWS and their APIs proved to be a hurdle, as I navigated concurrency and permission issues within my API. This process required a deep understanding of various AWS services, as well as the ability to troubleshoot and resolve technical issues. \n Throughout this project, I realized the importance of continuous learning and adaptation. While my computer science journey provided a strong foundation, it was crucial to expand my knowledge and skills to meet the unique demands of this project. \n In conclusion, building a comprehensive web application can be a challenging yet rewarding experience. Overcoming obstacles and learning from mistakes ultimately leads to growth, both personally and professionally.",
    },
  ];

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  return (
    <div>
      {selectedPost === null ? (
        <>
          <Title
            title="Latest"
            subTitle="Posts"
            subtitleClass="text-green-600"
          />
          <div className="grid grid-cols-2 gap-10">
            {posts.map((post, index) => (
              <div key={index} className="px-6">
                <BlogCard
                  title={post.title}
                  subtitle={post.subtitle}
                  category={post.category}
                  image={post.image}
                  onClick={() => handlePostClick(post)}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full px-8 py-4">
          <button
            onClick={handleBackClick}
            className="bg-green-600 text-white px-4 py-2 mb-4"
          >
            Back to Recent Posts
          </button>
          <h1 className="font-bold text-xl mb-2">{selectedPost.subtitle}</h1>
          <h2 className="font-semibold text-lg mb-4">
            {selectedPost.category}
          </h2>
          <p>{selectedPost.title}</p>
          <div className="text-justify my-6">
            {selectedPost.content.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Blog;
