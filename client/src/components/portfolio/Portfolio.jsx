import { useRef, useState,useEffect } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import GitHubScraper from "../gitHubScrapper/GitHubScrapper";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeIgnore from "rehype-ignore";

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const extractImages = (content) => {
      const imgRegex = /!\[.*?\]\((.*?)\)/g;
      const extractedImages = [];
      let match;
      while ((match = imgRegex.exec(content))) {
        extractedImages.push(match[1]);
      }
      setImages(extractedImages);
    };

    if (item.readme) {
      extractImages(item.readme);
    }
  }, [item.readme]);


  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            {images.length > 0 ? (
              <img src={images[0]} alt="" />
            ) : (
              <img src={item.owner.avatar_url} alt="" />
            )}
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.name}</h2>
            <p>{item.description || "No description provided."}</p>
            <a href={item.html_url} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
            {item.readme && (
              <div className="readme">
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw, [rehypeIgnore, { test: "img" }]]}
                >
                  {item.readme}
                </ReactMarkdown>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const { repos, error } = GitHubScraper();

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {repos.map((repo) => (
        <Single item={repo} key={repo.id} />
      ))}
    </div>
  );
};

export default Portfolio;
