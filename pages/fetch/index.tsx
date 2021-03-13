//Question 
//?? side effect
//import styles from './fetch.scss';
//import './fetch.scss';
// why should we use model to connect individual css file?
import styles from '../../styles/fetch.module.scss';
import Link from 'next/link';

export const getStaticProps = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json()

    return {
        props: { fetchData: data}
    }
}

const Fetch = ( { fetchData } ) => {
    return (
        <div className={styles.fetchContainer}>
            <h1>Fetch Data</h1>
            {fetchData.map(data => 
                <Link 
                    href={`/fetch/${data.id}`}
                    key={data.id}
                >
                    <div>{data.address.city}</div>
                </Link>
            )}
        </div>
    );
}

export default Fetch