# Maria Eduarda's Portfolio

Create a modern, professional personal portfolio website for Maria Eduarda, an MSc student in Electrical and Computer Engineering with a BSc in Biomedical Technology.

The portfolio is intended for recruiters and engineering companies hiring for:

- Embedded Systems

- Robotics

- TinyML / Edge AI

- Cyber-Physical Systems

- IoT

- Graduate Engineering roles

The website should present Maria Eduarda as a technically capable early-career engineer with hands-on experience in embedded hardware, sensors, firmware, robotics, machine learning at the edge, and system integration.

IMPORTANT DESIGN DIRECTION:

- Minimalist, professional, technical

- Clean engineering aesthetic

- Avoid excessive gradients

- Avoid glassmorphism

- Avoid startup-style marketing language

- Avoid huge decorative animations

- Avoid skill percentage bars

- Avoid generic AI-generated phrases such as “passionate innovator” or “technology enthusiast”

- Use generous whitespace

- Use strong typography

- Use one restrained accent color

- Make projects the main visual focus

- The site should feel like an engineer’s portfolio, not a designer portfolio

- Fully responsive for desktop and mobile

- Use English throughout the website

SITE STRUCTURE:

1. HERO

2. ABOUT

3. FEATURED PROJECTS

4. SKILLS

5. EDUCATION

6. CURRENT INTERESTS

7. CONTACT

-----------------------------------

1. HERO

-----------------------------------

Display:

Maria Eduarda

Electrical & Computer Engineering MSc Student

Embedded Systems • Robotics • TinyML • Cyber-Physical Systems

Short description:

“I build intelligent systems that connect software, sensors and hardware.”

Buttons:

- View Projects

- GitHub

- LinkedIn

- Download CV

Do not make the hero section too large.

The visitor should quickly reach the projects.

-----------------------------------

2. ABOUT

-----------------------------------

Use this text, but keep it concise:

“I am currently pursuing a Master’s degree in Electrical and Computer Engineering at NOVA School of Science and Technology, following a Bachelor’s degree in Biomedical Technology.

My interests are mainly focused on embedded systems, robotics, TinyML, cyber-physical systems and intelligent sensing.

I particularly enjoy projects that combine hardware, sensors, software and real-time decision-making.

My experience includes C/C++, Python, Arduino-based development, embedded machine learning, sensor integration, Git and IoT-related technologies.”

Add a small line:

“Currently looking for internships, graduate opportunities and engineering roles in embedded systems, robotics, IoT and related fields.”

-----------------------------------

3. FEATURED PROJECTS

-----------------------------------

Create large project cards and dedicated project detail sections.

Use these 4 projects.

PROJECT 1 — MAIN FEATURED PROJECT

Title:

Erradisnore

Subtitle:

Embedded Snoring Detection and Positional Therapy Device

Make this the most prominent project.

Description:

“Erradisnore is an embedded system designed to detect snoring and identify supine sleeping position in real time. When repeated snoring events occur while the user is lying on their back, the device activates vibration feedback to encourage a change in sleeping position.”

Main areas:

Embedded Systems

TinyML

Biomedical Engineering

Sensor Fusion

My contribution:

- Embedded firmware development in C/C++

- TinyML audio classifier deployment

- Snoring event detection logic

- Integration of Arduino Nicla Voice

- Syntiant NDP120 inference

- BMI270 IMU integration

- Supine posture detection

- Vibration motor control

- Event buffering and storage logic

- Git-based version control

Technologies:

C++

Arduino

Edge Impulse

TinyML

Syntiant NDP120

BMI270

IMU

Git

Machine Learning section:

“The audio classifier was trained to distinguish snoring events from non-snoring audio and deployed directly on embedded hardware.”

Display:

Approx. 86% model accuracy

Mention:

- On-device inference

- No continuous cloud processing required

- Real-time event detection

Include a clean system architecture diagram:

Microphone

↓

TinyML Snoring Detection

↓

Snoring Event Logic

↓

IMU Posture Detection

↓

Supine + Repeated Snoring

↓

Vibration Feedback

Leave placeholders for:

- Photo of the device

- Arduino Nicla Voice

- System diagram

- Model / Edge Impulse screenshot

- Short demonstration video or GIF

Add buttons:

- View on GitHub

- Technical Details

-----------------------------------

PROJECT 2

Title:

IoT Monitoring System

Subtitle:

Containerized IoT Data Acquisition and Monitoring Architecture

Description:

“A containerized IoT monitoring system designed to integrate multiple data sources, process incoming sensor data, store historical and real-time information, and provide monitoring through a dashboard.”

Highlight these concepts:

- Multiple data generators

- Containerized services

- Publish/Subscribe communication

- MQTT

- Real-time data processing

- Historical storage

- Latest-values storage

- Dashboard visualization

- Synthetic anomalies and data drift

- Docker Compose deployment

Technologies:

Python

Docker

Docker Compose

MQTT

Mosquitto

Node-RED

NoSQL

Redis

IoT

Create an architecture diagram inspired by:

Python Data Generators

↓

Mosquitto MQTT Broker

↓

Node-RED Integration Layer

↓

Historical Database + Real-Time Database

↓

Monitoring Dashboard

Mention that the project was developed in the context of Integration of Cyber-Physical Systems at NOVA FCT.

Do not claim features that are not explicitly implemented.

Use wording such as:

“Designed around”

“Implemented as part of the project”

“Integrated”

instead of exaggerating ownership.

Leave placeholders for:

- Architecture diagram

- Node-RED flow

- Dashboard screenshot

- Docker infrastructure screenshot

-----------------------------------

PROJECT 3

Title:

Autonomous Line-Following Robot

Subtitle:

Sensor-Based Mobile Robot

Description:

“Designed and assembled a small autonomous mobile robot capable of following a line, detecting nearby obstacles and adapting its lighting according to ambient conditions.”

Make clear that the strongest part of this project was physical integration and electronic assembly, not advanced software.

My contribution:

- Electronic assembly and wiring

- Integration of line-following sensors

- Ultrasonic obstacle detection

- DC motor control

- H-bridge motor driver integration

- PWM speed control

- LDR ambient-light sensing

- LED control

- Embedded control logic in C/C++

- Testing and calibration

Technologies:

Arduino

C/C++

IR Sensors

Ultrasonic Sensor

LDR

DC Motors

PWM

Embedded Systems

System behavior:

- Read left and right line sensors

- Move forward when aligned with the path

- Correct direction when the robot moves away from the line

- Stop when the line is lost

- Detect obstacles using an ultrasonic sensor

- Stop when an obstacle is closer than approximately 16 cm

- Automatically activate lighting depending on ambient light

Do not describe the software as advanced.

Present the project as a hands-on hardware and embedded integration project.

Leave placeholders for:

- Robot photo

- Electronics assembly

- Wiring

- Short demonstration video

-----------------------------------

PROJECT 4

Title:

UR5 Robot Monitoring Platform

Subtitle:

REST APIs, Cloud Database and Web Monitoring

Description:

“A cyber-physical systems integration project for monitoring accelerometer data from a simulated UR5 robot in CoppeliaSim.”

Architecture:

CoppeliaSim / UR5

↓

Python

↓

FastAPI

↓

Supabase

↓

Next.js

↓

Vercel

Include:

- Accelerometer data from a simulated UR5 robot

- Python data integration

- RESTful API

- Supabase cloud database

- External data source integration through OpenWeather

- Next.js monitoring dashboard

- Data visualization

- Configurable data update interval

- Cloud deployment using Vercel

- GitHub-based deployment workflow

Technologies:

Python

FastAPI

REST API

Supabase

Next.js

JavaScript

CoppeliaSim

Vercel

GitHub

Leave placeholders for:

- CoppeliaSim UR5 screenshot

- Architecture diagram

- Dashboard

- Graph visualization

-----------------------------------

4. SKILLS

-----------------------------------

Do not use percentage bars.

Organize skills into clean groups.

Programming:

- C

- C++

- Python

- JavaScript

Embedded Systems:

- Arduino

- Microcontrollers

- Sensor Integration

- Actuators

- IMU Processing

- PWM Motor Control

- Embedded Firmware

Machine Learning:

- Edge Impulse

- TinyML

- Audio Classification

- Embedded Inference

Robotics:

- Mobile Robotics

- Sensor-Based Control

- Motor Control

- CoppeliaSim

Systems / IoT:

- MQTT

- Mosquitto

- Node-RED

- REST APIs

- Docker

- Docker Compose

- Supabase

- Redis

- Cyber-Physical Systems

Tools:

- Git

- GitHub

- VS Code

- Arduino IDE

-----------------------------------

5. EDUCATION

-----------------------------------

MSc in Electrical and Computer Engineering

NOVA School of Science and Technology

Universidade NOVA de Lisboa

2025 – Present

Focus:

Embedded Systems

Robotics

Cyber-Physical Systems

Control

Intelligent Systems

BSc in Biomedical Technology

Instituto Politécnico de Bragança

Mention that the combination of Biomedical Technology and Electrical & Computer Engineering contributes to an interdisciplinary interest in intelligent sensing and biomedical/embedded systems.

-----------------------------------

6. CURRENT INTERESTS

-----------------------------------

Create a small section called:

Currently Exploring

Include:

- Embedded AI

- TinyML

- Robotics

- Autonomous Systems

- Intelligent Sensing

- Edge Computing

- Cyber-Physical Systems

- Industrial IoT

Do not make this section too prominent.

-----------------------------------

7. CONTACT

-----------------------------------

Title:

Let’s Connect

Text:

“I am open to internships, graduate opportunities and engineering roles in embedded systems, robotics, IoT, TinyML and related fields.”

Add:

- Email

- LinkedIn

- GitHub

- Download CV

Location:

Portugal

-----------------------------------

PROJECT CARD DESIGN

-----------------------------------

Each project card should show:

Project image

Project title

Short description

Technology tags

“View Project” link

Example card:

Erradisnore

TinyML · Embedded Systems · Biomedical

On-device snoring detection and positional therapy using embedded machine learning and IMU sensing.

View Project →

-----------------------------------

VISUAL STYLE

-----------------------------------

Use a visual style inspired by modern engineering and developer portfolios.

Suggested characteristics:

- Light or dark neutral background

- Strong sans-serif typography

- Subtle borders

- Simple cards

- Small technical tags

- Very limited use of accent color

- Subtle hover interactions

- Smooth but restrained scrolling

- No flashy animations

- No excessive rounded cards

- No oversized gradients

Use technical diagrams and real project photos as the main visual elements.

-----------------------------------

UX PRIORITIES

-----------------------------------

A recruiter should understand within 30 seconds:

1. Who Maria Eduarda is

2. What engineering areas she works in

3. What she has built

4. What technologies she has used

5. How to contact her

Prioritize projects over biography.

Keep text concise and readable.

Avoid long paragraphs.

-----------------------------------

SEO / METADATA

-----------------------------------

Page title:

Maria Eduarda | Embedded Systems & Robotics

Meta description:

Electrical and Computer Engineering MSc student focused on embedded systems, robotics, TinyML, IoT and cyber-physical systems.

-----------------------------------

FINAL REQUIREMENTS

-----------------------------------

- Fully responsive

- Fast-loading

- Accessible

- Clean semantic structure

- Professional English

- No fake metrics

- No fake work experience

- No exaggerated claims

- Do not invent technologies or project results

- Use placeholders whenever information is missing

- Make it easy to update project information later

- Make GitHub, LinkedIn and CV links easy to replace

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://eduarda-builds-things.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4038aa87-9f14-48d9-8a2d-49e1582ce683).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
