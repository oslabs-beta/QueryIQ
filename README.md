


<!-- PROJECT LOGO -->

<div align="center">
  <a href="https://github.com/oslabs-beta/QueryIQ">
    <img src="public/assets/logo-full-background-color.png" alt="Logo" width="970" height="auto">
  </a>
  <br />
  <!-- PROJECT LANDING PAGE WEBSITE INSERT HERE ONCE AVAILABLE -->
<br/>
</div>


<div align="center" width="100%">

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

</div>


<!-- TABLE OF CONTENTS -->

<div align="center" width="100%">

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Grafana](https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=React_Query&logoColor=white)
![NextAuth](https://img.shields.io/badge/NextAuth-20ACF5?style=for-the-badge)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Primsa](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Shell](https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)


</div>

<br />

# Table of Contents


  <ol>
    <li>
    <a href="#about">About</a></li>
    <li><a href="#key-features">Key Features</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#how-to-contribute">Contributing</a></li>
    <li><a href="#authors">Authors</a></li>
  </ol>

<!-- ABOUT THE PROJECT -->

<br />

# About
QueryIQ is a developer-friendly application designed to transform the process of analyzing and optimizing PostgreSQL databases. With its features, QueryIQ enables developers to gain valuable insights by creating data visualization dashboards based on database performance and query metrics.


## Demo

<br />
Connecting Query IQ to user database to receive health & performance metrics:
  <div align="center">
    <img src="public/assets/Demo_connectDB.gif" alt="Logo" width="fit" height="auto">
  </div>
<br />
User inputting an arbitrary query to receive query execution stats:
  <div align="center">
    <img src="public/assets/Demo_queryInput.gif" alt="Logo" width="fit" height="auto">
  </div>

<br />

# Key Features:

### ➮ PostgresQL Support

Easily manage your postgresQL connection, health, and performance metrics

### ➮ Grafana Integration

Query IQ simplifies managing your Grafana instance by creating data sources, customizing dashboards, and imbedding graphs within the application

### ➮ Overall metrics on database health including:

- Queries with the Longest Running Queries
- Queries with the Highest Average Execution Time
- Queries with the Highest Memory Usage
- Row Counts per Table
- Index Scans by Table
- Total of Table Size and Index Size
- Cache-hit Ratio
- All databases connected to that server by size
- Open Connections

### ➮ Overall metrics on multiple arbitrary query inputs including:

- Query plan by aggregated with actual time, rows, and width
- Sequence scan with actual time, rows, and width
- Planning time
- Execution time

### ➮ Secured authorization through Google Oauth with required login
Users are required to login with Google Oauth for authorization prior to using the application. 

### ➮ Privacy and Security

Privacy and security within QueryIQ is maintained through running in individual local server along with Grafana's local instance with authorization required. QueryIQ does not store any user data, most importantly including database connection information, usernames, and passwords. Data is maintained within Grafana's local instance with authorization required and access restricted by the client as needed.

# Installation

## Prerequisites

➮ Go to the following link to download the latest version (10.0.1) of Grafana: https://grafana.com/docs/grafana/latest/setup-grafana/installation/

➮ Go to your grafana.ini configurations file and ensure you have the following configurations. Refer to the the link if you're having trouble locating the grafana.ini: https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/

        allow_embedding = true
        auth.anonymous
        enabled = true
        org_name = <<org name>>
        org_role = Viewer

➮ Once you have Grafana installed, run the following command to start your Grafana local instance and ensure you've logged in successfully in the Grafana server

- On OSX, `brew services restart grafana`, or by running the Grafana binary

➮ For the PostgreSQL database you connect to, ensure pg_stat_statements is enabled. Refer to the link for further details: https://virtual-dba.com/blog/postgresql-performance-enabling-pg-stat-statements/

## Install Query IQ

1. Clone this repo
2. `cd` into project directory
3. Run `npm install`
4. Run `npm run npm:fullInstall` to install packages nested within the project
5. Run `npm run serve:dev` to spin up the Next.js and Express server layers
6. Start Grafana (please see [Prerequisites](#Prerequisites))

# How to Contribute

- Please read [CONTRIBUTING.md](#) for details on how to contribute.

<!-- Authors -->
# Authors

| Developed By | Github | LinkedIn |
| :-: | :-: |:-: |
|Connor Dillon |[![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/connoro7) |[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/connor-dillon/)|
| Khaile Tran |[![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/khailetran) |  [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/khailetran/)|
|Johanna Cameron|[![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jojecameron)|[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/johanna-cameron/) |
|Dean Biscocho|[![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/deanbiscocho)|[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/deanbiscocho/)|
|Alan Beck |[![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/KAlanBeck)| [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/k-alan-beck/) |

## Show Your Support

Please ⭐️ this project if you enjoy our tool, thank you so much!
