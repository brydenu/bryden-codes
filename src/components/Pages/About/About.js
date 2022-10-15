import React from "react";
import { Education, Personal, WorkExperience } from "./aboutComponents";
import data from "data/about.json";
import "./About.scss";

export function About() {
    const { workExperience, education, personal } = data;;

    return (
        <div className="about">
            <div className="greeting">
                <h2>Bryden Uyehara</h2>
                <div>
                    Hi! I'm Bryden! I am a 25 year old software engineer located in the greater Seattle area. 
                    If this entire website is like a job application, then think of this page as the resume. That being said, 
                    I still do have a <a href="/resume">real resume you can see</a> if such a thing is relevant to your
                    visit to my website! Otherwise, read about my experience, education, and more below! Thanks for stopping by!
                </div>
            </div>
            <div className="overview">
                <h3>Summary/Overview</h3>
                <div>
                    I'm software engineer living in the greater Seattle area.
                    I started coding a little bit after high school, playing around on websites like freecodecamp, getting a 
                    general idea of what it's like to develop a webpage. After having a lot of fun with that, I
                    realized this is the career path I wanted to embark on!
                </div>
                <div>
                    Once I decided a future with code sounded right for me, I enrolled in the 
                    Arizona State University's software engineering program. At the time I was working 
                    for Starbucks, so I made use of their tuition reimbursement program through ASU, saving me
                    a lot of money that I didn't have, giving me an affordable route to a college education. 
                </div>
                <div>
                    At the start, I very much enjoyed the education I was getting! Some of the first classes I was able
                    to take gave me hands on experience with important languages like Java and C, and I very much enjoyed
                    the concepts in discreet mathematics. However, after a couple years of completing classes online 
                    through ASU, I started burning out. One major concern of mine was in the non-coding classes. These 
                    classes started filling up precious course spots, and forced me to take quarters off from code-specific
                    classes. Antsy to get real world experience, I was then drawn to the efficiency of boot camps.
                </div>
                <div>
                    Transitioning from a college curriculum to a boot camp was the perfect choice for me. The hands on 
                    experience and projects I was able to do through Springboard's full stack software engineer career 
                    track was exactly what I needed. I found love for code again, and learned so much. Balancing work with
                    education was a struggle for a bit, but I found creating monthly schedules to keep me on track was 
                    key, and I finished the boot camp.
                </div>
                <div>
                    I was then able to land a job at a small development and marketing company called AgencyOf. I was really
                    there because of another job, which was to be a developer for up and coming prescription startup HSARx.
                    HSARx had hired AgencyOf for their own site's initial development, and marketing at launch. I was meant to
                    work with the AgencyOf team solely on HSARx and help develop the website. This experience taught me a lot
                    about a lot of things. For one, what it's really like to be a developer, writing code for a company. Along
                    with big conceptual learnings, I also gained a lot of experience with PHP, and the Laravel framework that
                    makes it so powerful. This was also my first experience using NextJs as well as Sass.
                </div>
                <div>
                    Moving away from AgencyOf, I am looking forward to working at a larger company, with a bit more of a dedication
                    for growth and learning. I am excited for the future of my career, and continually practice algorithms via sites like
                    hackerrank, codewars, and algoexpert, as well as hone my development experience by creating websites and apps myself,
                    like this site here!
                </div>
                <div>
                    Thanks again for checking out this website, and feel free to contact me with any opportunities or insights!
                </div>
            </div>
            <div className="experience">
                <h3>Work Experience</h3>
                {workExperience.map((jobDetails) => (<WorkExperience {...jobDetails} key={jobDetails.code} />))}
            </div>
            <div className="education">
                <h3>Education</h3>
                {education.map((eduDetails) => (<Education {...eduDetails} key={eduDetails.code} />))}
            </div>
            <div className="extra">
                <h3>Personal Life</h3>
                {personal.map((personalDetails) => (<Personal {...personalDetails} key={personalDetails.code} />))}
            </div>
        </div>
    );
}
