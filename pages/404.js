import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(()=> router.push('/'),3000) 
    }, [])

    return (
        <div className="not-found">
            <h2>That page cannnot be found!</h2>
            <Image src="/404.png" width={'800px'} height={'600px'}/>
            <Link href="/"><div className="link">GO Back To Home</div></Link>
        </div>
    )
}

export default NotFound;