import auth from "../app/middleware";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";

export async function UserInfo() {
  const session = await auth();

  return (
    <div>
      {session ? (
        <div>
          {/* got rid of dot between user and name  */}
          {session.username}{" "}
          {/* put a "_" insted of a "." between user and id - https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps  */}
          <span className="text-xs text-zinc-400 mr-3">#{session.user_id}</span>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <span className="mr-4">Welcome, Guest!</span>
          <LoginButton />
        </div>
      )}
    </div>
  );
}
