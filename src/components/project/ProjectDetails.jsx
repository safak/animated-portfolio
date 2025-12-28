import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./projectdetails.scss";

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      slug: "issac-lord-ecommerce",
      title: "Isaac Lord E-commerce",
      heroImage: "/projectImg/issac.png",
      liveUrl: "https://www.isaaclord.co.uk/",

      description: [
        "Isaac Lord is one of the UK’s most trusted suppliers of premium hardware, and I rebuilt their entire e-commerce experience with a strong focus on performance and scalability.",
        "I researched complex e-commerce systems with large category structures and redesigned the navigation, product architecture, and CMS workflows accordingly.",
        "To improve performance, I implemented optimized GraphQL fetch patterns and caching layers that reduced listing load times from nearly 60 seconds to just 3 seconds.",
        "The final result is a fast, modern, and fully CMS-driven platform that empowers non-technical admins to manage the entire storefront with ease."
      ],

      tools: [
        "Next.js 14",
        "Redux Toolkit",
        "TypeScript",
        "Tailwind",
        "React Hook Form",
        "Framer Motion",
        "GraphQL",
        "Apollo Client"
      ]
    },

    {
      slug: "turkmen-gala-corporate-site",
      title: "Turkmen Gala Corporate Website",
      heroImage: "/projectImg/turkmangala.png",
      liveUrl: "https://turkmengala.com/",

      description: [
        "Turkmen Gala is a major industrial and energy solutions provider in Turkmenistan, and I developed their corporate website with a fully CMS-driven architecture.",
        "The project required bilingual handling (EN / RU), dynamic content sections, and a smooth navigation experience across complex service categories.",
        "I studied global energy and industrial websites to create a UI that felt modern, trustworthy, and enterprise-focused, while still being fast and lightweight.",
        "The website uses Prisma + PostgreSQL for structured content, along with Framer Motion animations that enhance visuals without affecting performance."
      ],

      tools: [
        "React.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Node.js (Express)",
        "Framer Motion",
        "Tailwind",
        "Yup Validation"
      ]
    },

    {
      slug: "buyamia-marketplace",
      title: "Buyamia Marketplace",
      heroImage: "/projectImg/buyamia.png",
      liveUrl: "https://buyamia.com/",

      description: [
        "Buyamia is a multi-vendor marketplace built to simplify online buying and selling across a wide range of product categories.",
        "I architected the platform using the MERN stack, focusing on modular design for product feeds, vendor dashboards, authentication, and cart flow.",
        "While designing the UI, I studied patterns from Amazon, Etsy, and Flipkart to implement clean product visibility, intuitive filters, and responsive layouts.",
        "The platform features reusable UI components, role-based JWT authentication, and a scalable structure designed for future vendor and product expansion."
      ],

      tools: [
        "React.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Bootstrap",
        "JavaScript",
        "JWT Auth"
      ]
    }
  ];

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="not-found">
        <h2>Project not found 🚫</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  return (
    <section className="project-details">
      {/* Hero Image */}
      <div className="project-hero">
        <img src={project.heroImage} alt={project.title} />
      </div>

      {/* Content */}
      <div className="project-content">
        <h1>{project.title}</h1>

        {/* MULTIPLE PARAGRAPHS */}
        {project.description.map((para, index) => (
          <p key={index} className="project-desc">
            {para}
          </p>
        ))}

        <div className="project-tools">
          <h2>Tech Stack</h2>
          <div className="tool-list">
            {project.tools.map((tool, i) => (
              <span key={i} className="tool-chip">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* LIVE WEBSITE BUTTON */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="live-btn"
          >
            🔗 View Live Website
          </a>
        )}
      </div>
    </section>
  );
};

export default ProjectDetails;
