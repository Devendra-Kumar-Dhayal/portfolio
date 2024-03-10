import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./gitHubScrapper.scss";


const GitHubScraper = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Replace YOUR_USERNAME and YOUR_ACCESS_TOKEN with your actual GitHub username and access token
        const username = import.meta.env.VITE_GITHUB_USERNAME;
        const accessToken = import.meta.env.VITE_GITHUB_SECRET_KEY;
        
        
     

        // GitHub API endpoint for retrieving user repositories
        const url = `https://api.github.com/users/${username}/repos`;

        // Set the headers with your access token for authentication
        const headers = {
          'Authorization': `Bearer ${accessToken}`
        };

        // Send a GET request to the GitHub API to retrieve repositories
        const response = await axios.get(url, { headers });

        // Check if the request was successful
        if (response.status === 200) {
          // Extract the repositories from the response data
          const data = response.data;

          // Fetch the raw README file for each repository
          const reposWithReadme = await Promise.all(
            data.map(async (repo) => {
              try {
                // GitHub API endpoint for retrieving the raw README file
                const readmeUrl = `https://raw.githubusercontent.com/${username}/${repo.name}/master/README.md`;

                // Send a GET request to the GitHub API to retrieve the raw README file
                const readmeResponse = await axios.get(readmeUrl);

                // Add the raw README content to the repository object
                return {
                  ...repo,
                  readme: readmeResponse.data
                };
              } catch (error) {
                // If the README file doesn't exist or there's an error, add an empty readme property
                return {
                  ...repo,
                  readme: ''
                };
              }
            })
          );

          setRepos(reposWithReadme);
        } else {
          setError(`Error: ${response.status}`);
        }
      } catch (error) {
        setError('Error: ' + error.message);
      }
    };

    fetchRepos();
  }, []);


    return {repos,error};
  };

  export default GitHubScraper;
// ----------------------------
  // return (
  //   <div className='wrapper'>
  //     <h1>GitHub Repositories</h1>
  //     {error && <p>{error}</p>}
  //     {repos.map(repo => (
  //       <div key={repo.id}>
  //         <h2>{repo.name}</h2>
  //         <p>URL: {repo.html_url}</p>
  //         <h3>README</h3>
  //         <div className='readme-container'>
  //         <pre >{repo.readme}</pre>
  //         </div>
          
  //         <hr />
  //       </div>
  //     ))}
  //   </div>
  //   );