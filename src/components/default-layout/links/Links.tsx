"use client";

import NavbarDataApi from "@/api/navbar-data-api";
import { cn } from "@/lib/utils";
import { NavbarLinkModel } from "@/model/navbar-link-model";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Links = () => {
  const pathname = usePathname();

  const [links, setLinks] = useState<NavbarLinkModel[]>([]);

  useEffect(() => {
    (async () => {
      const list = await NavbarDataApi();
      setLinks(list);
    })();
  });

  return (
    <>
      {links.map(({ id, title, url, icon }: NavbarLinkModel) => {
        const isActive = pathname === url;
        return (
          <Link
            key={id}
            href={url}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
              { "bg-muted text-primary ": isActive },
              { "text-muted-foreground ": !isActive }
            )}
          >
            {icon}
            {title}
          </Link>
        );
      })}
    </>
  );
};

export default Links;
