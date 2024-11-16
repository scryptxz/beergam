import { Icon } from "@iconify/react";
import Image from "next/image";
import NavLogo from"@/assets/images/nav-logo.png" 

export default function Navbar() {
  return (
    <nav className="fixed flex flex-col items-center justify-between p-3 py-5 h-[80%] top-5 left-4 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-500 opacity-70 rounded-3xl shadow-2xl shadow-black"></div>
      <ul className="relative flex flex-col items-center gap-6">
        <li>
            <button>
                <Image src={NavLogo} alt="" width={40} className="rounded-full" />
            </button>
        </li>
        <li>
          <button>
            <Icon icon="ph:house-light" width="1.5em" height="1.5em" />
          </button>
        </li>
        <li>
          <button>
            <Icon icon="ph:bag-light" width="1.5em" height="1.5em" />
          </button>
        </li>
        <li>
          <button>
            <Icon icon="ph:chart-line-light" width="1.5em" height="1.5em" />
          </button>
        </li>
        <li>
          <button>
            <Icon icon="ph:chat-light" width="1.5em" height="1.5em" />
          </button>
        </li>
        <li>
          <button>
            <Icon icon="ph:credit-card-light" width="1.5em" height="1.5em" />
          </button>
        </li>
        <li>
          <button>
            <Icon icon="ph:atom-light" width="1.5em" height="1.5em" />
          </button>
        </li>
        <li>
          <button>
            <Icon icon="circum:mug-1" width="1.5em" height="1.5em" />
          </button>
        </li>
      </ul>
      <button className="relative bg-orange-500 p-2 rounded-lg">
        <Icon icon="ph:bell-light" width="1.5em" />
      </button>
    </nav>
  );
}
