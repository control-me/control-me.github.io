import { useEffect } from "preact/hooks";
import Router from "preact-router";
import * as Milestone1 from "../docs/milestone-1.md";
import * as Profile from "../docs/profile.md";
import * as DataCollection from "../docs/data-collection.md";
import * as Landing from "../docs/landing.md";
import * as Readme from "../docs/readme.md";
import * as Rewards from "../docs/reward-datatype.md";
import * as Questions from "../docs/question-datatype.md";
import * as Gamification from "../docs/gamification.md";
import * as Principles from "../docs/principles.md";
import * as DesignSystem from "../docs/design-system.md";
import * as PageTemplates from "../docs/page-templates.md";
import * as CampaignPublishing from "../docs/campaign-publishing.md";
import * as Internationalization from "../docs/internationalization.md";
import * as Translation from "../docs/translation.md";
import * as Enterprise from "../docs/enterprise.md";
import * as ServerRendering from "../docs/server-rendering.md";
import * as CommonIssues from "../docs/common-issues.md";
import * as E2ETesting from "../docs/e2e-testing.md";
import * as CodeQuality from "../docs/code-quality.md";
import * as Palette from "../docs/palette.md";
import * as Metaballs from "../docs/metaballs.md";
import * as Curvature from "../docs/curvature.md";
import * as AppliedML from "../docs/applied-ml.md";
import * as Dependencies from "../docs/dependencies.md";
import Markup from "preact-markup";
import Logo from "./logo";

import "./app.css";

export const routes = [
  {
    path: "/",
    component: Readme,
    name: "Home",
  },
  {
    path: "/dependencies",
    component: Dependencies,
    name: "Depdendencies",
  },
  {
    path: "/principles",
    component: Principles,
    name: "Principles",
  },
  {
    path: "/questions",
    component: Questions,
    name: "Questions",
  },
  {
    path: "/rewards",
    component: Rewards,
    name: "Rewards",
  },
  {
    path: "/gamification",
    component: Gamification,
    name: "Gamification",
  },
  {
    path: "/design-system",
    component: DesignSystem,
    name: "Design System",
  },
  {
    path: "/page-templates",
    component: PageTemplates,
    name: "Page Templates",
  },
  {
    path: "/campaign-publishing",
    component: CampaignPublishing,
    name: "Campaign Publishing",
  },
  {
    path: "/profile",
    component: Profile,
    name: "Accounts",
  },
  {
    path: "/data-collection",
    component: DataCollection,
    name: "Data Collection",
  },
  {
    path: "/internationalization",
    component: Internationalization,
    name: "Internationalization",
  },
  {
    path: "/translation",
    component: Translation,
    name: "Translation",
  },
  {
    path: "/enterprise",
    component: Enterprise,
    name: "Enterprise",
  },
  {
    path: "/server-rendering",
    component: ServerRendering,
    name: "Server Rendering",
  },
  {
    path: "/common-issues",
    component: CommonIssues,
    name: "Common Issues",
  },
  {
    path: "/milestone-1",
    component: Milestone1,
    name: "Milestone 1",
  },
  {
    path: "/e2e-testing",
    component: E2ETesting,
    name: "E2E Testing",
  },
  {
    path: "/code-quality",
    component: CodeQuality,
    name: "Code Quality",
  },
  {
    path: "/landing",
    component: Landing,
    name: "Landing",
  },
  {
    path: "/palette",
    component: Palette,
    name: "Palette",
  },
  {
    path: "/metaballs",
    component: Metaballs,
    name: "Metaballs",
  },
  {
    path: "/curvature",
    component: Curvature,
    name: "Continuous Curvature",
  },
  {
    path: "/applied-ml",
    component: AppliedML,
    name: "Applied Machine Learning",
  },
];

type RouteProps = {
  html: string;
  path: string;
  attributes?: Record<string, unknown>;
  toc?: { level: string; content: string }[];
};
export function App() {
  /**
   * Render the markdown as a preact component
   * @param {string} name
   */
  function Route({ html, toc, attributes, path }: RouteProps) {
    useEffect(() => {
      // add a table of contents
      const tocEl = document.querySelector("#toc");
      if (tocEl && toc) {
        tocEl.innerHTML = /*html*/ `<ul class="list-none p-0">${toc.reduce(
          (html, { level, content }) => {
            html += /*html*/ `<li class="toc-item toc-level-${level}"><a href="#${content}">${content}</a></li>`;
            return html;
          },
          ""
        )}</ul>`;
      }
      // set document title and description
      const title = document.querySelector("title");
      const description = document.querySelector("meta[name=description]");
      if (attributes) {
        if (title) title.innerHTML = attributes.title as string;
        if (description)
          description.setAttribute("content", attributes.description as string);
        document.title = attributes.title as string;
      }

      // if matches media for dark mode
      let theme = {
        surface: "#fafafa",
        background: "#ffffff"
      };
      if (matchMedia("(prefers-color-scheme: dark)").matches) {
        // set background color for html document element
        theme.surface = "#1e1e1e";
        theme.background = "#121212";
      }
      let el = document.getElementById("theme-vars");
      if (!el) {
        el = document.createElement("style");
        el.setAttribute("id", "theme-vars");
        document.head.appendChild(el);
      }
      el.innerHTML = /*css*/`
      :root {
        --background: ${theme.background};
        --surface: ${theme.surface};
      }`
      
    }, []);
    // if user prefers dark color scheme
    useEffect(() => {
      const query = "(prefers-color-scheme: dark)";
      let darkTheme = matchMedia(query).matches;
      function listener(e: MediaQueryListEvent) {
        darkTheme = e.matches;
      }
      matchMedia(query).addEventListener("change", listener);
      return () => {
        matchMedia(query).removeEventListener("change", listener);
      }
    }, []);
    return (
      <main class="container mx-auto bg-surface dark:text-white rounded-lg border border-gray-300 dark:border-gray-700 my-6 flex flex-wrap lg:flex-nowrap">
        <nav class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 min-w-[14rem] w-full lg:w-auto">
          <Logo />
          <p class="font-medium leading-8 mt-4">Docs pages</p>
          <ul class="list-none p-0">
            {routes.map((route) => {
              // append &middot; if the route is the current path
              return (
                <li key={route.path}>
                  {path === route.path && <>&middot;&nbsp;</>}
                  <a href={route.path}>{route.name}</a>
                </li>
              );
            })}
          </ul>
          <p class="font-medium leading-8">Current page</p>
          <div id="toc"></div>
        </nav>
        <article class="max-w-[100ch] mx-auto p-4 sm:p-6 flex-grow">
          <Markup
            {...{
              markup: html,
              trim: false,
              type: "html",
            }}
          />
        </article>
      </main>
    );
  }

  return (
    <>
      <Router>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} {...route.component} />
        ))}
      </Router>
    </>
  );
}
