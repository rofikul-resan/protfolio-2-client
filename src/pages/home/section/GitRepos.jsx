import { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-8">Latest Github Repositories</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <li key={repo.id} className="p-4 border rounded-lg shadow-md h-full">
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitRepos;
