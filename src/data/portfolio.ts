export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string;
  areas: string[];
  technologies: string[];
  contribution?: string[];
  highlights?: string[];
  context?: string;
  machineLearning?: string;
  metric?: string;
  architecture: string[];
  media: string[];
  featured?: boolean;
};

// Replace null values when Maria's public links and CV are ready.
export const profileLinks = {
  email: null as string | null,
  github: "https://github.com/Maria0509",
  linkedin: "https://www.linkedin.com/in/maria-eduarda-mendes-39a153252/",
  cv:  "/cv.pdf",
};

export const projects: Project[] = [
  {
    slug: "erradisnore",
    title: "Erradisnore",
    subtitle: "Embedded Snoring Detection and Positional Therapy Device",
    summary: "On-device snoring detection and positional therapy using embedded machine learning and IMU sensing.",
    description: "Erradisnore is an embedded system designed to detect snoring and identify supine sleeping position in real time. When repeated snoring events occur while the user is lying on their back, the device activates vibration feedback to encourage a change in sleeping position.",
    areas: ["Embedded Systems", "TinyML", "Biomedical Engineering", "Sensor Fusion"],
    technologies: ["C++", "Arduino", "Edge Impulse", "TinyML", "Syntiant NDP120", "BMI270", "IMU", "Git"],
    contribution: ["Embedded firmware development in C/C++", "TinyML audio classifier deployment", "Snoring event detection logic", "Integration of Arduino Nicla Voice", "Syntiant NDP120 inference", "BMI270 IMU integration", "Supine posture detection", "Vibration motor control", "Event buffering and storage logic", "Git-based version control"],
    machineLearning: "The audio classifier was trained to distinguish snoring events from non-snoring audio and deployed directly on embedded hardware.",
    metric: "Approx. 86% model accuracy",
    highlights: ["On-device inference", "No continuous cloud processing required", "Real-time event detection"],
    architecture: ["Microphone", "TinyML Snoring Detection", "Snoring Event Logic", "IMU Posture Detection", "Supine + Repeated Snoring", "Vibration Feedback"],
    media: ["Photo of the device", "Arduino Nicla Voice", "System diagram", "Model / Edge Impulse screenshot", "Short demonstration video or GIF"],
    featured: true,
  },
  {
    slug: "iot-monitoring-system",
    title: "IoT Monitoring System",
    subtitle: "Containerized IoT Data Acquisition and Monitoring Architecture",
    summary: "Containerized services for acquiring, processing, storing and visualizing IoT sensor data.",
    description: "A containerized IoT monitoring system designed to integrate multiple data sources, process incoming sensor data, store historical and real-time information, and provide monitoring through a dashboard.",
    areas: ["IoT", "Cyber-Physical Systems", "Data Integration"],
    technologies: ["Python", "Docker", "Docker Compose", "MQTT", "Mosquitto", "Node-RED", "NoSQL", "Redis", "IoT"],
    context: "Developed in the context of Integration of Cyber-Physical Systems at NOVA FCT.",
    highlights: ["Multiple data generators", "Containerized services", "Publish/Subscribe communication", "MQTT", "Real-time data processing", "Historical storage", "Latest-values storage", "Dashboard visualization", "Synthetic anomalies and data drift", "Docker Compose deployment"],
    architecture: ["Python Data Generators", "Mosquitto MQTT Broker", "Node-RED Integration Layer", "Historical Database + Real-Time Database", "Monitoring Dashboard"],
    media: ["Architecture diagram", "Node-RED flow", "Dashboard screenshot", "Docker infrastructure screenshot"],
  },
  {
    slug: "line-following-robot",
    title: "Autonomous Line-Following Robot",
    subtitle: "Sensor-Based Mobile Robot",
    summary: "A hands-on mobile robot integrating line sensors, obstacle detection, motor control and adaptive lighting.",
    description: "Designed and assembled a small autonomous mobile robot capable of following a line, detecting nearby obstacles and adapting its lighting according to ambient conditions.",
    areas: ["Embedded Systems", "Mobile Robotics", "Hardware Integration"],
    technologies: ["Arduino", "C/C++", "IR Sensors", "Ultrasonic Sensor", "LDR", "DC Motors", "PWM", "Embedded Systems"],
    contribution: ["Electronic assembly and wiring", "Integration of line-following sensors", "Ultrasonic obstacle detection", "DC motor control", "H-bridge motor driver integration", "PWM speed control", "LDR ambient-light sensing", "LED control", "Embedded control logic in C/C++", "Testing and calibration"],
    highlights: ["Read left and right line sensors", "Move forward when aligned with the path", "Correct direction when the robot moves away from the line", "Stop when the line is lost", "Detect obstacles using an ultrasonic sensor", "Stop when an obstacle is closer than approximately 16 cm", "Automatically activate lighting depending on ambient light"],
    architecture: ["Line + Distance + Light Sensors", "Arduino Control Logic", "H-Bridge + PWM", "Motors + Lighting"],
    media: ["Robot photo", "Electronics assembly", "Wiring", "Short demonstration video"],
  },
  {
    slug: "ur5-monitoring-platform",
    title: "UR5 Robot Monitoring Platform",
    subtitle: "REST APIs, Cloud Database and Web Monitoring",
    summary: "A cyber-physical monitoring pipeline connecting a simulated UR5 robot to a cloud-backed web dashboard.",
    description: "A cyber-physical systems integration project for monitoring accelerometer data from a simulated UR5 robot in CoppeliaSim.",
    areas: ["Cyber-Physical Systems", "Robotics", "Web Monitoring"],
    technologies: ["Python", "FastAPI", "REST API", "Supabase", "Next.js", "JavaScript", "CoppeliaSim", "Vercel", "GitHub"],
    highlights: ["Accelerometer data from a simulated UR5 robot", "Python data integration", "RESTful API", "Supabase cloud database", "External data source integration through OpenWeather", "Next.js monitoring dashboard", "Data visualization", "Configurable data update interval", "Cloud deployment using Vercel", "GitHub-based deployment workflow"],
    architecture: ["CoppeliaSim / UR5", "Python", "FastAPI", "Supabase", "Next.js", "Vercel"],
    media: ["CoppeliaSim UR5 screenshot", "Architecture diagram", "Dashboard", "Graph visualization"],
  },
];

export const skillGroups = [
  { title: "Programming", skills: ["C", "C++", "Python", "JavaScript"] },
  { title: "Embedded Systems", skills: ["Arduino", "Microcontrollers", "Sensor Integration", "Actuators", "IMU Processing", "PWM Motor Control", "Embedded Firmware"] },
  { title: "Machine Learning", skills: ["Edge Impulse", "TinyML", "Audio Classification", "Embedded Inference"] },
  { title: "Robotics", skills: ["Mobile Robotics", "Sensor-Based Control", "Motor Control", "CoppeliaSim"] },
  { title: "Systems / IoT", skills: ["MQTT", "Mosquitto", "Node-RED", "REST APIs", "Docker", "Docker Compose", "Supabase", "Redis", "Cyber-Physical Systems"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Arduino IDE"] },
];

export const interests = ["Embedded AI", "TinyML", "Robotics", "Autonomous Systems", "Intelligent Sensing", "Edge Computing", "Cyber-Physical Systems", "Industrial IoT"];
