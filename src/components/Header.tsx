import type { FC } from "react";

const Header: FC = () => {
  return (
    <header>
      <nav>
        <div className="font-logo text-xl md:text-4xl">
          <span className="border-b-4 border-primary">code</span>
          <span className="text-primary">space</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
