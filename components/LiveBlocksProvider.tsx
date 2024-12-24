"use client";
import { LiveblocksProvider } from "@liveblocks/react/suspense";

function LiveBlocksProvider({ children }: { children: React.ReactNode }) {
  if (!process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY) {
    throw new Error("NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY is Not Set");
  }
  return (
    <LiveblocksProvider throttle={16} authEndpoint={"/auth-endpiont"}>
      {children}
    </LiveblocksProvider>
  );
}

export default LiveBlocksProvider;
