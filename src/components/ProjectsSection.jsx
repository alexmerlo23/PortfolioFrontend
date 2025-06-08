import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 3,
    title: "OnTask",
    description:
      "Calendar application for teachers, students, and parents to keep track of assignments and class events.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://ontask-1.onrender.com/login",
    githubUrl: "https://github.com/alexmerlo23/OnTask",
  },
  {
    id: 1,
    title: "ANNCURA",
    description: "Educational site and tool for neonatal nurses in north Florida. Collaboration with UF health Dr. Michael Weiss.",
    image: "/projects/project1.png",
    tags: ["Wordpress", "React", "Jest"],
    demoUrl: "https://ufneocare.wordpress.com/",
    githubUrl: "https://github.com/alexmerlo23/NeoCare",
  },
  {
    id: 2,
    title: "Food Genie",
    description:
      "Giving users an intuitive UI for personalized recipe recommendations based on their dietary needs",
    image: "/projects/project2.png",
    tags: ["React", "Spoonacular API"],
    demoUrl: "https://foodgiene.netlify.app/",
    githubUrl: "https://github.com/alexmerlo23/FoodGiene",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex w-full items-center">
                  <div className="mx-auto" style={{ marginLeft: '2rem' }}>
                    <a
                      className="cosmic-button w-fit flex items-center gap-2"
                      target="_blank"
                      href={project.demoUrl}
                    >
                      Check It Out! <ArrowRight size={16} />
                    </a>
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 ml-auto"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/alexmerlo23"
          >
            My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};