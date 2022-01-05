import Link from 'next/link';

export default function index({}) {
  return (
    <ul className="m-5">
      <li>
        <Link href="/workcation">
          <a className="pointer-events-auto">/Workcation</a>
        </Link>
      </li>
      <li>
        <Link href="/IOS">
          <a className="pointer-events-auto">/IOS</a>
        </Link>
      </li>
    </ul>
  );
}
