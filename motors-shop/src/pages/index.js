import { getSession } from "next-auth/react";
// Com typeScript
// import { GetServerSideProps, GetServerSideProps } from "next";

// Exemplo de redirecionamento de auth:
export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/pasta-destino",
        permanent: false,
      },
    };
  }
};

export default function Home({ repositories, date }) {
  return (
    <>
      <h1>{date}</h1>
      <ul>
        {repositories.map((repo) => (
          <li key={repo}>{repo}</li>
        ))}
      </ul>
    </>
  );
}

// export const getServerSideProps = async () => {
//   const response = await fetch("https://api.github.com/users/diego3g/repos");

//   const data = await response.json();
//   const repositoryNames = data.map((item) => item.name);

//   return {
//     props: {
//       repositories: repositoryNames,
//     },
//   };
// };

export const getStaticProps = async () => {
  const response = await fetch("https://api.github.com/users/diego3g/repos");

  const data = await response.json();
  const repositoryNames = data.map((item) => item.name);

  return {
    props: {
      repositories: repositoryNames,
      date: new Date().toISOString(),
    },
    revalidate: 5,
  };
};
