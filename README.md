# My AWS Cloud Resume 🌐📄

Hey there! Welcome to my AWS Cloud Resume project! This journey is part of the Cloud Resume Challenge and showcases my cloud and web development skills. Buckle up and let's dive in! 🚀

[The Cloud Resume Challenge Tutorial (Haiyue Yuan)](https://dev.to/yuan_hy/the-cloud-resume-challenge-my-cloud-adventure-5439)

## Table of Contents 📚

- [Introduction](#introduction)
- [Project Overview](#project-overview)
- [Services Used](#services-used)
- [Service Architecture](#service-architecture)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Hello there! 👋 I'm thrilled to share my Cloud Resume Challenge project with you. This isn't just another resume—it's a fully interactive, cloud-powered experience designed to showcase my skills in cloud computing and web development. From hosting my resume on AWS S3 to integrating a visitor counter powered by DynamoDB, this project has it all. Let's take a closer look at how everything comes together.

## Project Overview

Imagine having a resume that's not just a static document but a dynamic, living webpage that tracks visitors and handles interactions seamlessly. Sounds cool, right? This project is all about making that happen. The Cloud Resume Challenge pushes you to build a modern cloud application using a variety of AWS services, ensuring the solution is secure, scalable, and highly available.

## Services Used

Here's a quick rundown of the AWS services that make this magic happen:

- **Amazon S3**: Hosts the static website files (HTML, CSS, JS). Think of it as the cozy home for my resume.
- **Amazon CloudFront**: Distributes the content globally with low latency, making sure my resume is super fast wherever you are.
- **Amazon Route 53**: Manages DNS for my custom domain. It's like the phonebook for the internet, directing traffic to my site.
- **AWS Lambda**: Executes backend logic for the visitor counter and contact form. These are my little workers running code in response to events.
- **Amazon DynamoDB**: Stores visitor count data. This is the brain keeping track of all the visitors.
- **Amazon API Gateway**: Provides RESTful API endpoints for the Lambda functions. It’s the bridge connecting the front end to the back end.
- **Amazon SES**: Sends emails from the contact form. It's the postman delivering your messages to my inbox.
- **Terraform**: Manages the infrastructure as code. It’s the blueprint that builds and maintains my cloud environment.
- **GitHub Actions**: Implements CI/CD for automated deployments. Think of it as my personal butler, ensuring everything runs smoothly with each update.

## Service Architecture

Check out the architecture diagram below to see how all these pieces fit together:
<img src="https://github.com/dadadei/yuan-aws-website/assets/49823349/94b6b3db-fc97-4822-bbc9-53099a00678a" alt="Service Architecture" width="600" height="400">


### Architecture Explanation

1. **Static Website**: The HTML, CSS, and JavaScript files are stored in an S3 bucket configured to host a static website. Simple yet effective.
2. **CloudFront Distribution**: Distributes the website content globally and provides HTTPS. Because everyone deserves a fast and secure browsing experience.
3. **Route 53**: Points your custom domain to the CloudFront distribution. It ensures that when you type in my domain, you get to my site without a hitch.
4. **API Gateway**: Provides endpoints for the backend services. It’s like the bouncer at a club, ensuring only the right requests get in.
5. **Lambda Functions**:
    - **Visitor Counter**: Updates and retrieves the visitor count from DynamoDB. It’s always keeping tabs on who’s visiting.
    - **Contact Form Handler**: Sends an email with the contact form details using SES. Making sure I never miss a message from you.
6. **DynamoDB**: Stores the visitor count data. Think of it as a digital guestbook.
7. **Amazon SES**: Sends email notifications from the contact form submissions.

## Directory Structure

Here's how everything is organized in the project:

<img src="https://github.com/dadadei/yuan-aws-website/assets/49823349/ed5896c5-510c-45f6-aed0-4edd19cecdc2" alt="Service Architecture" width="600" height="400">


## Contributing

Got some cool ideas to make this project even better? Awesome! Fork the repository, make your changes, and submit a pull request. Contributions are always welcome! Let's make this project rock together! 🎉

## License

This project is licensed under the MIT License. Feel free to use and modify the code. See the [LICENSE](https://opensource.org/license/mit) for more details.

---

Thanks for stopping by! I hope you enjoyed exploring my Cloud Resume project as much as I enjoyed building it. If you have any questions or just want to say hi, don't hesitate to reach out! 😊
