// import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import User from "./components/User";

export default async function Home() {
  // const session = await getServerSession(authOptions);

  return (
    <section>
      <h1>Hello World</h1>
      {/* <p>{JSON.stringify(session)}</p> */}

      <h1>Client side</h1>
      <User />
    </section>
  );
}
