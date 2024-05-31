import Image from "next/image";
import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { PuffLoader } from "react-spinners";
import ReactTooltip from "react-tooltip";
import RepoCard from "../components/CardComponent/RepoCard";
import { portfolioSettings } from "@/utils/portfolioSettings";

const GithubPage = ({ ...props }) => {
  const [data, setData] = useState([""]);
  const [loading, setLoading] = useState(true);
  const { user, repos } = data;

  useEffect(() => {
    if (data != "") {
      setLoading(false);
    } else {
      githubApi();
    }
  }, [data]);

  const labels = {
    months: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    weekdays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    totalCount: "{{count}} contribuições em {{year}}",
    legend: {
      less: "Menos",
      more: "Mais",
    },
  };

  const githubApi = async () => {
    const userRes = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
      {
        headers: {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_API_KEY}`,
          "X-GitHub-Api-Version": `2022-11-28`,
          Accept: `application/vnd.github+json`,
        },
      }
    );
    const user = await userRes.json();
    const repoRes = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
      {
        headers: {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_API_KEY}`,
          "X-GitHub-Api-Version": `2022-11-28`,
          Accept: `application/vnd.github+json`,
        },
      }
    );
    const repoJson = await repoRes.json();
    let repoDates = await Promise.all(
      Array.from(repoJson).map(async (repo, index) => {
        const commitsRes = await fetch(
          `https://api.github.com/repos/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/${repo.name}/commits`,
          {
            headers: {
              Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_API_KEY}`,
              "X-GitHub-Api-Version": `2022-11-28`,
              Accept: `application/vnd.github+json`,
            },
          }
        );
        const commits = await commitsRes.json();
        return {
          id: repo.id,
          repoName: repo.name,
          repoDate: commits[0].commit.author.date,
        };
      })
    );
    repoDates = Array.from(repoDates)
      .sort((a, b) => new Date(b.repoDate) - new Date(a.repoDate))
      .slice(0, portfolioSettings.contentGithub.limitRepos);

    const repos = Array.from(repoJson)
      .map((item, idx) => {
        const filt = Array.from(repoDates).filter((item2) => {
          return item2.id === item.id;
        });
        if (filt.length > 0) {
          return {
            repoDate: filt[0].repoDate,
            ...item,
          };
        }
      })
      .filter((i) => i)
      .sort((a, b) => new Date(b.repoDate) - new Date(a.repoDate));
    setData({ user, repos });
  };

  return (
    <>
      {loading ? (
        <div>
          <PuffLoader
            color={portfolioSettings.contentGithub.calendarTheme.level4}
            loading={loading}
            size={200}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="mb-7 items-center flex flex-col">
          <div className="z-10 flex max-sm:w-11/12 w-1/2 p-3 px-10 items-center justify-center rounded-t-lg gap-10 text-white bg-violet-700/75 ">
            <div className="flex flex-col items-center justify-center space-y-3">
              {/* Avatar e Informações */}
              <Image
                src={user.avatar_url}
                className="flex"
                alt={user.login}
                width={100}
                height={100}
                style={{ borderRadius: "50px" }}
              />
              <div className="flex items-center justify-center space-x-5">
                <h3>{user.public_repos} Repositórios</h3>
                <h3>{user.followers} Seguidores</h3>
              </div>
            </div>
          </div>
          <div></div>
          <div className="grid items-center justify-center w-1/2 grid-cols-2 grid-rows-3 gap-6 max-sm:grid max-sm:w-3/4 max-sm:grid-cols-1 max-sm:grid-rows-1 max-sm:gap-4">
            {repos.map((repo, idx) => (
              <RepoCard key={repo.id + "-" + idx} repo={repo} />
            ))}
            {/* Container dos projetos */}
          </div>
          <div className="text-white mt-10">
            {/* <GitHubCalendar
              username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
              theme={portfolioSettings.contentGithub.calendarTheme}
              labels={labels}
              dateFormat={"dd/MM/yyyy"}
              showWeekdayLabels
              blockSize={10}
              blockRadius={10}
              // hideColorLegend
              // hideMonthLabels
            >
              <ReactTooltip html />
            </GitHubCalendar> */}
          </div>
        </div>
      )}
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: { title: "github.md" },
  };
}

export default GithubPage;
