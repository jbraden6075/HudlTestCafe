# Description:

This project is using TestCafe with JavaScript to automate the login page at Hudl.com. 

It will have multiple scripts, of both positive and negative testing to show my thought processes while navigating around the page. It will not be exhaustive, so nothing in terms of signing up, resetting passwords, or changing usernames and emails will be represented.

Since this project is specific to the login page and its functionality, I will set the baseURL as hudl.com/login.

Just for the sake of this project, I am assuming there are no bugs on the production login page for hudl.com. This means that the results I am given per the browser actions executed are the expected results. 

This project demonstrates my aptitude with the TestCafe tool as I am most familar with it after using it for 4 years. The project's folder structure and features are richer than the Selenium project due to the experience and understanding I have with this tool. 

## The Ask:
- Setup an automation environment on your local machine using Selenium

- Automate any cases that you would think are good to test the functionality of validating logging into hudl.com.

- Push your tests to a GitHub repository (a public repo is fine) and share the link (please do not include any passwords in a public repo).

- We are expecting you to automate scenarios that you deem critical to validate the functionality of the hudl.com login page. 

- This project is an opportunity to showcase your organization structure, approach to automation, and ability to effectively write new automated test cases.
 
- We will be looking for well-established best practices and patterns. Lastly, we will run your automation suite against the site, so please write it in a way that allows us to do so.
 
- This isn't a timed test, however, we estimate this exercise to take you around 2 hours to complete. To allow us to continue to move through this process quickly, we ask that you return this project to us in 4 days. If you need more time for whatever reason, we ask that you please let us know, so we can properly set expectations with our project reviewers.

### Tips:
- If you're unfamiliar with Selenium the best place to start is with the below readings:
    - https://www.seleniumhq.org/projects/webdriver/
    - https://gist.github.com/huangzhichong/3284966 

## My Thoughts:

- I chose to create this repo and submit it along with the Selenium assignment because I felt I could do more with this tool in a 2 hour timeframe compared to relearning Selenium and dusting the rust off with Python to get something functional.

- Some of the features that I enjoy from TestCafe are the built-in reporters, screenshots, configurations, auto-waits, and no need for configuring and maintaining a driver, as well as cleanliness of code. Python has a simple syntax, but TestCafe's APIs are also intuitive and since its main focus is front-end end-to-end automation, it has many more options to help control the browser and its elements. 

- If there is something that TestCafe doesn't support, one can always use native JS and build ClientFunctions and Scripts to handle what TestCafe has yet to add to the tool.

- You'll notice this folder structure is built out much better and also takes advantage of a page object model. This architecture is what I would have liked to show in the original assignment. You'll also notice the artifacts, which contains the test results and screenshots of any failed tests. Feel free to force a script to fail to see how the screenshots are built out.

- I did not add video to this repo as it takes up more space and there is a known memory leak with ffmpeg, but it would be a simple video config in the .testcaferc.js confiruation file that I would have added an output to an artifacts/video folder.

- I had thought of writing a script for remembering the user at log in, but since that requires figuring out a way of copying session cookies and injecting them into a new session, I decided against it for this example project.

- I only added comments to the first test as the rest of the file is pretty standard. I just wanted to show some insights on my workflow ideas.

## Scenarios:

### Positive:
- Valid user is able to log into hudl.com
- Clicking the Hudl logo link will navigate to hudl.com
- Clicking the left arrow link will navigate to hudl.com
- Clicking the Need help link from the login page will navigate to /login/help#
- Clicking the Need help link from the invalid log in message will navigate to /login/help
- Clicking the Log In with an Organization button will navigate to /login/organization
- Clicking the Sign up link will navigate to hudl.com/register/signup

### Negative:
- Invalid email will display message

## Run Project:

### Prerequisites:
- The environment will a need Chrome browser installed
- Clone the project ([Instructions]([Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)))
- Node.js and npm will need to be [installed](https://nodejs.org/en/download)

- In a terminal, cd to the root of the project
    - Run the command: `npm install` (this will install all the dependencies required to run the project)

### Execute Specs:
- In a terminal, cd to the root of the project
- Run the command: `testcafe`
    - 5 browser instances will open and run in parallel. This will reduce the execution time for the project
- If you want to run a specific test instead of the whole file: `testcafe -t '<test name>' -c 1`
    - For example: `testcafe -t 'User can successfully login' -c 1`
    - Since the default concurrency for the project is 5, we want to overwrite that with -c 1 to make sure only one browser instance is opened at runtime