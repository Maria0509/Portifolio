import type { Project } from "./portfolio";
import { projects } from "./portfolio";

// Portuguese content for each project, keyed by slug.
const translations: Record<string, Partial<Project>> = {
  erradisnore: {
    subtitle: "Dispositivo Embebido de Deteção de Ressonar e Terapia Posicional",
    summary: "Deteção de ressonar no próprio dispositivo e terapia posicional com machine learning embebido e sensorização inercial.",
    description: "O Erradisnore é um sistema embebido concebido para detetar ressonar e identificar a posição de decúbito dorsal em tempo real. Quando ocorrem episódios repetidos de ressonar com o utilizador deitado de costas, o dispositivo ativa uma vibração para incentivar a mudança de posição.",
    areas: ["Sistemas Embebidos", "TinyML", "Engenharia Biomédica", "Fusão Sensorial"],
    contribution: ["Desenvolvimento de firmware embebido em C/C++", "Implementação de classificador de áudio TinyML", "Lógica de deteção de episódios de ressonar", "Integração do Arduino Nicla Voice", "Inferência no Syntiant NDP120", "Integração do IMU BMI270", "Deteção de posição de decúbito dorsal", "Controlo do motor de vibração", "Lógica de buffer e armazenamento de eventos", "Controlo de versões com Git"],
    machineLearning: "O classificador de áudio foi treinado para distinguir episódios de ressonar de outros sons e foi implementado diretamente no hardware embebido.",
    metric: "Aproximadamente 86% de exatidão do modelo",
    highlights: ["Inferência no dispositivo", "Sem processamento contínuo na nuvem", "Deteção de eventos em tempo real"],
    architecture: ["Microfone", "Deteção de Ressonar com TinyML", "Lógica de Eventos de Ressonar", "Deteção de Postura por IMU", "Decúbito Dorsal + Ressonar Repetido", "Feedback por Vibração"],
    media: ["Fotografia do dispositivo", "Arduino Nicla Voice", "Diagrama do sistema", "Captura do modelo / Edge Impulse", "Vídeo ou GIF curto de demonstração"],
  },
  "iot-monitoring-system": {
    title: "Sistema de Monitorização IoT",
    subtitle: "Arquitetura de Aquisição e Monitorização de Dados IoT em Contentores",
    summary: "Serviços em contentores para adquirir, processar, armazenar e visualizar dados de sensores IoT.",
    description: "Um sistema de monitorização IoT em contentores, concebido para integrar várias fontes de dados, processar dados de sensores, armazenar informação histórica e em tempo real e disponibilizar monitorização através de um dashboard.",
    areas: ["IoT", "Sistemas Ciberfísicos", "Integração de Dados"],
    context: "Desenvolvido no âmbito da unidade curricular de Integração de Sistemas Ciberfísicos na NOVA FCT.",
    highlights: ["Vários geradores de dados", "Serviços em contentores", "Comunicação publicação/subscrição", "MQTT", "Processamento de dados em tempo real", "Armazenamento histórico", "Armazenamento dos valores mais recentes", "Visualização em dashboard", "Anomalias sintéticas e desvio de dados", "Implementação com Docker Compose"],
    architecture: ["Geradores de Dados em Python", "Broker MQTT Mosquitto", "Camada de Integração Node-RED", "Base de Dados Histórica + Tempo Real", "Dashboard de Monitorização"],
    media: ["Diagrama de arquitetura", "Fluxo Node-RED", "Captura do dashboard", "Captura da infraestrutura Docker"],
  },
  "line-following-robot": {
    title: "Robô Autónomo Seguidor de Linha",
    subtitle: "Robô Móvel Baseado em Sensores",
    summary: "Um robô móvel prático que integra sensores de linha, deteção de obstáculos, controlo de motores e iluminação adaptativa.",
    description: "Conceção e montagem de um pequeno robô móvel autónomo capaz de seguir uma linha, detetar obstáculos próximos e adaptar a iluminação às condições ambientais.",
    areas: ["Sistemas Embebidos", "Robótica Móvel", "Integração de Hardware"],
    contribution: ["Montagem e cablagem eletrónica", "Integração dos sensores de seguimento de linha", "Deteção de obstáculos por ultrassons", "Controlo de motores DC", "Integração de driver em ponte H", "Controlo de velocidade por PWM", "Medição de luz ambiente com LDR", "Controlo de LEDs", "Lógica de controlo embebido em C/C++", "Testes e calibração"],
    highlights: ["Leitura dos sensores de linha esquerdo e direito", "Avançar quando alinhado com o percurso", "Corrigir a direção quando o robô se afasta da linha", "Parar quando a linha é perdida", "Detetar obstáculos com sensor de ultrassons", "Parar quando um obstáculo está a menos de cerca de 16 cm", "Ativar automaticamente a iluminação conforme a luz ambiente"],
    architecture: ["Sensores de Linha + Distância + Luz", "Lógica de Controlo Arduino", "Ponte H + PWM", "Motores + Iluminação"],
    media: ["Fotografia do robô", "Montagem eletrónica", "Cablagem", "Vídeo curto de demonstração"],
  },
  "ur5-monitoring-platform": {
    title: "Plataforma de Monitorização do Robô UR5",
    subtitle: "APIs REST, Base de Dados na Nuvem e Monitorização Web",
    summary: "Um pipeline ciberfísico de monitorização que liga um robô UR5 simulado a um dashboard web na nuvem.",
    description: "Projeto de integração de sistemas ciberfísicos para monitorização de dados de acelerómetro de um robô UR5 simulado no CoppeliaSim.",
    areas: ["Sistemas Ciberfísicos", "Robótica", "Monitorização Web"],
    highlights: ["Dados de acelerómetro de um robô UR5 simulado", "Integração de dados em Python", "API RESTful", "Base de dados na nuvem Supabase", "Integração de fonte de dados externa através do OpenWeather", "Dashboard de monitorização em Next.js", "Visualização de dados", "Intervalo de atualização configurável", "Implementação na nuvem com Vercel", "Fluxo de implementação baseado em GitHub"],
    architecture: ["CoppeliaSim / UR5", "Python", "FastAPI", "Supabase", "Next.js", "Vercel"],
    media: ["Captura do UR5 no CoppeliaSim", "Diagrama de arquitetura", "Dashboard", "Visualização gráfica"],
  },
};

export const projectsPt: Project[] = projects.map((project) => ({
  ...project,
  ...translations[project.slug],
}));

export const skillGroupsPt = [
  { title: "Programação", skills: ["C", "C++", "Python", "JavaScript"] },
  { title: "Sistemas Embebidos", skills: ["Arduino", "Microcontroladores", "Integração de Sensores", "Atuadores", "Processamento de IMU", "Controlo de Motores por PWM", "Firmware Embebido"] },
  { title: "Machine Learning", skills: ["Edge Impulse", "TinyML", "Classificação de Áudio", "Inferência Embebida"] },
  { title: "Robótica", skills: ["Robótica Móvel", "Controlo Baseado em Sensores", "Controlo de Motores", "CoppeliaSim"] },
  { title: "Sistemas / IoT", skills: ["MQTT", "Mosquitto", "Node-RED", "APIs REST", "Docker", "Docker Compose", "Supabase", "Redis", "Sistemas Ciberfísicos"] },
  { title: "Ferramentas", skills: ["Git", "GitHub", "VS Code", "Arduino IDE"] },
];

export const interestsPt = ["IA Embebida", "TinyML", "Robótica", "Sistemas Autónomos", "Sensorização Inteligente", "Computação na Periferia", "Sistemas Ciberfísicos", "IoT Industrial"];
