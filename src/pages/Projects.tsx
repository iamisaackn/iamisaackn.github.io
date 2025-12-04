import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Code2 } from "lucide-react";

interface Project {
  title: string;
  region: string;
  goal: string;
  methodology: string;
  outcome: string;
  technologies: string[];
  category: string;
  link?: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "TutorMCP – AI Tutor",
      region: "Global",
      goal: "Provide AI-powered learning tools through the Model Context Protocol (MCP) with real-time streaming and agent compatibility.",
      methodology:
        "Built on MCP with a Gradio interface and API. Provides four interactive tools: concept explanation, text summarization, flashcard generation, and quiz creation. Uses streaming responses for low-latency interaction between AI agents and human learners.",
      outcome:
        "Delivers a smooth educational experience, enables automated tutoring via MCP agents, and offers an extensible framework for future tools such as code explainers or diagram generators.",
      technologies: ["Python 3.10+","Gradio","OpenAI API","httpx/requests","dotenv", "Model Context Protocol (MCP)"],
      category: "AI Education Toolkit",
      link: "https://github.com/iamisaackn/AI-TutorMCP",
    },
    {
      title: "Predictive Modeling of Bank Marketing Campaigns",
      region: "Kenya",
      goal: "Develop a predictive classification model to determine whether a banking client will subscribe to a term deposit, enabling smarter and more efficient marketing campaigns.",
      methodology: "Used the Bank Marketing Dataset from the UCI Machine Learning Repository. Performed data preprocessing, exploratory data analysis, feature engineering, and trained multiple classification models including Logistic Regression, Decision Tree, Random Forest, XGBoost, and SVM. Evaluated models using accuracy, precision, recall, and F1-score, and applied cross-validation for robustness.",
      outcome: "Identified key demographic, financial, and campaign-related factors that influence subscription likelihood. Found that Decision Tree achieved the highest accuracy (~70%), while Logistic Regression and Random Forest delivered balanced performance. Provided data-driven recommendations to optimize marketing campaigns and improve ROI.",
      technologies: ["R Programming", "Machine Learning", "Data Visualization", "Statistical Modeling"],
      category: "Data Science – Classification",
      link: "https://github.com/iamisaackn/DS_Avengers_Bank_Marketing",
    },
    {
    title: "Heart Failure Analysis and Prediction",
    region: "Global Healthcare Datasets",
    goal: "Predict heart failure risk based on patient medical records.",
    methodology:
      "Performed data preprocessing (cleaning, analysis, visualization), correlation assessment, and machine learning model development using Python. Applied statistical and ML techniques to predict early signs of heart failure.",
    outcome:
      "Improved early detection of heart failure risk, enabling proactive and data-driven healthcare interventions.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    category: "Healthcare Analytics",
    link: "https://github.com/iamisaackn/IKN-Heart-Failure-Prediction",
    },
    {
      title: "Thyroid Risk Analysis and Prediction",
      region: "Medical Datasets",
      goal:
        "Identify individuals at high risk of thyroid disorders using predictive modeling and data analysis.",
      methodology:
        "Conducted data cleaning, statistical analysis of thyroid markers, and developed machine learning classification models for risk prediction and pattern detection.",
      outcome:
        "Enhanced diagnostic accuracy and optimized patient treatment recommendations through predictive insights.",
      technologies: ["Python", "R", "Scikit-learn", "XGBoost", "Seaborn"],
      category: "Medical Data Science",
      link: "https://github.com/iamisaackn/IKN-Thyroid-Risk-Prediction",
    },
    {
      title: "Fleet Management Systems (FMS): A Case Study of Verizon Connect in Health",
      region: "Kenya",
      goal:
        "Enhance healthcare logistics by improving emergency response, patient monitoring, route optimization, driver behavior, and resource allocation.",
      methodology:
        "Conducted a detailed case study on Verizon Connect, evaluating its impact on healthcare logistics through data collection, performance assessments, and stakeholder feedback.",
      outcome:
        "Improved healthcare delivery efficiency, cost optimization, and infrastructure readiness while addressing challenges in training, system adoption, and operational costs.",
      technologies: ["SQL", "Power BI", "Tableau", "Python"],
      category: "Data Analytics & Logistics",
      link: "https://www.researchgate.net/publication/386086740_FLEET_MANAGEMENT_SYSTEMS_A_CASE_STUDY_OF_VERIZON_CONNECT_IN_HEALTH",
    },
    {
      title: "InsightsAI (Intelligent Business Document Analysis Tool)",
      region: "AI, Natural Language Processing (NLP), Business Intelligence",
      goal:
        "Build an AI-powered assistant that extracts actionable business insights from uploaded documents using natural language queries.",
      methodology:
        "Integrated LangChain, HuggingFace Embeddings, and FAISS vector databases to enable context-based document retrieval. Used Groq LLaMA models for question answering within a Streamlit interface.",
      outcome:
        "A fully functional web app that allows business users to query operational data in plain English, generating concise, actionable insights without manual analysis.",
      technologies: ["Python", "LangChain", "FAISS", "HuggingFace", "Streamlit", "Groq LLaMA"],
      category: "Artificial Intelligence",
      link: "https://github.com/iamisaackn/InsightsAI-ChatPdf",
    },
    {
      title: "ChatDoc (Context Aware Document QA Chatbot)",
      region: "Artificial Intelligence, Natural Language Processing (NLP), Software Engineering",
      goal:
        "Develop an interactive chatbot capable of answering user queries based on uploaded or stored business documents using contextual understanding.",
      methodology:
        "Implemented LangChain with HuggingFace Embeddings for text vectorization and FAISS for similarity search; integrated Groq LLaMA large language model within a Streamlit interface to deliver real-time, accurate document-based responses.",
      outcome:
        "A functional web chatbot that retrieves and summarizes relevant document information, improving business insight extraction and decision efficiency.",
      technologies: ["Python", "LangChain", "FAISS", "Groq LLaMA", "Streamlit", "HuggingFace"],
      category: "Machine Learning",
      link: "https://github.com/iamisaackn/ChatDoc",
    },
    {
    title: "Real Estate Management System",
    region: "Software Engineering, Database Design, Business Analytics",
    goal:
      "Develop an advanced relational database system to manage client relationships, property listings, transactions, and real estate market analytics.",
    methodology:
      "Designed SQL schemas for entities such as properties, tenants, leases, and payments. Implemented CRUD operations, aggregation queries, joins, subqueries, and reporting analytics. Integrated GIS mapping, automated workflows, and data security auditing.",
    outcome:
      "Delivered a secure, automated database management system that optimizes property tracking, improves operational efficiency, and enables data-driven decision-making for real estate businesses.",
    technologies: ["MySQL", "SQL", "Advanced SQL", "Power BI", "VS Code", "Git"],
    category: "Database Systems",
    link: "https://github.com/Kirbit04/Real-Estate-Management-system/tree/IsaacNgugi1049049",
    },
    {
      title: "Seed Bank Management System",
      region: "Agriculture Technology, Database Systems",
      goal:
        "Build a database-driven web system to manage seed inventory, institutions, testing, transactions, and storage with secure administrative workflows.",
      methodology:
        "Developed backend SQL scripts for views, stored procedures, and permission management. Implemented PHP-based web interfaces for administrators and users to manage data efficiently. Included aggregation functions, case statements, and advanced SQL queries for insights.",
      outcome:
        "A centralized system that streamlines agricultural data management, enhances transparency in seed distribution, and supports efficient tracking of institutional transactions.",
      technologies: ["MySQL", "PHP", "HTML", "CSS", "SQL", "JavaScript"],
      category: "Database Management & Web Systems",
      link: "https://github.com/iamisaackn/Seed-Bank-Management-System",
    },
    {
    title: "AI-Fashion-Image-Classification",
    region: "Global Fashion Industry, E-commerce, AI Research",
    goal:
      "Develop an AI model capable of classifying clothing items to enhance design, marketing, and customer experience in fashion e-commerce.",
    methodology:
      "Used the Fashion-MNIST dataset with a Convolutional Neural Network (CNN) model. Preprocessed images, trained and validated using accuracy, precision, recall, and F1-score metrics. Deployed model for real-time classification and feedback integration.",
    outcome:
      "Achieved 90% accuracy across multiple fashion categories. Identified improvement areas for better precision using advanced architectures and real-time deployment feedback.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Scikit-learn", "Streamlit"],
    category: "Computer Vision & Deep Learning",
    link: "https://github.com/iamisaackn/AI-Fashion-Image-Classification",
    },
    {
      title: "AI-Driven Plant Disease Detection System (PlantPatrol)",
      region: "Agriculture, Climate Change, and Food Security",
      goal:
        "Develop an AI-based image recognition system to detect plant diseases in real time and support farmers with accessible diagnostic tools.",
      methodology:
        "Trained Convolutional Neural Networks (CNNs) on plant leaf images to classify diseases. Developed a WhatsApp chatbot for accessibility. Integrated Grad-CAM for explainability and conducted cross-validation for robust results.",
      outcome:
        "Achieved 95% accuracy in plant disease classification. Empowered farmers through real-time disease detection, reduced pesticide reliance, and improved food security outcomes.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit", "WhatsApp API"],
      category: "Agricultural AI & Image Recognition",
      link: "https://github.com/iamisaackn/AI-Driven-Plant-Disease-Detection-System",
    },
    {
      title: "Box Office Movies Analysis: EDA and Linear Regression Project",
      region: "Entertainment & Business Analytics",
      goal:
        "Analyze global box office movie data to identify factors influencing film success and develop data-driven recommendations for a new movie studio.",
      methodology:
        "Performed Exploratory Data Analysis (EDA), statistical tests, and built linear regression models to predict box office revenue. Investigated variables like production budget, genre, and release timing using Python, Pandas, and Matplotlib.",
      outcome:
        "Identified that Drama and Documentary genres yield the highest ratings, and summer/holiday releases generate peak profits. Built predictive models achieving 0.50 R², guiding strategic film production and release decisions.",
      technologies: [
        "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Tableau", "Jupyter Notebook",
      ],
      category: "Data Analysis & Predictive Modeling",
      link: "https://github.com/Gladwellchebelyon/GROUP7_BOX_OFFICE_MOVIES_ANALYSIS/tree/IsaacNgugi",
    },
    {
      title: "Predictive Analytics for Waterpoint Operational Status in Tanzania",
      region: "Water Resource Management & Public Infrastructure",
      goal:
        "Develop a predictive model to classify the operational status of waterpoints in Tanzania, enabling proactive maintenance and improved access to clean water.",
      methodology:
        "Applied machine learning classification algorithms (Logistic Regression, Decision Trees, Random Forest) on a dataset of waterpoint attributes. Conducted extensive preprocessing, feature engineering, and model evaluation using ROC-AUC and confusion matrices for performance validation.",
      outcome:
        "Achieved high predictive accuracy in identifying functional, repair-needed, and non-functional waterpoints. Provided actionable insights for the Tanzanian Ministry of Water and NGOs to prioritize maintenance and resource allocation.",
      technologies: [
        "Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook", "Random Forest", "Logistic Regression"
      ],
      category: "Predictive Analytics & Water Resource Optimization",
      link: "https://github.com/iamisaackn/Predictive-Analytics-for-Waterpoint-Operational-Status-in-Tanzania",
    },
    {
      title: "Twitter Sentiment Analysis",
      region: "Social Media Analytics & NLP",
      goal:
        "Develop a Natural Language Processing (NLP) model to analyze public sentiment from Tweets about Apple and Google products, enabling data-driven marketing and product decisions.",
      methodology:
        "Cleaned and preprocessed over 9,000 Tweets from CrowdFlower. Applied TF-IDF vectorization and lemmatization for text normalization. Trained multiple classification models including Logistic Regression, Naive Bayes, and Random Forest. Evaluated using cross-validation, accuracy, precision, recall, and F1-score metrics. Used LIME for explainability to interpret individual predictions.",
      outcome:
        "Achieved 86.7% accuracy using Logistic Regression. Identified key sentiment indicators and class imbalances in user feedback. Provided actionable insights for improving customer satisfaction and brand strategies.",
      technologies: ["Python", "Scikit-learn", "NLTK", "TF-IDF", "Pandas", "Matplotlib", "LIME"],
      category: "Natural Language Processing & Sentiment Analysis",
      link: "https://github.com/MONISH254/Twitter_Sentiment_Analysis/tree/Isaac",
    },
    {
      title: "Company Management System",
      region: "Business and Enterprise Solutions",
      goal:
        "Develop a full-stack company management system to streamline employee, department, and project management using a database-driven architecture.",
      methodology:
        "Configured MySQL Workbench and XAMPP for local database setup. Built and migrated database schemas using Entity Framework (EF) Core. Developed the application in C# with .NET, integrating HTML, CSS, and JavaScript for the frontend. Ensured smooth deployment and debugging using Visual Studio.",
      outcome:
        "Successfully implemented a scalable company management system with efficient CRUD operations and data persistence. Improved business data organization and automated internal management processes.",
      technologies: [
        "C#", ".NET", "Entity Framework Core", "MySQL", "XAMPP", "Visual Studio", "HTML", "CSS", "JavaScript"
      ],
      category: "Enterprise Software & Database Systems",
      link: "https://github.com/iamisaackn/CompanyManagementSystem",
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-gradient-hero">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl mb-4">Turning Data into Business Growth</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Impactful Data & AI solutions delivered across industries
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="shadow-medium hover-lift cursor-pointer transition-smooth animate-fade-in-up"
              onClick={() => setSelectedProject(project)}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="flex items-center gap-1 text-sm">
                  <Code2 className="h-3 w-3" />
                  {project.region}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-4 line-clamp-3">{project.goal}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline">{selectedProject.category}</Badge>
                    <Badge>{selectedProject.region}</Badge>
                  </div>
                  <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline text-sm"
                    >
                      View Project ↗
                    </a>
                  )}
                  <DialogDescription className="text-base pt-2">
                    {selectedProject.goal}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 pt-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Methodology</h4>
                    <p className="text-foreground/80">{selectedProject.methodology}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Outcome</h4>
                    <p className="text-foreground/80">{selectedProject.outcome}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/*Closing Section*/}
        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold mb-2">Let’s Turn Your Data into Strategy</h2>
          <p className="text-muted-foreground mb-4">
            Whether you’re a startup or SME, We help you uncover the insights hidden in your data.
          </p>
          <a
            href="mailto:isaackngugi.ds@gmail.com"
            className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition"
          >
            Work With Us
          </a>
        </div>

      </div>
    </div>
  );
};

export default Projects;
