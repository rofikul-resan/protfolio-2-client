import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { fadeIn } from "../../../utils/motion";
import { Tilt } from "react-tilt";

const GitRepos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/rofikul-resan/repos?sort=created&per_page=6"
        );
        setRepos(response.data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="container mx-auto px-10">
      <h2 className="text-2xl font-bold mb-8">Latest Github Repositories</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo, index) => (
          <Tilt key={repo.id} options={{ scale: 1 }}>
            <motion.li
              className="p-4 border rounded-lg shadow-md h-full bg-cardBg"
              variants={fadeIn("up", "spring", index * 0.5, 0.5)}
              whileInView="show"
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-primary hover:underline"
              >
                {repo.name}
              </a>
              <p>{repo.description}</p>
              <div className="flex space-x-4 mt-2">
                <span className="text-sm text-secondary italic">
                  #{repo.language}
                </span>
                <span className="text-sm text-gray-600">
                  ⭐ {repo.stargazers_count}
                </span>
                <span className="text-sm text-gray-600">
                  🍴 {repo.forks_count}
                </span>
              </div>
            </motion.li>
          </Tilt>
        ))}
      </ul>
    </div>
  );
};

export default GitRepos;
