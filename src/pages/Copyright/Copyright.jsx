import React from "react";
import { THIRDPARTYPROJECTS } from "./thirdPartyProjects";

export const Copyright = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[64px] font-roboto bg-white">
      <div className="m-10 max-w-[1024px]">
        <h1 className="text-[72px] font-[700]">Special Thanks</h1>

        <p className="mb-10 text-[50px] font-thin">
          We would like to express our sincere gratitude to the following
          third-party projects that have made this possible.
          <ul className="mt-5 gap-10 items-center text-[50px]">
            {THIRDPARTYPROJECTS.map((project) => (
              <li className="items-center">
                <a
                  href={project.weblink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[400] hover:text-cyan-400"
                >
                  <p>{project.projecttitle}</p>
                </a>

                <p className="text-[30px]">{project.description}</p>
              </li>
            ))}
          </ul>
        </p>

        <p className="mb-10 text-[50px] font-thin">
          We are deeply grateful to the open-source community for their
          invaluable contributions. Thank you for your dedication and hard work!
        </p>
      </div>

      <section className="mt-52 h-[200px] place-content-end w-screen bg-pattern">
        <img src="/ReactTube_Logo-White.png" className="h-16 m-10 pt-5" />
      </section>
    </div>
  );
};
