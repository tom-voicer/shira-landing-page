// import { NextApiRequest } from "next";

export default function getRootUrl() {
  if (typeof window !== 'undefined') {
    return `${window.location.protocol}//${window.location.hostname}${
      window.location.port ? `:${window.location.port}` : ''
    }`;
  }
  return '';
}

// export async function getServerSideProps({ req }: { req: NextApiRequest }) {
//   const rootUrl = getRootUrl(req);
//   return {
//     props: {
//       rootUrl: "66666 " + rootUrl,
//     },
//   };
// }
