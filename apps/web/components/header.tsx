import Link from "next/link";
import { SearchTrigger } from "@/components/command-search";
import { NotificationBell } from "@/components/notification-bell";
import { UserProfile } from "@/components/user-profile";

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="container-page flex py-3 items-center gap-3 sm:gap-6">
        <SearchTrigger />
        <div className="flex-1" />
        <Link
          href="/updates"
          className="hidden sm:block text-xs text-subtle hover:text-foreground transition-colors font-mono relative"
        >
          ● LIVE
        </Link>
        <Link
          href="/mcp"
          className="hidden sm:block text-xs uppercase tracking-wider text-subtle hover:text-foreground transition-colors"
        >
          MCP
        </Link>
        <Link
          href="/releases"
          className="hidden sm:block text-xs uppercase tracking-wider text-subtle hover:text-foreground transition-colors"
        >
          Releases
        </Link>
        <NotificationBell />
        <UserProfile />
      </div>
    </header>
  );
}
