import styles from '../../styles/fetch.module.scss';
//Question getStaticPaths
//server side generates html? fast
export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map(data => {
        return {
            params: { id: data.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

//What does this exactly mean?
//getStaticProps
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data = await res.json();

    return {
        props: { fetchData: data}
    }
}

const Details = ({fetchData}) => {
    return (
        <div className={styles.detailContainer}>
            <h1>Details</h1>
            <p>{fetchData.name}</p>
            <p>{fetchData.email}</p>
        </div>
    );
}

export default Details;