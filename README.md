# CoviCure Website

## [Site is Live At](https://covicure-app.herokuapp.com/) : <br/> https://covicure-app.herokuapp.com/

## [Demo Video of Working of Project CoviCure](https://www.youtube.com/watch?v=bgkLg3my7gc) : <br/> https://www.youtube.com/watch?v=bgkLg3my7gc

## [CoviCure Project Idea Power Point Presentation](https://www.canva.com/design/DAElslw-6eg/r01ausFXlichEnPEHvoX2A/view?utm_content=DAElslw-6eg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink) : <br/> https://www.canva.com/design/DAElslw-6eg/r01ausFXlichEnPEHvoX2A/view?utm_content=DAElslw-6eg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink 

## Detailed Idea Explanation of Project CoviCure :  </br>
1. Facilitation of a Resource Exchange + Management System along with creating a Supply Chain Optimisation through/using a fully-fledged Real-Time Website, which will display/show all the Donors & the Help-Seekers to address the demand of Covid Resources.<br/>
2. It will serve for Urgent Medical Essentials and Services such as Availability of Hospital Beds, Oxygen Cylinders, Blood & Plasma Donors, Medicines, etc.<br/>
3. Using CoviCure Chat Application, I aim to create a helping community in these harsh times.<br/> 

## The Problems CoviCure Solves / Solutions Provided : </br>
In these hard times of the pandemic, many people have lost their loving ones. Moreover, there are many people, who after their Covid Recovery, are willing to donate Covid Resources. The Idea of CoviCure revolves around solving this problem. CoviCure Community will bridge the gap between the people who are in dire need of help and the ones who are willing to donate.<br/> 
The major Problems/Challenges CoviCure addresses are :<br/> 
        1. It is quite difficult for the people who are in dire need of urgent Covid resources, to find verified leads and people who are willing to donate these resources, due to lack of communication and trust between them.<br/> 
        2. Malpractices, scams and high-price quoting of life-saving resources such as Remdesivir, oxygen cylinders, vaccines etc.<br/> 
        3. Unavailability of a fully-fledged one-stop webiste/application which performs real-time data fetching and updation.<br/>
 
## What is the Need of CoviCure? : <br/>
1. To Reduce the Time and Effort of the people in need of Emergency Services.<br/>
2. To Cater to the needs of the people in these harsh times of the pandemic.<br/>
3. To Impact a large section of the society through Technology.<br/>
               
## How CoviCure Works? : <br/> 
1. Web Scraping is used to collect data of both the willing donors and the people in need.<br/>
2. Using Automation, an Automated Message is sent to all the willing donors and help-seekers, containing the link of CoviCure Website.<br/> 
3. CoviCure Website displays/shows the necessary data of all the donors & help-seekers. Other essential data is also stored securely.<br/>
4. Using CoviCure Chat Application, people can communicate with & help each other in Real-Time.<br/>

## Real-Time Usage of CoviCure : <br/> 
Fully-Fledged and Completely Independent Website/Application that can be directly used by any Individual or any Organisation for the Betterment of the Society. <br/>

## Uniqueness of CoviCure : </br>
1. The main USP of CoviCure is that it is based on user-feedback system, a strong spam-detection mechanism as it fetches and updates the data in real-time. (Sample Twitter UserID Data will be required for demo purposes).
2. CoviCure bridges the gap between the people who are in dire need of help and the ones who are willing to donate. 

## Tech Stack Used : <br/> 
Web Scraping & Automation: NodeJS & Puppeteer<br/> 
Front-End: ReactJS, HTML, CSS, JS, BootStrap<br/> 
Back-End: NodeJS, Express, MongoDB, Socket.io<br/> 

## Step-By-Step Procedure to Run this CoviCure Project on Your Local Machine : <br/> 
Step 1 : Fork or Clone this Repository onto your local machine.<br/>
Step 2 : Install Node.js & npm on your local machine. (Skip this step if installed already)
Step 4 : Install node and some NPM Libraries such as puppeteer, request and require modules for Web Scraping and Automation. To Run the Real-Time Chat Application,  
Step 3 : Run the commands in following manner :<br/> 
### For Running Web-Scraping & Automation Part-<br/>
Open CoviCure_Automation folder in VSCode Integrated Terminal and Write npm install in it. (Puppeteer, Request & Require np Modules will be installed)</br>
Run dataWebScrappingDonor.js File. It will scrap, collect and store data of Donor people in a donor.json File.<br/> 
Run dataWebScrappingNeedy.js File. It will scrap, collect and store data o Needy people in a needy.json File.<br/> 
Run automation.js File. It will Automate Twitter and will Tweet an Automated Message from Our Personal Twitter Account to Evey Donor and Needy Person, containing the Hosted Link of CoviCure Website.<br/> 
Run htmlUpdate.js File. It will Display a List of All the Donor and Needy People Twitter UserIDs. It will also show the Tweet Delivery Status for Each Person.<br/> Through our Real-Time Chat Application Link, the user can join and connect with each other from our Real-Time Chat Application, where there is a Helping Community to assist you regarding any emergency requirements related to Covid Resources.<br/>
### For Running CoviCure Real-Time Chat Application-<br/> 
Open the CoviCure_ChatApp folder in VSCode Integrated Terminal and Write npm install in it.</br>
Also Install the required React npm modules & libraries by writing the following command in VSCode Integrated Terminal :<br/>
        npm i create-react-app react-router-dom react-scrollable-feed react-emoji socket.io-client query-string<br/>
Now write npm start for both Client and Server folders to start/run the CoviCure Chat Application.<br/>
### For Running CoviCure Website-<br/> 
Open the CoviCure_Website folder in VSCode Integrated Terminal and Write npm install in it.</br>
Now write node App.js to start/run the CoviCure Website.<br/><br/>
