const logotext = "GOS";
const meta = {
    title: "Gos",
    description: "I’m Ghaws Shafadonia Passionate about building intelligent systems, immersive games, and innovative prototypes.",
};

import ppImage from "./assets/images/pp.png"

const introdata = {
    title: "I’m Gos",
    animated: {
        first: "I love coding",
        second: "I code cool program",
        third: "I develop any apps",
    },
    description: "I’m passionate about coding and love trying to create innovative programs. From developing cool applications to solving problems with code, I’m always eager to push the boundaries of what’s possible in tech. My goal is to continuously improve and build impactful software that makes a difference.",
    // your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
    your_img_url: ppImage,
};

const dataabout = {
    title: "abit about my self",
    aboutme: "I embarked on my programming journey at a young age, starting with robotics programming in 5th grade. My passion for coding continued to grow as I explored HTML and CSS in junior high school. These early experiences cemented my love for programming, and I have been dedicated to expanding my skills ever since. In high school, I began experimenting with various network security tools, which broadened my understanding of IT and cybersecurity. My interest in programming games and machine learning took off during my college years, allowing me to blend creativity with technical expertise. Over the years, I have successfully completed several contract projects, collaborating with companies in need of my specialized skills. With approximately 14 years of experience in the IT field, I have developed a robust foundation in programming, security, and software development.",
};
const worktimeline = [{
        jobtitle: "Technical Trainer",
        where: "Yogyakarta",
        date: "Current",
    },
    {
        jobtitle: "Bank BRI Prototype Development",
        where: "Bank Rakyat Indonesia",
        date: "2024",
    },
    {
        jobtitle: "Speaker on AI Model",
        where: "Uninversiyas Islam Yogyakarta",
        date: "2023",
    },
];

const skills = [{
        name: "Python",
        value: 80,
    },
    {
        name: "C#",
        value: 80,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "C++",
        value: 70,
    },
];

const services = [{
        title: "Convolutional Neural Network Architect for Stable Diffusion Models",
        description: "As a CNN model developer for Stable Diffusion, I focus on the development and optimization of convolutional neural networks to create stable and efficient diffusion models. The use of CNNs in this context enhances image quality and the stability of the diffusion process, which is crucial for generating more accurate and realistic outputs in image-based generative models",
    },
    {
        title: "Stable Diffusion Prompt Curator",
        description: "As a Stable Diffusion Prompt Curator, I specialize in crafting and refining the perfect prompts to generate high-quality, creative, and visually striking images using Stable Diffusion. My role involves understanding the nuances of AI-driven image generation and carefully designing text-based inputs that guide the model to produce visually compelling and unique outputs. Through continuous experimentation and an in-depth knowledge of generative AI, I ensure that the prompts I create unlock the full potential of Stable Diffusion, allowing for the creation of artistic, imaginative, and sometimes surreal visuals.",
    },
    {
        title: "Deep Learning Fine-Tuning Engineer",
        description: "As a Deep Learning Fine-Tuning Engineer, I specialize in optimizing and refining deep learning models to enhance their performance and accuracy. Through fine-tuning, I adapt pre-trained models to specific tasks, ensuring they produce high-quality results in various applications, from generative AI to computer vision. My expertise lies in adjusting model parameters, training on specialized datasets, and implementing advanced techniques to maximize the efficiency and effectiveness of AI models, such as Stable Diffusion or other deep learning architectures."
    },
];

import ftImage from "./assets/images/ThumbnailPort/fine-tunning.png"
import wlImage from "./assets/images/ThumbnailPort/launcher.png"
import brImage from "./assets/images/ThumbnailPort/Gos.png"
import pmImage from "./assets/images/ThumbnailPort/management.png"

const dataportfolio = [
    {
        img: ftImage,
        description: "Fine-tuning model.",
        link: "https://github.com/gendonholaholo/sd_finetune",
    },
    {
        img: brImage,
        description: "Background remover menggunakan DeepLabV3+.",
        link: "https://github.com/gendonholaholo/auto-crop.git",
    },
    {
        img: pmImage,
        description: "Project Management (NodeJS).",
        link: "https://github.com/gendonholaholo/soal-pengelolaanProyek",
    },
    {
        img: wlImage,
        description: "Windows launcher.",
        link: "https://github.com/gendonholaholo/gos_launcher_c-",
    },
];

const contactConfig = {
    YOUR_EMAIL: "fafaghaws@live.com",
    description: "Feel free to reach out for any inquiries, feedback, or collaboration opportunities. I'm happy to connect and assist with your projects.",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/gendonholaholo",
    instagram: "https://www.instagram.com/shafadonia/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
