import classNames from "classnames";
import Link from "next/link";
import {
  BsBasketFill,
  BsFillArchiveFill,
  BsPersonPlusFill,
  BsStack,
} from "react-icons/bs";

interface SideBarItemProps {
  icon: React.ReactNode;
  title: string;
  link: string;
  active: boolean;
}

const SideBarItem = (props: SideBarItemProps) => {
  return (
    <Link href={props.link}>
      <a
        className={classNames(
          "w-9/12 p-4 flex justify-start items-center gap-5 hover:bg-white hover:text-violet-700 dark:hover:text-gray-900 rounded-xl",
          {
            "bg-white text-violet-700 dark:bg-white dark:text-gray-900":
              props.active,
            "bg-violet-700 text-white dark:bg-gray-900 dark:text-white":
              !props.active,
          }
        )}
      >
        {props.icon}
        <p className="text-2xl font-semibold leading-relaxed">{props.title}</p>
      </a>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <aside className="h-screen w-1/5 bg-violet-700 dark:bg-gray-900 flex flex-col justify-center">
      <div className="flex flex-col items-center gap-2">
        <SideBarItem
          icon={<BsBasketFill size={48} />}
          title="Pedidos"
          link="#pedidos"
          active={false}
        />

        <SideBarItem
          icon={<BsFillArchiveFill size={48} />}
          title="Produtos"
          link="#produtos"
          active={false}
        />

        <SideBarItem
          icon={<BsStack size={48} />}
          title="Mesas"
          link="#mesas"
          active={false}
        />

        <SideBarItem
          icon={<BsPersonPlusFill size={48} />}
          title="Atendentes"
          link="#atendentes"
          active={false}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
