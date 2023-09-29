import { Badge } from "../ui/Badge";
import { Check } from "lucide-react";
import CourseTechIcon from "./CourseTechIcon";
import CourseHeadingActions from "./CourseHeadingActions";
import Image from "next/image";

interface CourseHeadingProps {
  title: string;
  subtitle: string;
  tags: {
    schedules: string[];
    status: string[];
  };
  highlights: string[];
  techs?: string[];
  slug: string;
  thumbnail: string;
  background?: {
    from: string;
    to: string;
  };
  trialUrl?: string;
}

const techIcons = {
  html: {
    title: "HTML",
    src: "/assets/techs/html.svg",
  },
  css: {
    title: "CSS",
    src: "/assets/techs/css.svg",
  },
  js: {
    title: "Javascript",
    src: "/assets/techs/js.svg",
  },
  react: {
    title: "ReactJS",
    src: "/assets/techs/react.svg",
  },
  git: {
    title: "Git",
    src: "/assets/techs/git.svg",
  },
  github: {
    title: "Github",
    src: "/assets/techs/github.svg",
  },
  node: {
    title: "NodeJS",
    src: "/assets/techs/node.svg",
  },
  tailwind: {
    title: "TailwindCSS",
    src: "/assets/techs/tailwind.svg",
  },
  webpack: {
    title: "Webpack",
    src: "/assets/techs/webpack.svg",
  },
  npm: {
    title: "npm",
    src: "/assets/techs/npm.svg",
  },
  mongo: {
    title: "MongoDB",
    src: "/assets/techs/mongo.svg",
  },
  express: {
    title: "ExpressJS",
    src: "/assets/techs/express.svg",
  },
  postgre: {
    title: "Postgre",
    src: "/assets/techs/postgre.svg",
  },
  python: {
    title: "Python",
    src: "/assets/techs/python.svg",
  },
  sql: {
    title: "SQL",
    src: "/assets/techs/sql.svg",
  },
  numpy: {
    title: "Numpy",
    src: "/assets/techs/numpy.svg",
  },
  pandas: {
    title: "Pandas",
    src: "/assets/techs/pandas.svg",
  },
  matplotlib: {
    title: "Matplotlib",
    src: "/assets/techs/matplotlib.svg",
  },
  seaborn: {
    title: "Seaborn",
    src: "/assets/techs/seaborn.svg",
  },
  plotly: {
    title: "Plotly",
    src: "/assets/techs/plotly.svg",
  },
  java: {
    title: "Java",
    src: "/assets/techs/java.svg",
  },
  springboot: {
    title: "Springboot",
    src: "/assets/techs/springboot.svg",
  },
  restful: {
    title: "Restful",
    src: "/assets/techs/restful.svg",
  },
  hibernate: {
    title: "Hibernate",
    src: "/assets/techs/hibernate.svg",
  },
  springdata: {
    title: "Spring Data",
    src: "/assets/techs/springdata.svg",
  },
  thymeleaf: {
    title: "Thymeleaf",
    src: "/assets/techs/thymeleaf.svg",
  },
  junit: {
    title: "Junit",
    src: "/assets/techs/junit.svg",
  },
  mockito: {
    title: "Mockito",
    src: "/assets/techs/mockito.svg",
  },
  postman: {
    title: "Postman",
    src: "/assets/techs/postman.svg",
  },
  intellij: {
    title: "Intellij",
    src: "/assets/techs/intellij.svg",
  },
  springsecurity: {
    title: "Spring Security",
    src: "/assets/techs/springsecurity.svg",
  },
  springcloud: {
    title: "Spring Cloud",
    src: "/assets/techs/springcloud.svg",
  },
  docker: {
    title: "Docker",
    src: "/assets/techs/docker.svg",
  },
  dockercompose: {
    title: "Docker Compose",
    src: "/assets/techs/dockercompose.svg",
  },
  redis: {
    title: "Redis",
    src: "/assets/techs/redis.svg",
  },
  kafka: {
    title: "Kafka",
    src: "/assets/techs/kafka.svg",
  },
  websocket: {
    title: "Websocket",
    src: "/assets/techs/websocket.svg",
  },
  xampp: {
    title: "XAMPP",
    src: "/assets/techs/xampp.svg",
  },
  wamp: {
    title: "WAMP",
    src: "/assets/techs/wamp.svg",
  },
  mamp: {
    title: "MAMP",
    src: "/assets/techs/mamp.svg",
  },
  mysql: {
    title: "MySQL",
    src: "/assets/techs/mysql.svg",
  },
  ajax: {
    title: "AJAX",
    src: "/assets/techs/ajax.svg",
  },
  json: {
    title: "JSON",
    src: "/assets/techs/json.svg",
  },
  xml: {
    title: "XML",
    src: "/assets/techs/xml.svg",
  },
  laravel: {
    title: "Laravel",
    src: "/assets/techs/laravel.svg",
  },
  wordpress: {
    title: "Wordpress",
    src: "/assets/techs/wordpress.svg",
  },
  shopify: {
    title: "Shopify",
    src: "/assets/techs/shopify.svg",
  },
};

export default function CourseHeading({
  title,
  subtitle,
  tags,
  highlights,
  techs,
  slug,
  thumbnail,
  background,
  trialUrl,
}: CourseHeadingProps) {
  return (
    <section
      className="py-16 pb-40 bg-black text-muted clip-path-polygon-[0_0,_100%_0%,_100%_90%,_0%_100%] lg:clip-path-polygon-[0_0,_100%_0%,_100%_80%,_0%_100%] mb-10"
      style={{
        background: `linear-gradient(to right,  ${
          background?.from || "#000"
        } 0%,${background?.to || "#000"} 100%)`,
      }}
    >
      <div className="container">
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div className="flex flex-col items-center max-w-2xl space-y-8 text-center lg:text-left lg:items-start">
            <div className="space-y-4">
              <div className="space-y-3">
                {tags.status.length > 0 ? (
                  <ul className="flex items-center justify-center gap-1 lg:justify-start">
                    {tags.status.map((s) => (
                      <li key={s}>
                        <Badge variant="secondary">{s}</Badge>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <h1 className="text-4xl font-bold capitalize lg:text-5xl">
                  {title}
                </h1>
              </div>

              <p className="sm:text-lg text-muted/90">{subtitle}</p>
            </div>

            <CourseHeadingActions slug={slug} trialUrl={trialUrl} />

            {techs && techs.length > 0 && (
              <ul className="flex flex-wrap items-center justify-center gap-4">
                {techs.map((tech) => {
                  if (Object.keys(techIcons).includes(tech)) {
                    return (
                      <CourseTechIcon
                        title={techIcons[tech as keyof typeof techIcons].title}
                        src={techIcons[tech as keyof typeof techIcons].src}
                        key={tech}
                      />
                    );
                  }
                })}
              </ul>
            )}

            {highlights.length > 0 && (
              <ul className="space-y-2 lg:mx-0">
                {highlights.map((highlight) => (
                  <li
                    className="flex items-center gap-2 font-medium sm:gap-4 sm:text-lg"
                    key={highlight}
                  >
                    <div className="p-1 rounded-full bg-muted">
                      <Check
                        strokeWidth={3}
                        className="w-3 h-3 text-primary sm:w-4 sm:h-4"
                      />
                    </div>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="hidden lg:block">
            <div className="relative w-[300px] lg:w-[400px] aspect-[1/1]">
              <Image
                src={thumbnail}
                alt={title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
