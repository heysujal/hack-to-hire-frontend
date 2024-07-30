import React from "react";

import { Dock, DockIcon } from "../Dock/Dock";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { SiIndigo } from "react-icons/si";
import { Link } from "react-router-dom";
import "./DockMenu.css";

export type IconProps = React.HTMLAttributes<SVGElement>;
const Icons = {
  home: (props: IconProps) => <GoHomeFill {...props} size={200} />,
  indigo: (props: IconProps) => <SiIndigo {...props} size={200} />,
  about: (props: IconProps) => <BsInfoCircleFill {...props} size={200} />,
  support: (props: IconProps) => <MdSupportAgent {...props} size={200} />,
};

export function DockMenu() {
  return (
    <div className="fixed bottom-3 inset-x-0">
      <Dock magnification={60} distance={40}>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-2 text-indigo-900">
          <Link to={""}>
            <Icons.home className="size-full" />
          </Link>
        </DockIcon>

        {/* <DockIcon className="bg-black/10 dark:bg-white/20 p-2 text-blue-900"> */}
        <DockIcon className="bg-indigo-800/90 p-3 text-white">
          <Link to={"tracker"}>
            <Icons.indigo className="size-full" />
          </Link>
        </DockIcon>

        <DockIcon className="bg-black/10 dark:bg-white/10 p-2 text-indigo-900">
          <Link to={"about"}>
            <Icons.about className="size-full" />
          </Link>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-2 text-indigo-900">
          <Link to={"support"}>
            <Icons.support className="size-full" />
          </Link>
        </DockIcon>
      </Dock>
    </div>
  );
}
