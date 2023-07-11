import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header>
        <Link href="/">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/2981/2981313.png"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
        <div>
          <button>login</button>
          <button>sign up</button>
        </div>
      </header>
    </>
  );
};

export default Header;
