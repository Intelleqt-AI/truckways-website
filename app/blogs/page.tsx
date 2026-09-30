import { permanentRedirect } from 'next/navigation';

/** /blogs moved to /guides (brief §2.2, D10). 308. */
export default function BlogsIndex() {
  permanentRedirect('/guides');
}
