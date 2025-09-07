import SkillCard from "@/components/cards/skill-card";

export default function DeveloperSkills() {
    const myDevelopmentSkills = [
        {
            title: "0 - Python",
            description: "Expert Python developer specializing in AI/ML development, data science, and backend systems. I leverage Python's extensive libraries to build scalable machine learning models, automate complex workflows, and create robust enterprise applications with optimal performance.",
            sticker: "/python-sticker.svg",
            width: 120
        },
        {
            title: "1 - TensorFlow & PyTorch",
            description: "Advanced deep learning expertise using TensorFlow and PyTorch frameworks for neural network development. I design and deploy state-of-the-art AI models for computer vision, NLP, and predictive analytics, delivering cutting-edge solutions for business intelligence.",
            sticker: "/pytorch-sticker.svg",
            width: 115
        },
        {
            title: "2 - Computer Vision (OpenCV, YOLO)",
            description: "Professional computer vision development using OpenCV, YOLO, and advanced image processing techniques. I create intelligent systems for object detection, image recognition, medical imaging analysis, and real-time monitoring applications with high accuracy.",
            sticker: "/opencv-sticker.svg",
            width: 110
        },
        {
            title: "3 - n8n & Zapier",
            description: "Workflow automation specialist using n8n and Zapier for business process optimization. I design custom automation solutions that integrate multiple platforms, eliminate manual tasks, reduce operational costs, and significantly boost productivity for enterprises.",
            sticker: "/zapeir-sticker.svg",
            width: 105
        },
        {
            title: "4 - MERN Stack (MongoDB, Express.js, React.js, Node.js)",
            description: "Full-stack MERN developer creating modern web applications with MongoDB, Express.js, React.js, and Node.js. I build responsive, scalable, and secure web platforms with exceptional user experiences and optimal database performance for businesses.",
            sticker: "/javascript-sticker.svg",
            width: 110
        },
        {
            title: "5 - Flutter",
            description: "Cross-platform mobile app developer using Flutter framework for iOS and Android applications. I create high-performance, feature-rich mobile apps with native performance, beautiful UI/UX design, and seamless cross-platform compatibility for diverse industries.",
            sticker: "/flutter-sticker.svg",
            width: 105
        },
        {
            title: "6 - Firebase",
            description: "Firebase cloud services expert providing backend-as-a-service solutions for web and mobile applications. I implement real-time databases, authentication systems, cloud hosting, and serverless functions to build secure, scalable, and cost-effective digital products.",
            sticker: "/firebase-sticker.svg",
            width: 100
        },
        {
            title: "7 - SQL & NoSQL Databases",
            description: "Database architecture specialist working with SQL and NoSQL systems for data management solutions. I design efficient database schemas, optimize query performance, and implement scalable data storage solutions for AI applications and enterprise systems.",
            sticker: "/mongodb-sticker.svg",
            width: 110
        },
        {
            title: "8 - Docker",
            description: "DevOps containerization expert using Docker for application deployment and scalability. I create containerized environments that ensure consistent application performance across development, testing, and production stages with improved efficiency and resource optimization.",
            sticker: "/docker-sticker.svg",
            width: 125
        },
        {
            title: "9 - Git & GitHub",
            description: "Version control specialist using Git and GitHub for collaborative software development and project management. I implement branching strategies, code reviews, CI/CD pipelines, and maintain clean codebases for team collaboration and efficient development workflows.",
            sticker: "/github-sticker.svg",
            width: 107
        },
    ];

    return (
        <section id="skills" className="w-full h-auto flex flex-col justify-center px-5 md:px-28 border-b-2 pt-20 md:pb-[17vh] overflow-hidden">
            <div className="flex items-center gap-3 text-xl mb-10">
                <div className="w-3 h-3 bg-[var(--black)] rounded-full"></div> My Skills
            </div>

            {myDevelopmentSkills.map((item, index) => (
                <div key={index} className="mb-5 last:mb-0">
                    <SkillCard title={item.title} description={item.description} sticker={item.sticker} width={item.width} />
                </div>
            ))}
        </section>
    );
}   